import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ManagementTeam from "./pages/ManagementTeam";
import Story from "./pages/Story";
import Partners from "./pages/Partners";
import Photo from "./pages/Photo";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import RajkumariProfile from "./pages/RajkumariProfile";
import Review from "./pages/Review";
import Roadmap2030 from "./pages/Roadmap2030";
import SattanSharmaProfile from "./pages/SattanSharmaProfile";
import SeemaGuptaProfile from "./pages/SeemaGuptaProfile";
import ShaluArora from "./pages/ShaluArora";
import ShivShanker from "./pages/ShivShanker";
import SumanSingh from "./pages/SumanSingh";
import Video from "./pages/Video";
import Vision from "./pages/Vision";
import VivekMaini from "./pages/VivekMaini";
import Volunteer from "./pages/Volunteer";
import WaseemAhmed from "./pages/WaseemAhmed";
import AbhishekMishraProfile from "./pages/AbhishekMishraProfile";
import AnchalGuptaProfile from "./pages/AnchalGuptaProfile";
import BSRawat from "./pages/BSRawat";
import Bhumika from "./pages/Bhumika";
import Blogs from "./pages/Blogs";
import BoardMember from "./pages/BoardMember";
import Careers from "./pages/Careers";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import Contribute from "./pages/Contribute";
import CSRCollaboration from "./pages/CSRCollaboration";
import DeepakSingh from "./pages/DeepakSingh";
import Donate from "./pages/Donate";
import Event from "./pages/Event";
import Internship from "./pages/Internship";
import Media from "./pages/Media";
import Mission from "./pages/Mission";
import NandiniHanda from "./pages/NandiniHanda";
import NeerajRautela from "./pages/NeerajRautela";
import About from "./pages/About";



export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-management-team" element={<ManagementTeam />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/partner" element={<Partners />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/rajkumari-profile" element={<RajkumariProfile />} />
        <Route path="/review" element={<Review />} />
        <Route path="/roadmap2030" element={<Roadmap2030 />} />
        <Route path="/sattan-sharma-profile" element={<SattanSharmaProfile />} />
        <Route path="/seema-gupta-profile" element={<SeemaGuptaProfile />} />
        <Route path="/shalu-arora" element={<ShaluArora />} />
        <Route path="/shiv-shanker" element={<ShivShanker />} />
        <Route path="/suman-singh" element={<SumanSingh />} />
        <Route path="/video" element={<Video />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/vivek-maini" element={<VivekMaini />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/waseem-ahmed" element={<WaseemAhmed />} />
        <Route path="/abhishek-mishra-profile" element={<AbhishekMishraProfile />} />
        <Route path="/anchal-gupta-profile" element={<AnchalGuptaProfile />} />
        <Route path="/b.s.rawat" element={<BSRawat />} />
        <Route path="/bhumika" element={<Bhumika />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/board-member" element={<BoardMember />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/csr-collaboration" element={<CSRCollaboration />} />
        <Route path="/deepak-singh" element={<DeepakSingh />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event" element={<Event />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/media" element={<Media />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/nandini-handa" element={<NandiniHanda />} />
        <Route path="/neeraj-rautela" element={<NeerajRautela />} />
        <Route path="/about" element={<About />} />


        <Route path="*" element={<HomePage />} />
      </Routes>
     
  )
}
