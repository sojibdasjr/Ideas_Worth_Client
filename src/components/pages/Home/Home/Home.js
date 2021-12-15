import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import HomeCover from '../HomeCover/HomeCover';
import Navigation from '../../Share/Navigation/Navigation';
import News from '../News/News';
import VisitInfo from '../VisitInfo/VisitInfo';

import './Home.css'
import Footer from '../../Share/Footer/Footer';
import Students from '../Students/Students';

const Home = () => {
    return (
        <div>
          <Navigation/>
          <HomeCover/>
          <News/>
          <Students/>
          <VisitInfo/>
          <AboutUs/>
          <Footer/>
        </div>
    );
};

export default Home;