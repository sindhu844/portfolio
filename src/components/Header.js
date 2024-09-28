
    import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hanuman = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<nav className="navbar navbar-expand-lg navbar-dark header gradient-text sticky-top Header-mar ${isScrolled ? 'scrolled' : ''}">


    <div className="container">

    <a className="navbar-brand h1" href="/">PORTFOLIO</a>

      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleMenu}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#Skills">Skills</a>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#resume">Resume</a>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    </nav>
  );
};

export default Hanuman;



    // <header className='Header-mar sticky-top'>
    //   <nav className="navbar navbar-dark bg-color navbar-expand-md">
    //     <div className="container">
    //       <a className="navbar-brand" href="/">PORTFOLIO</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navShow"  onClick={toggleMenu}><span className="navbar-toggler-icon"></span></button>
    //       <div className="collapse navbar-collapse ${isOpen ? 'show' : ''}" id="navShow">
    //         <ul className="navbar-nav ms-auto">
    //           <li className="nav-item text-center" onClick={closeMenu}><a className="nav-link active nav1" href="/">Home</a></li>
    //           <li className="nav-item text-center" onClick={closeMenu}><a className="nav-link nav1" href="#about">About</a></li>
    //           <li className="nav-item text-center" onClick={closeMenu}><a className="nav-link nav1" href="#projects">Projects</a></li>
    //           <li className="nav-item text-center" onClick={closeMenu}><a className="nav-link nav1" href="#resume">Resume</a></li>
    //           <li className="nav-item text-center" onClick={closeMenu}><a className="nav-link nav1" href="#contact">Contact</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    

//   )
  
// }

{/* <div className="col-6 pt-3 d-block d-md-none">

<ul className="list-inline d-flex justify-content-end ">
    <li className="list-inline-item"><a href="#" className=" ">Home</a></li>
    <li className="list-inline-item"><a href="#" className=" ">About</a></li>
    <li className="list-inline-item"><a href="#" className=" ">Projects</a></li>
    <li className="list-inline-item"><a href="#" className=" ">Contact</a></li>

</ul>
</div> */}

{/*   
    </div>
    </div> */}
