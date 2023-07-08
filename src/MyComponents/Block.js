import './Block.css';

export default function Block(props) {
    return (
        <>
            <div className='neeche'>
                <div className='sd'>
                    <div className='num'>{props.num}</div>
                    <div className='yellow'>+</div>
                </div>
                <p>{props.desc}</p>
            </div>
        </>
    );
}