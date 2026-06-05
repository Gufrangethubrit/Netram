import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Feature, FeatureCollection, GeoJsonObject } from 'geojson'
import type { LeafletMouseEvent, PathOptions } from 'leaflet'
import { GeoJSON, MapContainer, useMap } from 'react-leaflet'
import * as L from 'leaflet'
import '../assets/MapSection.css'

type StateColor = {
  colorName: string
  hex: string
}

type ImpactData = {
  focus: string
  projects: number
  beneficiaries: number
  volunteers: number
  since: string
}

type StateFeature = Feature & {
  properties: {
    NAME_1?: string
    st_nm?: string
  } | null
}

const INDIA_STATES_GEOJSON =
  'https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson'
const LADAKH_GEOJSON =
  'https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@ef25ebc/geojson/states/ladakh.geojson'

const STATE_COLOR_REFERENCE: Record<string, StateColor> = {
  'Himachal Pradesh': { colorName: 'Light Green', hex: '#A8D5BA' },
  Punjab: { colorName: 'Green', hex: '#6FBF73' },
  Uttarakhand: { colorName: 'Mint Green', hex: '#8ED1B2' },
  Haryana: { colorName: 'Olive Green', hex: '#7BA05B' },
  Delhi: { colorName: 'Dark Green', hex: '#005E20' },
  'Uttar Pradesh': { colorName: 'Teal Green', hex: '#2E8B7F' },
  Rajasthan: { colorName: 'Sand Orange', hex: '#D9A05B' },
  'Madhya Pradesh': { colorName: 'Mustard', hex: '#C89B3C' },
  Gujarat: { colorName: 'Orange', hex: '#E67E22' },
  Bihar: { colorName: 'Sky Blue', hex: '#5DADE2' },
  Jharkhand: { colorName: 'Blue Green', hex: '#48C9B0' },
  Chhattisgarh: { colorName: 'Forest Green', hex: '#229954' },
  Odisha: { colorName: 'Aqua Blue', hex: '#45B39D' },
  'West Bengal': { colorName: 'Royal Blue', hex: '#3F51B5' },
  Tripura: { colorName: 'Lavender', hex: '#A569BD' },
  Nagaland: { colorName: 'Purple', hex: '#7D3C98' },
  Assam: { colorName: 'Fresh Green', hex: '#58D68D' },
  Maharashtra: { colorName: 'Deep Orange', hex: '#DC7633' },
  Telangana: { colorName: 'Pink Purple', hex: '#C06C84' },
  Karnataka: { colorName: 'Navy Blue', hex: '#34495E' },
  'Andhra Pradesh': { colorName: 'Cyan Blue', hex: '#2E86C1' },
  'Tamil Nadu': { colorName: 'Deep Red', hex: '#B03A2E' },
  Kerala: { colorName: 'Emerald Green', hex: '#138D75' },
  Ladakh: { colorName: 'Slate Gray', hex: '#94A3B8' },
  'Jammu and Kashmir': { colorName: 'Cool Gray', hex: '#B8C4CF' },
}

const NGO_IMPACT_BY_STATE: Record<string, ImpactData> = {
  'Himachal Pradesh': {
    focus: 'Education & Rural Health',
    projects: 6,
    beneficiaries: 4200,
    volunteers: 85,
    since: '2019',
  },
  Punjab: {
    focus: 'Food Security',
    projects: 8,
    beneficiaries: 6100,
    volunteers: 120,
    since: '2018',
  },
  Uttarakhand: {
    focus: 'Disaster Relief',
    projects: 5,
    beneficiaries: 3800,
    volunteers: 72,
    since: '2020',
  },
  Delhi: {
    focus: 'Urban Outreach',
    projects: 12,
    beneficiaries: 9500,
    volunteers: 210,
    since: '2017',
  },
  'Uttar Pradesh': {
    focus: 'Women Empowerment',
    projects: 15,
    beneficiaries: 14200,
    volunteers: 260,
    since: '2016',
  },
  Rajasthan: {
    focus: 'Water Conservation',
    projects: 9,
    beneficiaries: 7800,
    volunteers: 140,
    since: '2019',
  },
  'Madhya Pradesh': {
    focus: 'Child Education',
    projects: 11,
    beneficiaries: 8900,
    volunteers: 155,
    since: '2018',
  },
  Gujarat: {
    focus: 'Healthcare Camps',
    projects: 10,
    beneficiaries: 7200,
    volunteers: 130,
    since: '2019',
  },
  Bihar: {
    focus: 'Nutrition Programs',
    projects: 13,
    beneficiaries: 11500,
    volunteers: 190,
    since: '2017',
  },
  Maharashtra: {
    focus: 'Skill Development',
    projects: 18,
    beneficiaries: 16800,
    volunteers: 280,
    since: '2015',
  },
  Karnataka: {
    focus: 'Digital Literacy',
    projects: 14,
    beneficiaries: 10200,
    volunteers: 175,
    since: '2018',
  },
  Telangana: {
    focus: 'Youth Training',
    projects: 9,
    beneficiaries: 6400,
    volunteers: 110,
    since: '2020',
  },
  'Tamil Nadu': {
    focus: 'Elder Care',
    projects: 7,
    beneficiaries: 5600,
    volunteers: 95,
    since: '2021',
  },
  Kerala: {
    focus: 'Environmental Aid',
    projects: 6,
    beneficiaries: 4800,
    volunteers: 88,
    since: '2020',
  },
  Assam: {
    focus: 'Flood Relief',
    projects: 8,
    beneficiaries: 6900,
    volunteers: 125,
    since: '2019',
  },
  'West Bengal': {
    focus: 'Community Development',
    projects: 10,
    beneficiaries: 8100,
    volunteers: 148,
    since: '2018',
  },
  Ladakh: {
    focus: 'Winter Relief',
    projects: 4,
    beneficiaries: 2100,
    volunteers: 45,
    since: '2021',
  },
}

