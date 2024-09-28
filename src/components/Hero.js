import programmerImg from '../assests/sindhu_img.png';
import './Hero.css';
import {AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";


export default function Hero(){
    return(
        <section className='d-flex flex-column p-4 flex-sm-row justify-content-center bg-color1 hero-height' id='home'>
                    <img className="col-12 col-md-3 responsive-img" src={programmerImg}/>

            <div className='d-flex flex-column justify-content-center'>
                <div className='ms-2'>
            <h1 className='pt-3 gradient-text'>Hello,<br/>I'm <span className=''>Sindhu</span>
            <p>I'm a Full-stack Developer</p>
            </h1>
            <div className='pt-1'>
                <a target='blank' href="https://www.linkedin.com/in/sindhu-v-6819b8290" className='pe-2 text-white'><AiOutlineLinkedin size={40}/></a>
                <a target='blank' href=" https://wa.me/+918870994077" className='pe-2 text-white'><AiOutlineWhatsApp size={40}/></a>
                <a target='blank' href="mailto:sindhu84401@gmail.com" className='pe-2 text-white'><AiOutlineMail size={40}/></a>

                </div>
            </div>
            </div>
        </section>
    )
}