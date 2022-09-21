import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-20 bg-white fixed drop-shadow-lg'>
      <div className='px-2 flex w-full h-full justify-between'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> ARCHITEKT.</h1>
        </div>
        <div className='flex items-center'>
          <ul className='hidden md:flex items-center'>
          <li ><Link className="hover-underline-animation" to="home" smooth={true} duration={500}>Startseite</Link></li>
          <li><Link className="hover-underline-animation" to="services" smooth={true} offset={-200} duration={500}>Leistungen</Link></li>
          <li><Link className="hover-underline-animation" to="projects" smooth={true} offset={-50} duration={500}>Projekte</Link></li>
          <li><Link className="hover-underline-animation" to="about" smooth={true} offset={-100} duration={500}>Über Uns</Link></li>
          </ul>
          <div className='hidden md:flex pr-4'>
          <Link className='px-8 ml-4 py-3 solidButton' to="contact" >Kontakt</Link>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-9' /> : <XMarkIcon className='w-9' />}
          </div>
        </div>
        
        
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="home" smooth={true} duration={500}>Startseite</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="services" smooth={true} offset={-200} duration={500}>Leistungen</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="projects" smooth={true} offset={-50} duration={500}>Projekte</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="about" smooth={true} offset={-100} duration={500}>Über Uns</Link></li>
          

        <div className='flex flex-col my-4'>
            <Link className='px-8 py-3 solidButton' to="contact" >Kontakt</Link>
        </div>
      </ul>
    </div>
  );
};

// @layer base {
//   li {
//     @apply p-4
//   }

//   button {
//     @apply text-white border bg-indigo-600 border-indigo-600
//     hover:bg-transparent hover:text-indigo-600 rounded-md
//   }
// }

// .hover-underline-animation {
//   display: inline-block;
//   position: relative;
  
// }

// .hover-underline-animation:after {
//   content: '';
//   position: absolute;
//   width: 100%;
//   transform: scaleX(0);
//   height: 3px;
//   bottom: -3px;
//   left: 0;
//   background-color: #6C63FF;
//   transform-origin: bottom left;
//   transition: transform 0.25s ease-out;
// }

// .hover-underline-animation:hover:after {
//   transform: scaleX(1);
//   transform-origin: bottom left;
// }
 

export default Navbar;