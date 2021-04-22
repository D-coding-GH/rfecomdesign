import imagetest1  from '../images/imagetest1.webp'
import imagetest2  from '../images/imagetest2.webp'
import "./transition.css"



const Transitionpromo2 = () => {

return (
  <div className="imagesize">
    <img id="trans" class="bottom" src={imagetest1} />
    <img id="trans" class="top" src={imagetest2} />
  </div>
);
}




export default Transitionpromo2;