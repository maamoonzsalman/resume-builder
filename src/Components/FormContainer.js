import React from 'react';

function FormContainer() {
    return (    
        <div className='form-container'>
            <div className='template-loader form-piece'>
                <div className='clear'>
                    <div className='clear-piece'>
                        Tra
                    </div>
                    <div className='clear-piece'>
                        Clear Resume
                    </div>
                </div>
                <div className='load'>
                    <div className='load-container'>
                        <div className='load-piece'>
                            Load Example
                        </div>
                    </div>
                </div>
            </div>

            <div className='personal-details form-piece'>
                <div className='personal-form'>
                    <div className='personal'>Personal Details</div>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='fullName' className='personal-label'>Full name</label>
                            <input type='text' id='fullName' placeholder='First and last name' required></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email' className='personal-label'>Email <span className="recommended">recommended</span></label>
                            <input type="email" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className='personal-label'>Phone number <span className="recommended">recommended</span></label>
                            <input type="tel" id="phoneNumber" placeholder="Enter phone number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className='personal-label'>Address <span className="recommended">recommended</span></label>
                            <input type="text" id="address" placeholder="City, Country" />
                        </div>  
                    </form>
                </div>    
            </div>

            <div className='education-section form-piece'>

            </div>

            <div className='experience-section form-piece'>

            </div>
        </div>
    );    
};

export default FormContainer;