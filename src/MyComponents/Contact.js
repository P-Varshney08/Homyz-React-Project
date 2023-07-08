import './Contact.css';
import landscape from '../Images/b3.jpg';
// import landscape from '../Images/value.png';
import phone_img from '../Images/phone.png';
import chat_img from '../Images/chat.png';
import bubble_img from '../Images/bubble.png';
import send_img from '../Images/send.png';
import Box from './Box';

const Contact = () => {
    return(
        <>
            <div className="sara">
                <div className="left">
                    <div className='lleft'>
                        <h2>Our Contact Us</h2>
                        <h1>East to Contact Us</h1>
                        <p>We always ready to help by providing the best services for you. We believe a good place
                            <br />to live can make your life better</p>
                        <div className='boxes'>
                            <Box img={phone_img} title="Call" num="021 123 145 14" msg="Call Now" />
                            <Box img={chat_img} title="Chat" num="021 123 145 14" msg="Chat Now" />
                            <Box img={send_img} title="Message" num="021 123 145 14" msg="Message Now" />
                            <Box img={bubble_img} title="Video Call" num="021 123 145 14" msg="Video Call Now" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={landscape} height={500} width={450} alt="Image" />
                </div>
            </div>
        </>
    );
}
export default Contact;