import './Box.css';

export default function Box(props) {
    return (
        <>
            <div className='box'>
                <div className='info'>
                    <img src={props.img} height={40}></img>
                    <div className='abt'>
                        <h4>{props.title}</h4>
                        <p>{props.num}</p>
                    </div>
                </div>
                <button className='bb'>{props.msg}</button>
            </div>
        </>
    );
}