import { shimmer_card_unit } from "../utils/constants";

// Shimmer card to display with animation
export const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };

export default Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                new Array(shimmer_card_unit).fill(0).map((ele,ind)=>{
                    return <CardShimmer key={ind}/>
                })
            }
        </div>
    );
}
