import '../stylesheets/Counter.css'

function Counter({ numClicks }) {
    return(
        <div className='counter'>
            {numClicks}
        </div>
    )
}

export default Counter;