import blog from '../assests/blog.png';
import tour from '../assests/tour.jpg';
import wood from '../assests/wood.jpeg';

import './Hero.css';

export default function Projects(){
    return(
       

 <section className='d-flex flex-column p-3 bg-color container' id='projects'>
            <div className='d-flex flex-row justify-content-center pt-3 gradient-text skills-mar'>
                <h1>Projects</h1>
            </div>
            <div className='d-flex flex-row pt-2 gradient-text'>
                <h4> These are a few projects I’ve worked on
                </h4>
            </div>
            <div className='col d-flex flex-column flex-lg-row align-items-center pt-4'>
                <div className='position-relative m-2'>
                <img className='Blog-img' src={blog} />

                <div className='d-flex flex-column justify-content-center ms-5'>  
                    <p className='position-absolute top-0 start-0 text'>
                        This is simple blog website made of html and bootstrap5.
                        <div>
                        <button className='btn mt-4'><a className='text-decoration-none text-white' href="https://sindhu844.github.io/Blog_website/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                        </div>
                    </p>
                </div>
                
                </div>

                <div className='position-relative m-2'>
                <img className='Blog-img' src={tour}/>

                <div className='d-flex flex-row flex-sm-column justify-content-center ms-5'>  
                    <p className='position-absolute top-0 start-0 text'>
                        This is a tours and travels website made of react and bootstrap5.
                        <div>
                        <button className='btn mt-4'><a className='text-decoration-none text-white' href="https://www.harsantours.com/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                        </div>
                    </p>
                </div>
                </div>


                <div className='position-relative m-2'>
                <img className='Blog-img' src={wood}/>
                
                <div className='d-flex flex-row flex-sm-column justify-content-center ms-5'>  
                    <p className='position-absolute top-0 start-0 text'>
                        This is a creation of unique wood furniture and interiors website made up of wordpress
                        <div>
                        <button className='btn mt-4'><a className='text-decoration-none text-white' href="https://sindhu646.wordpress.com/2024/09/28/vs-elegant-entrances/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                        </div>
                    </p>
                </div>
                </div>


                

               
            </div>

                
        </section>
    )
}