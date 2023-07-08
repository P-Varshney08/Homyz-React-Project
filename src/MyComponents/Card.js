import './Card.css';

export default function Card(props) {
    return (
        <>
            <div className='card'>
                <img src={props.img} alt="Image" height={180} width={250}></img>
                <div>
                    <p>$</p>
                    <span>47,073</span>
                </div>
                <h2>{props.title}</h2>
                <p>Jakarta Garden City Street, Cakung, Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
            </div>
        </>
    );
}