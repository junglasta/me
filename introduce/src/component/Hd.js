import { useEffect, useRef, useState } from 'react';
import Navi from './Navi';

function Header( props ){
  const targetRef = useRef( null );
  const [menuToggle, menuToggleSet] = useState( true );

  // 성능개선코드
  const handleScroll = () => {
    // console.log("scrolling");

    if( window.scrollY > 100 ){
      targetRef.current.classList.add('scroll');
    }else{
      targetRef.current.classList.remove('scroll');
    }
  }

  useEffect( ()=>{
    const timer = setInterval(()=>{
        window.addEventListener("scroll", handleScroll);
    }, 100);

    return()=>{
      clearInterval(timer);
      window.addEventListener("scroll", handleScroll);
    }
  }, [] );

    return(
        <header ref={targetRef} id="hd" // targetRef
          className="App-header d-flex justify-content-between
                    align-items-center px-lg-5 py-2 border-bottom
                    fixed-top bg-white">
          <h1 className="mb-0">
            <a href="#top" className="d-block">
              <img src="./img/logo.svg" className="img-fluid w-100" alt="logo" />
            </a>
          </h1>
          
          <button className='btn d-md-none' id="allMenu" onClick={ (e)=>{
              menuToggleSet(!menuToggle)
              const gnbclass = menuToggle ? 'mobileGnb' : 'pcGnb';
              console.log( gnbclass );
          }}>햄버거</button>

          <Navi leng="kr"/>        
        </header>
    )
  }
export default Header;
  