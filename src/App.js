import React from 'react';
import Header from './components/Header';
import Photo from './components/Home/Photo';
import ReactLover from './components/Home/ReactLover';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Header/>
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
      <Skills/>
      <Projects/>
    </div>
  );
};

export default App;
