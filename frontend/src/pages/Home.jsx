import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgendaSpeakers from '../components/AgendaSpeakers';
import HeroSection from '../components/HeroSection';
import ConferenceTimer from '../components/ConferenceTimer';
import '../styles/Home.css'; // Import CSS
import IEEEConferenceTable from '../components/IEEEConferenceTable';
import IEEEImportantDates from "../components/IEEEImportantDates"
const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <div className="main-content">
        <HeroSection />
        <ConferenceTimer />
        <IEEEImportantDates/>
        <AgendaSpeakers />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
