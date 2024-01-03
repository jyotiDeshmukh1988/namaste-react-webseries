import { CDN_URL } from "../utils/constants"; // importing the named export file
const WhatonMind = (props) => {
   // console.log(props);
    const {mindItem} = props;
    const{imageId} = mindItem;
    return <div className="whatnew-container">
        <img src={CDN_URL+imageId} width="144" height="180"/>
    </div>
}

export default WhatonMind;