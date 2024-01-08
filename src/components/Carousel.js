import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useState} from 'react'
import WhatonMind from './WhatonMind';

export default function Carousel(props){
    const [sliderRef, setSliderRef] = useState(null)
    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
      }
    const {newItem} = props;
    return (<>
        <div className='flex items-center my-8 justify-between'>
            <div className='heading'>
                <h2 className='font-bold text-xl tracking-widest'>What's on your mind?</h2>
            </div>
            <div className='controls'>
                <button onClick={sliderRef?.slickPrev}>
                <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                <FaChevronRight />
                </button>
            </div>
        </div>
        <div className='container'>
        <Slider ref={setSliderRef} {...sliderSettings}>
        { newItem.map((item)=>{
            return <WhatonMind mindItem={item} key={item.id}/>
        })}
        </Slider>
        </div>
        </>
    ) 
}