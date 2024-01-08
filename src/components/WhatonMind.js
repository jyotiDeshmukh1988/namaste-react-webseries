import { CDN_URL } from "../utils/constants"; // importing the named export file
const WhatonMind = (props) => {
   // console.log(props);
    const {mindItem} = props;
    const{imageId} = mindItem;
    return <div className="w-1/2">
        <img src={CDN_URL+imageId}/>
    </div>
}

export default WhatonMind;