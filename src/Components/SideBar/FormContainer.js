import React from 'react';
import TemplateLoader from './TemplateLoader';
import PersonalDetails from './PersonalDetails';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

function FormContainer() {
    return (    
        <div className='form-container'>
            
            <div className='template-loader form-piece'>
                <TemplateLoader/>
            </div>

            <div className='personal-details form-piece'>
                <PersonalDetails/>  
            </div>

            <div className='education-section form-piece'>
                <EducationSection/>
            </div>

            <div className='experience-section form-piece'>
                <ExperienceSection/>
            </div>
        </div>
    );    
};

export default FormContainer;