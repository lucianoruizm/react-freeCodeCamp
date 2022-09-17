import '../stylesheets/Testimony.css';

const Testimony = ({ results }) => {
  let display;
  display = results.map((x) => {
    let {id, name, country, position, image, enterprise, testimony} = x;
  
    return (
      <div key={id} className='container-testimony'>
        <div className='container-testimony-img'>
          <img 
            className='img-testimony'
            src={require(`../images/testimony-${image}.png`)}
            alt= {`${name}`}
          />
        </div>
        <div className='container-testimony-text'>
          <p className='name-testimony'>
            <strong>{name}</strong> in {country}</p>
          <p className='testimony-job'>
            {position} at <strong>{enterprise}</strong></p>
          <p className='testimony-text'>{testimony}</p>
        </div>
      </div>
    );
  })
  return (
    <>
     {display}
    </>
  )
}

export default Testimony;