const STATE_NAME_ALIASES: Record<string, string> = {
  Uttaranchal: 'Uttarakhand',
  Orissa: 'Odisha',
}

const DEFAULT_STATE_FILL = '#d8e2ec'
const NGO_ACTIVE_FILL = '#ff5f00'

function FitIndiaBounds({ geoJsonData }: { geoJsonData: GeoJsonObject | null }) {
  const map = useMap()

  useEffect(() => {
    if (!geoJsonData) return

    const bounds = L.geoJSON(geoJsonData).getBounds()
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [16, 16], maxZoom: 5 })
    }
  }, [geoJsonData, map])

  return null
}

function getImpactTotals() {
  const states = Object.values(NGO_IMPACT_BY_STATE)
  return {
    stateCount: states.length,
    totalProjects: states.reduce((sum, s) => sum + s.projects, 0),
    totalBeneficiaries: states.reduce((sum, s) => sum + s.beneficiaries, 0),
  }
}

function ImpactSummary() {
  const { stateCount, totalProjects, totalBeneficiaries } = getImpactTotals()

  return (
    <div className="map-impact-summary">
      <div className="map-impact-summary__item">
        <span className="map-impact-summary__value">{stateCount}</span>
        <span className="map-impact-summary__label">States</span>
      </div>
      <div className="map-impact-summary__item">
        <span className="map-impact-summary__value">
          {totalBeneficiaries >= 1000
            ? `${Math.round(totalBeneficiaries / 1000)}K+`
            : totalBeneficiaries.toLocaleString('en-IN')}
        </span>
        <span className="map-impact-summary__label">Lives Impacted</span>
      </div>
      <div className="map-impact-summary__item">
        <span className="map-impact-summary__value">{totalProjects}+</span>
        <span className="map-impact-summary__label">Projects</span>
      </div>
    </div>
  )
}

function ImpactMetric({ icon, label, value }: { icon: string; label: string; value: ReactNode }) {
  return (
    <div className="map-impact-metric">
      <div className="map-impact-metric__icon">
        <i className={`fa-solid ${icon}`} />
      </div>
      <div>
        <p className="map-impact-metric__label">{label}</p>
        <p className="map-impact-metric__value">{value}</p>
      </div>
    </div>
  )
}

function ImpactStateDetail({ stateName, impact }: { stateName: string; impact: ImpactData }) {
  return (
    <div className="map-impact-state-card" key={stateName}>
      <div className="map-impact-state-card__header">
        <h4 className="map-impact-state-card__title">{stateName}</h4>
        <span className="map-impact-state-card__badge">{impact.focus}</span>
      </div>
      <div className="map-impact-metrics">
        <ImpactMetric icon="fa-clipboard-list" label="Projects" value={impact.projects} />
        <ImpactMetric
          icon="fa-users"
          label="Beneficiaries"
          value={impact.beneficiaries.toLocaleString('en-IN')}
        />
        <ImpactMetric icon="fa-hands-helping" label="Volunteers" value={impact.volunteers} />
        <ImpactMetric icon="fa-calendar-check" label="Since" value={impact.since} />
      </div>
    </div>
  )
}

