import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import resume from '../../assets/Jimmy-Resume.pdf';
import './Header.css';

const navLinks = [
  {
    display: 'Home',
    url: '#home',
  },
  {
    display: 'About',
    url: '#about',
  },
  {
    display: 'Portfolio',
    url: '#portfolio',
  },
  {
    display: 'Contact',
    url: '#contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header_shrink');
      } else {
        headerRef.current.classList.remove('header_shrink');
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle('menu_active');

  // 1:23:45
  // const handleClick = (e) => {
  //   // e.preventDefault();
  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offSetTop;
  //   console.log(location);
  //   window.scrollTo({
  //     left: 0,
  //     top: location - 70,
  //   });
  //   console.log(location);
  // };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>JIMWORLD</h5>
          </div>

          <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-4">
            <a href={resume} download="Jimmy's Resume">
              <button className="btn resume_btn">Download Resume</button>
            </a>
            <span className="mobile_menu">
              <i class="ri-menu-5-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
