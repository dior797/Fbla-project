import './PageCss/Home.css'
import Land from '../land.avif'
const Home = () => {
    return(
      <>
        <img src={Land}  id='log' width='100%' height="770vh" alt='Canyon'></img>
        <div className='titlediv'>
        <p className='title'><b>Embrace Adventure</b></p>
        <p className='desc'><b>Hundres of deals & Good prices</b></p>
        <button className='titlebut'>Explore</button>
        </div>
      </>
    )
  };
  
  export default Home;