import { motion } from 'framer-motion'
import { BiPlay } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import Skeleton from '../Skeleton'

const CardImage = (props: any) => {
    enum CardTypes {
        IMG,
        VID
    }
    const { src, onClick, type, showImageIcon } = props;
    // const imageRef = useRef<HTMLImageElement>(null)
    // useEffect(() => {
    //     const imageBuffer = new Image()
    //     if(src) {
    //         imageBuffer.src = src
    //         imageBuffer.onload = () => {
    //             if(imageRef.current) {
    //                 imageRef.current.src = imageBuffer.src
    //             }
    //         }
    //     }
    // }, [])
    return (
        <motion.div
            initial={{
                translateY: 0
            }}
            whileTap={{
                translateY: 1,
            }}
            transition={{
                duration: 0.1
            }}
            style={{
                position: 'relative'
            }}
            onClick={onClick}
        >
            {
                type === CardTypes.VID && (
                    <BiPlay
                        style={{
                            color: 'white',
                            fontSize: 18,
                            position: 'absolute',
                            // backgroundColor: 'rgba(0,0,0,0.4)',
                            // filter: 'drop-shadow(0px 0px 0.75px rgba(0,0,0,0.42))',
                            filter: 'drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2))',
                            right: 0,
                            padding: 2,
                            // borderRadius: '100%',
                            margin: 8,
                            cursor: 'pointer'
                        }}
                    />
                )
            }
            {
                type === CardTypes.IMG && showImageIcon && (
                    <BsImages
                        style={{
                            color: 'white',
                            fontSize: 18,
                            position: 'absolute',
                            // backgroundColor: 'rgba(0,0,0,0.4)',
                            // filter: 'drop-shadow(0px 0px 0.75px rgba(0,0,0,0.42))',
                            filter: 'drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2))',
                            right: 0,
                            padding: 2,
                            // borderRadius: '100%',
                            margin: 8,
                            cursor: 'pointer'
                        }}
                    />
                )
            }
            <Skeleton.Image
                width='100%'
                style={{
                    cursor: 'pointer',
                    borderRadius: 6
                }}
                src={src}
            />
        </motion.div>
    )
}

export default CardImage