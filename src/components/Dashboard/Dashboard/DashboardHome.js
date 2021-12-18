import React from 'react';
import AllEventsDashboard from '../AllEventsDashboard/AllEventsDashboard';
import AllStudentsDashboard from '../AllStudentsDashboard/AllStudentsDashboard';
import AllTeachersDashboard from '../AllTeachersDashboard/AllTeachersDashboard';
import DashboardNavigation from './DashboardNavigation';


const DashboardHome = () => {


    return (
        <div>
            <DashboardNavigation/>
            <nav className='mt-5 pt-2'>
            <a href="#students">Students</a> 
            <a href="#teacher">Teachers</a>
            <a href="#events">Events</a>
            
            </nav>

            <div className='container' id='students'>
                <AllStudentsDashboard />
            </div>

            <div className='container' id='teacher'>
                <AllTeachersDashboard/>
            </div>
            
            <div className='container' id='events'>
                <AllEventsDashboard/>
            </div>
            
            
            
            
        </div>
    );
};

export default DashboardHome;