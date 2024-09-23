import blog from '../assests/blog.png';
import tour from '../assests/tour.jpg';
import './Hero.css';

export default function Skills(){
    return(
       

 <section className='d-flex flex-column p-3 bg-color mt-5 hero-height ' id='Skills'>
            <div className='d-flex flex-row justify-content-center pt-3 gradient-text skills-mar'>
                <h1>Skills</h1>
            </div>
           
            <div className='d-flex flex-column justify-content-center pt-4'>
                <div className='row m-2'>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'>C</button>
                </div>
                    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <button className='btn skills-btn text-white'> HTML</button>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <button className='btn skills-btn text-white'> CSS</button>
                    </div>
                    


            {/* <div className='row position-relative m-2'> */}
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                    <button className='btn skills-btn text-white'> JavaScript</button>
                    </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> PHP</button>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> SQL</button>
                </div>
                
            {/* </div> */}

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> REACT</button>

                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> Bootstrap</button>
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> Ajax</button>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> JQuery</button>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                <button className='btn skills-btn text-white'> GitHUB</button>
                </div>

            </div>   
            </div>
 

                {/* <div className='position-relative m-2'>
                <img className='Blog-img' src={tour}/>

                <div className='d-flex flex-row flex-sm-column justify-content-center ms-5'>  
                    <p className='position-absolute top-0 start-0 text'>
                        This is a tours and travels website made of react and bootstrap5.
                        <div>
                        <button className='btn mt-4'><a className='text-decoration-none text-white' href="https://www.harsantours.com/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                        </div>
                    </p>
                </div>
                
                </div> */}

                

               
            {/* </div> */}

                
        </section>
    )
}