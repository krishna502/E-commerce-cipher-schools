import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import Cards from './Cards'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
function Home() {
    return (
      <div>  
        <NavBar />
        <ImageSlider slides={SliderData } />
        <Cards />
    </div>
    );
  }
  
  export default Home;