function ImpactPanel({ selectedState }: { selectedState: string | null }) {
  const activeStates = Object.entries(NGO_IMPACT_BY_STATE).sort(([a], [b]) => a.localeCompare(b))

  if (selectedState && NGO_IMPACT_BY_STATE[selectedState]) {
    return (
      <>
        <ImpactSummary />
        <ImpactStateDetail stateName={selectedState} impact={NGO_IMPACT_BY_STATE[selectedState]} />
      </>
    )
  }

  return (
    <>
      <ImpactSummary />
      <p className="map-impact-hint">
        <i className="fa-solid fa-location-dot" />
        Hover over a highlighted state on the map to view regional impact details.
      </p>
      <p className="map-impact-states__title">Operational Regions</p>
      <ul className="map-impact-states__list">
        {activeStates.map(([state, impact]) => (
          <li key={state} className="map-impact-states__item">
            <span className="map-impact-states__name">
              <span
                className="map-impact-states__dot"
                style={{ background: STATE_COLOR_REFERENCE[state]?.hex || NGO_ACTIVE_FILL }}
              />
              {state}
            </span>
            <span className="map-impact-states__meta">{impact.projects} projects</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function MapSection() {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(null)
  const [loadError, setLoadError] = useState('')
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const geoJsonStyle = useMemo(() => {
    const getStateName = (feature?: StateFeature) =>
      feature?.properties?.NAME_1 || feature?.properties?.st_nm || ''

    const baseStyle = (stateName: string): PathOptions => {
      const normalizedName = STATE_NAME_ALIASES[stateName] || stateName
      const stateColor = STATE_COLOR_REFERENCE[normalizedName]
      const hasNgoWork = Boolean(NGO_IMPACT_BY_STATE[normalizedName])

      return {
        fillColor: stateColor?.hex || (hasNgoWork ? NGO_ACTIVE_FILL : DEFAULT_STATE_FILL),
        weight: 1,
        opacity: 1,
        color: hasNgoWork ? '#ff5f00' : '#2f3e46',
        fillOpacity: hasNgoWork ? 0.92 : 0.5,
      }
    }

    return {
      getStateName,
      baseStyle,
      styleFn: (feature?: Feature) => baseStyle(getStateName(feature as StateFeature)),
    }
  }, [])

  const onEachState = (feature: Feature, layer: L.Layer) => {
    const stateName = geoJsonStyle.getStateName(feature as StateFeature)
    const normalizedName = STATE_NAME_ALIASES[stateName] || stateName
    const impact = NGO_IMPACT_BY_STATE[normalizedName]

    layer.on({
      mouseover: (event: LeafletMouseEvent) => {
        const selectedLayer = event.target as L.Path
        selectedLayer.setStyle({
          weight: 2.5,
          color: '#111827',
          fillOpacity: 1,
        })
        setSelectedState(normalizedName)

        const tooltipText = impact
          ? `${normalizedName} | ${impact.focus} | ${impact.beneficiaries.toLocaleString('en-IN')} beneficiaries`
          : `${normalizedName} | No active NGO work`

        event.target.bindTooltip(tooltipText, { sticky: true, direction: 'top' }).openTooltip()
      },
      mouseout: (event: LeafletMouseEvent) => {
        event.target.closeTooltip()
        ;(event.target as L.Path).setStyle(geoJsonStyle.baseStyle(stateName))
        setSelectedState(null)
      },
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const loadGeoJson = async () => {
      try {
        const [indiaResponse, ladakhResponse] = await Promise.all([
          fetch(INDIA_STATES_GEOJSON, { signal: controller.signal }),
          fetch(LADAKH_GEOJSON, { signal: controller.signal }),
        ])

        if (!indiaResponse.ok || !ladakhResponse.ok) {
          throw new Error('Map data load failed.')
        }
        const [indiaData, ladakhData] = await Promise.all([indiaResponse.json(), ladakhResponse.json()])

        setGeoJsonData({
          type: 'FeatureCollection',
          features: [...(indiaData.features || []), ...(ladakhData.features || [])],
        })
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          setLoadError('Map data load nahi ho paaya. Thodi der baad refresh karein.')
        }
      }
    }

    loadGeoJson()

    return () => controller.abort()
  }, [])

  return (
    <section className="map-impact-section">
      <div className="map-impact-grid">
        <aside className="map-impact-panel">
          <div className="heading">
            <div className="sub">
              <span>Our Impact</span>
              <i className="fa-solid fa-hand-holding-heart" />
            </div>
            <h2>Creating Change Across India</h2>
          </div>
          <p className="intro">
            Discover how our foundation delivers meaningful programs in communities nationwide.
            Explore state-level outcomes through our interactive impact map.
          </p>
          <ImpactPanel selectedState={selectedState} />
        </aside>

        <div>
          {loadError ? <p className="map-impact-error">{loadError}</p> : null}
          <div className="map-impact-map-wrap">
            <MapContainer
              center={[22.5, 79]}
              zoom={4}
              minZoom={3.5}
              maxZoom={7}
              scrollWheelZoom={false}
              zoomControl={false}
              attributionControl={false}
              dragging={false}
              doubleClickZoom={false}
              boxZoom={false}
              keyboard={false}
              style={{ height: '100%', width: '100%' }}
            >
              <FitIndiaBounds geoJsonData={geoJsonData} />
              {geoJsonData && (
                <GeoJSON data={geoJsonData} style={geoJsonStyle.styleFn} onEachFeature={onEachState} />
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
