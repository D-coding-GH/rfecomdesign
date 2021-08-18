import imagetest1 from "../images/imagetest1.webp";
import imagetest2 from "../images/imagetest2.webp";
import "./transition.css";

const Transitionpromo1 = () => {
  return (
    
      <div>
        <div id ="pos" className="trans-container" >
          <img id="size" class="bottom1" src={imagetest1} /> 
          <img id="size" class="top1" src={imagetest2} />
        
          <img id="size" class="bottom2" src={imagetest1} />
          <img id="size" class="top2" src={imagetest2} />
        </div>
      </div>
    
  );
};

export default Transitionpromo1;
