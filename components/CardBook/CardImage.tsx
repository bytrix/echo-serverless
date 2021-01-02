import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BiPlay } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'

const CardImage = (props: any) => {
    enum CardTypes {
        IMG,
        VID
    }
    const { src, onClick, type, showImageIcon } = props;
    const imageRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
        const imageBuffer = new Image()
        if(src) {
            imageBuffer.src = src
            imageBuffer.onload = () => {
                if(imageRef.current) {
                    imageRef.current.src = imageBuffer.src
                }
            }
        }
    }, [])
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
            <img
                style={{
                    width: '100%',
                    cursor: 'pointer',
                    borderRadius: '6px',
                }}
                src='data:image/gif;base64,R0lGODlhAQABAIAAAO7u7gAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyRDFBRkY5NDAyQjExRUI5RjA0QUFDMkVCREJEMzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyRDFBRkZBNDAyQjExRUI5RjA0QUFDMkVCREJEMzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDJEMUFGRjc0MDJCMTFFQjlGMDRBQUMyRUJEQkQzMEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDJEMUFGRjg0MDJCMTFFQjlGMDRBQUMyRUJEQkQzMEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAAQABAAACAkQBADs='
                ref={imageRef}
            />
        </motion.div>
    )
}

export default CardImage