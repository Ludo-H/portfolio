import React, { Fragment } from 'react';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Photo from './components/Home/Photo';
import ReactLover from './components/Home/ReactLover';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <section>
      <div className='hello'>
        <span className='h'>H</span>
        <span className='e'>e</span>
        <span className='l1'>l</span>
        <span className='l2'>l</span>
        <span className='o1'>o</span>
        <span className='w'>W</span>
        <span className='o2'>o</span>
        <span className='r'>r</span>
        <span className='l3'>l</span>
        <span className='d'>d</span>
        <span className='exclam'>!</span>
      </div>
      <Photo/>
      <ReactLover/>
      </section>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
};

export default App;
