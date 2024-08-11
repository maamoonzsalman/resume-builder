import React from 'react';

function SideBarNav() {
    return (
        <div className='sidebar-nav'>
            <div className="nav-piece content"> 
                
                <div className='content-piece'>
                    Content
                </div>
            </div>
            <div className="nav-piece customize">
               
                <div className='customize-piece'>
                    Customize
                </div>
            </div>
        </div>
    );
};

export default SideBarNav;