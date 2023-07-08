import Button from './Button';
import './Section6.css';

export default function Section6() {
    return(
        <>
            <div className='phla'>
                <h2>Get Started with Homyz</h2>
                <p>Subscribe and find super attractive price quotes from us.
                <br />Find your residence soon</p>
                {/* <button> Get Started</button> */}
                <Button title="Get Started" />
            </div>
        </>
    );
}