import programmer3Img from '../assests/programmer3.png';
import './Hero.css';

export default function About(){
    return(
        <section className='hero-height d-flex flex-column flex-md-row justify-content-center bg-color gradient-text p-3' id='about'>
          <div className='row '>
            <div className="col d-flex align-items-center justify-content-center">
                <img className='col-12 col-md-3 About-img' src={programmer3Img}  />
            </div>

            <div className="col d-flex justify-content-center">
            <div className='d-flex flex-column justify-content-center about-margin'>
                <div className='gradient-text'>
                <h1>About Me</h1>
                <p>Hi, I’m Sindhu, a passionate web developer specializing in full-stack development. With a degree in Computer Science and over six months of experience
                as a junior developer, I love transforming ideas into responsive, user-friendly websites.My skills include HTML, CSS, JavaScript, php, mysql and frameworks
                like React, Node.js, and Bootstrap. I believe in building applications that not only look great but also deliver an excellent user experience.</p>
                </div>
            </div>
            </div>
</div>
            
        </section>
    )
}