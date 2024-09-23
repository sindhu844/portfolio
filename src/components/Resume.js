import resume from '../assests/resume.png';
import resume_pdf from '../assests/V_Sindhu.pdf';

import './Hero.css';


export default function Resume() {
    return (
        <section className='bg-color d-flex flex-column flex-md-row justify-content-center p-3 hero-height' id='resume'>
            <div className="row d-flex align-items-center">
                <div className='col d-flex flex-column'>
                    <h1 className='md-hero ps-5 pt-5 resume-color gradient-text'>Here you can view my resume
                    </h1>
                    <div className='pt-3 ps-5'>

                        <a className='btn text-white' target='blank' href={resume_pdf}>Download</a>

                    </div>
                </div>
                <div className="col d-flex">
                    <img className="Resume-img" src={resume} />
                </div>
            </div>


        </section>
    )
}