import './Section2.css';
import prologis from '../Images/prologis.png';
import tower from '../Images/tower.png';
import realty from '../Images/realty.png';
import equinix from '../Images/equinix.png';

export default function Section2() {
    return (
        <>
            <div className='line'>
                <img src={tower} height={110}></img>
                <img src={prologis} height={130}></img>
                <img src={equinix} height={120}></img>
                <img src={realty} height={110}></img>
            </div>
        </>
    );
}


