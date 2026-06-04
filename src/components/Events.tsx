import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type EventItem = {
  title: string;
  description: string;
  image: string;
  status: "Upcoming" | "Completed";
  date?: string;
};

const upcomingEvents: EventItem[] = [
  {
    title: "Free Health Checkup Camp",
    description:
      "Organizing a free medical camp for rural communities with expert doctors.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=600",
    status: "Upcoming",
  },
  {
    title: "Education Awareness Drive",
    description: "Campaign to encourage school enrollment in rural areas.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600",
    status: "Upcoming",
  },
  {
    title: "Community Support Meet",
    description:
      "A local meet-up to connect volunteers, families, and support partners.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600",
    status: "Upcoming",
  },
  {
    title: "Women Empowerment Workshop",
    description:
      "Skill-building and awareness session for women in underserved communities.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    status: "Upcoming",
  },
];

const completedEvents: EventItem[] = [
  {
    title: "Food Distribution Drive",
    description: "Distributed food kits to needy families during crisis.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600",
    status: "Completed",
    date: "Oct 15, 2025",
  },
  {
    title: "Blood Donation Camp",
    description: "Collected 300+ units of blood with community support.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600",
    status: "Completed",
    date: "Sep 28, 2025",
  },
  {
    title: "Blanket Distribution",
    description: "Provided winter essentials to families and elderly people.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
    status: "Completed",
    date: "Jan 10, 2025",
  },
  {
    title: "Clean Water Awareness",
    description: "Promoted hygiene and safe drinking water practices.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
    status: "Completed",
    date: "Dec 05, 2024",
  },
];

function EventCard({ event }: { event: EventItem }) {
  const isCompleted = event.status === "Completed";

  return (
    <div className={`project-card ${isCompleted ? "activity-card" : ""}`}>
      <div className="project-img">
        <img src={event.image} alt={event.title} />
        <div className={`project-category ${isCompleted ? "date-badge" : ""}`}>
          {isCompleted ? (
            <>
              <i className="bi bi-calendar3" /> {event.date}
            </>
          ) : (
            event.status
          )}
        </div>
      </div>
      <div className="project-content">
        <h4>{event.title}</h4>
        <p>{event.description}</p>
        <a
          href={isCompleted ? "./event.html" : "#contact"}
          className="project-link"
        >
          {isCompleted ? "View Details" : "Join Event"}{" "}
          <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  );
}

function EventSlider({
  events,
  sliderKey,
}: {
  events: EventItem[];
  sliderKey: string;
}) {
  return (
    <Swiper
      key={sliderKey}
      modules={[Autoplay, Pagination]}
      className={`projects-slider ${
        sliderKey === "completed" ? "activities-slider" : ""
      } pb-5`}
      spaceBetween={24}
      slidesPerView={1}
      loop={events.length > 3}
      speed={900}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {events.map((event) => (
        <SwiperSlide key={`${event.status}-${event.title}`}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming"
  );

  const events = activeTab === "upcoming" ? upcomingEvents : completedEvents;

  return (
    <section className="projects-section section-padding" id="events">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-tag mx-auto">
            <i className="bi bi-calendar-event-fill me-2" /> Our Events
          </div>
          <h2 className="section-title">
            Upcoming &amp; <span className="gradient-text">Completed Events</span>
          </h2>
          <p className="section-desc mx-auto" style={{ maxWidth: 600 }}>
            Stay updated with our upcoming events and explore our past
            successful activities.
          </p>
        </div>

        <ul
          className="nav nav-custom-tabs justify-content-center mb-5"
          id="eventTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
              role="tab"
              aria-selected={activeTab === "upcoming"}
            >
              <i className="bi bi-clock me-2" /> Upcoming Events
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
              onClick={() => setActiveTab("completed")}
              role="tab"
              aria-selected={activeTab === "completed"}
            >
              <i className="bi bi-check-circle me-2" /> Completed Events
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade show active" role="tabpanel">
            <EventSlider events={events} sliderKey={activeTab} />
          </div>

          <div className="text-center mt-4">
            <a href="./event.html" className="btn-primary-custom px-4">
              View All Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
