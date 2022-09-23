import '../stylesheets/LogoFCC.css';

function LogoFCC () {
    
    return (
        <div className='freecodecamp-logo-container'>
            <img
              src={freeCodeCampLogo}
              className='freecodecamp-logo'
              alt='freeCodeCamp logo' />
        </div>
    );
}

export default LogoFCC;