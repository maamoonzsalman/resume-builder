import React from 'react';
import '../../Styles/PersonalDetails.css';

const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };

    return (
        <>
            <div className='personal-form'>
                    <div className='personal'>Personal Details</div>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='fullName' className='personal-label'>Full name</label>
                            <input type='text' name='name' value={personalDetails.name} onChange={handleChange} id='fullName' placeholder='First and last name' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email' className='personal-label'>Email <span className="recommended">recommended</span></label>
                            <input type="email" name='email' value={personalDetails.email} onChange={handleChange} id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className='personal-label'>Phone number <span className="recommended">recommended</span></label>
                            <input type="tel" name='phone' value={personalDetails.phone} onChange={handleChange} id="phoneNumber" placeholder="Enter phone number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address" className='personal-label'>Address <span className="recommended">recommended</span></label>
                            <input type="text" name='location' value={personalDetails.location} onChange={handleChange} id="address" placeholder="City, Country" />
                        </div>  
                    </form>
            </div>
        </>
    )
}

export default PersonalDetails;