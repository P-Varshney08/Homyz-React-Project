import './Heading.css';

import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import logo from '../Images/logo.png';
import Discover from './Discover';
import Button from './Button';

const Heading = () => {
    return (
        <>
            <div className='main'>
                <div className='contents'>
                    <div className='img'>
                        <img src={logo} alt="Image" />
                    </div>
                    <ul className='list'>
                        <li><Link to="/">Residencies</Link></li>
                        <li><Link to="/about">Our Value</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/">Get Started</Link></li>
                        <li><Link to="/"><Button title="Contact" /></Link></li>
                    </ul>
                </div>
                <Discover />
            </div>
            <Routes>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            </Routes>
        </>
    );
}
export default Heading;