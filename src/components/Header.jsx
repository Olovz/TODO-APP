import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Header ()  {
    const [text] = useTypewriter({
        words: ['TODO TASKS APP', "Reynaldo's Task..."],
        loop:{},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
      return (
    <div className='text-[50px] font-bold text-slate-600 '>
    <h1>{text}
    <span className='text-white'>
      <Cursor />  
    </span>
    
    </h1>
    
    </div>
  )
}

export default Header