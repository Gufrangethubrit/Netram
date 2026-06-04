
import Header from './components/Header';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Initiatives from './components/Initiatives';
import About from './components/About';
import MissionAndVision from './components/MissionAndVision';
import Founder from './components/Founder';
import Impact from './components/Impact';
import Branch from './components/Branch';
import Blog from './components/Blog';
import Partner from './components/Partner';
import Vision from './components/Vision';
import NobleCauses from './components/NobleCauses';
import Gallery from './components/Gallery';
import Events from './components/Events';
import OurBoardMembers from './components/OurBoardMembers';
import MeetMembers from './components/MeetMembers';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Donate from './components/Donate';
import BankTransfer from './components/BankTransfer';
import ContactUs from './components/ContactUs';

export default function App() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Initiatives/>
      <About/>
      <MissionAndVision/>
      <Founder/>
      <Impact/>
      <Branch/>
      <Blog/>
      <Partner/>
      <Vision/>
      <NobleCauses/>
      <Gallery/>
      <Events/>
      <OurBoardMembers/>
      <MeetMembers/>
      <Testimonials/>
      <Faq/>
      <Donate/>
      <BankTransfer/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
