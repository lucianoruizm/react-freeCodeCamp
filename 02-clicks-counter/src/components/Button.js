import '../stylesheets/Button.css';

function Button({ text, isClickButton, setClick }) {
    return (
      <button
        className={ isClickButton ? 'click-button' : 'restart-button' } 
        onClick={setClick}>
        {text}
      </button>
    )
}

export default Button;