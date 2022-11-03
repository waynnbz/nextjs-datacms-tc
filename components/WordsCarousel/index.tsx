import {ButtonRecord, WordCarouselRecord} from "lib/graphql";
import Slider from 'react-slick';
import styles from './words-carousel.module.css';
import {Image} from "react-datocms";
import cn from 'clsx'

export default function WordsCarousel({words}: WordCarouselRecord) {
    const settings = {
        speed: 500,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipe: false,
        touchMove: false,
        vertical: true,
        adaptiveHeight: true
    }

    return (
        <Slider {...settings} className={cn("w-[246px] overflow-y-hidden", styles.slider)}>
            {words.map(word => (
                <div key={word.id} className="w-full h-[80px] my-2 flex items-center justify-center"><Image lazyLoad={false}  data={word.responsiveImage!} /></div>
            ))}
        </Slider>
    )
}
