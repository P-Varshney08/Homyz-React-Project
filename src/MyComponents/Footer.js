import './Footer.css';
import logo from '../Images/logo2.png'

export default function Footer() {
    return (
        <>
            <div className="poora">
                <div className="img">
                    <img src={logo}></img>
                    <p><pre>Our vision is to make all people the 
                    </pre>best place to live for them.</p>
                </div>
                <div className="cntn">
                    <h1>Information</h1>
                    <p>145 New York, FL 5467, USA</p>
                    <div>
                        <ul className='list'>
                            <li>Property</li>
                            <li>Services</li>
                            <li>Product</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}