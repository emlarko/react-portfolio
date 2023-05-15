import React from 'react';
import Nav from './Nav';

export default function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className='flex-row'>
                    <div>
                        <h1>Emily Larkin</h1>
                    </div>
                    <div>
                        <Nav 
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                    </div>
                </header>
            </section>
            <section>
                <h2>Welcome</h2>
            </section>
        </div>
    );
};