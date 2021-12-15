import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import HomeCover from '../HomeCover/HomeCover';
import Navigation from '../../Share/Navigation/Navigation';
import News from '../News/News';
import VisitInfo from '../VisitInfo/VisitInfo';

import './Home.css'
import Footer from '../../Share/Footer/Footer';

const Home = () => {
    return (
        <div>
          <Navigation/>
          <HomeCover/>
          <News/>
          <VisitInfo/>
          <AboutUs/>
          <Footer/>
        </div>
    );
};

export default Home;