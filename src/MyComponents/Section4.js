import './Section4.css';
import img from '../Images/g.jpg';
import Dropdown from './Dropdown';

export default function Section4() {
    return (
        <div className='gov'>
            <div className='lft'>
                <img src={img} alt="Image" width={450} height={500}></img>
            </div>
            <div className='rgt'>
                <h2>Our Value</h2>
                <h1>Value We Give to You</h1>
                <p>We always ready to help by providijng the best services for you.<br /> We beleive a good blace to live can make your life better</p>
                <Dropdown des="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim." t="Best interest rates on the market"/>
                <Dropdown des="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim." t="Prevent unstable prices"/>
                <Dropdown des="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim." t="Best price on the market"/>
            </div>
        </div>
    );
}