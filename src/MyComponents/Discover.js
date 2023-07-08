import './Discover.css';
import window from '../Images/b2.jpg';
// import window from '../Images/hero-image.png';
import loc from '../Images/location.png';
import Button from './Button';
import Block from './Block';

export default function Discover() {
    return (
        <>
            <div className='ek'>
                <div className='cntnt'>
                    <div className='des'>
                        <h1>Discover Most Suitable Property</h1>
                        <p>Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you</p>
                    </div>
                    <div className='field'>
                        <img src={loc}></img>
                        <input type="text"></input>
                        <Button title="Search"/>
                    </div>
                    <div className='ekk'>
                        <Block num="9,000" desc=" Premium Product"/>
                        <Block num="2,000" desc=" Happy Customer"/>
                        <Block num="28" desc=" Awards Winning"/>
                    </div>
                </div>
                <div className='photo'>
                    <img src={window} height={500} width={450} ></img>
                </div>
            </div>
        </>
    );
}