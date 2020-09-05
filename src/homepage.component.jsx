import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (

    <div className = 'homepage'>

        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>DONAS</h1>
                    <span className='subtitle'>SHOW NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>ROLES</h1>
                    <span className='subtitle'>SHOW NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>CORAZONES</h1>
                    <span className='subtitle'>SHOW NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>DONAS RELLENAS</h1>
                    <span className='subtitle'>SHOW NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className='title'>GALLETAS</h1>
                    <span className='subtitle'>SHOW NOW</span>
                </div>
            </div>
        </div>

    </div>
);

export default HomePage;

