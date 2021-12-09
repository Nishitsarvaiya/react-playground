import React from 'react';
// import { CursorContainer } from './containers/cursor';
// import { MenuContainer } from './containers/menu';
import { Carousel, Tabs } from './components';
import './app.css';

function App() {
    return (
        <div className='container'>
            {/* <CursorContainer /> */}
            {/* <MenuContainer /> */}
            <section className='instructors-section'>
                <h1 className='section-head'>
                    Unlimited acces to 100+ instructors<span style={{ color: '#9ed171' }}>.</span>
                </h1>
                <Tabs />
            </section>
            <section className='carousel-section'>
                <h1 className='section-head'>
                    What our customer say<span style={{ color: '#9ed171' }}>.</span>
                </h1>
                <Carousel />
            </section>
        </div>
    );
}

export default App;
