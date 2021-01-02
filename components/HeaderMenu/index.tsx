import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import style from './index.module.css'

const POPUP_WIDTH = 200

const HeaderMenu = ({ children }) => {
    return (
        <div
            style={{
                margin: '22px 0px'
            }}
        >
            {children}
        </div>
    )
}

interface ItemProps {
    children: React.ReactElement
    popup?: React.ReactElement
    popupOffset?: [number, number]
}

const Item = (props: ItemProps) => {
    const { children, popup, popupOffset } = props
    const [popupVisible, setPopupVisible] = useState(false)
    const itemRef = useRef()
    return (
        <>
            <motion.button
                ref={itemRef}
                whileTap={{
                    scale: 0.9
                }}
                style={{
                    fontSize: 22,
                    margin: 8,
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    // backgroundColor: 'blue',
                    border: 'none',
                    outline: 'none'
                }}
                onClick={() => {
                    setPopupVisible(true)
                }}
                onBlur={() => {
                    setPopupVisible(false)
                }}
            >
                {children}
            </motion.button>
            {popup && popupVisible && (
                <motion.div
                    className={style.popup}
                    style={{
                        position: 'absolute',
                        borderRadius: 4,
                        width: POPUP_WIDTH,
                        zIndex: 0,
                        boxShadow: '0 2px 12px -2px rgba(0,0,0,0.2)',
                        top: itemRef.current.offsetTop + itemRef.current.offsetHeight + popupOffset[0],
                        left: itemRef.current.offsetLeft - (POPUP_WIDTH - itemRef.current.offsetWidth) + popupOffset[1]
                    }}
                    initial={{
                        y: 3
                    }}
                    animate={{
                        y: 0
                    }}
                    onMouseDown={(e) => {
                        e.preventDefault()
                        setPopupVisible(true)
                    }}
                >
                    {popup}
                </motion.div>
            )}
        </>
    )
}

HeaderMenu.Item = Item

export default HeaderMenu