import { VideoThumbnailRecord} from 'lib/graphql';
import {motion} from 'framer-motion';
import {Image} from "react-datocms";


export default function VideoThumbnail({image, link}: VideoThumbnailRecord) {
    return <motion.a
        href={link!}
        target="_blank"
        initial={{translateY: 400}}
        whileInView={{translateY: 0}}
        viewport={{ once: true, margin: '-100px' }}
        className="w-full relative items-center justify-center flex my-4 sm:my-8">
        <Image className="w-full h-auto" data={image!.responsiveImage!} layout="responsive" />
        <img className="!absolute" alt="play" src="/icons/play-button.svg" width={80} height={80} />
    </motion.a>
}
