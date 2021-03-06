import { AnimatePresence, motion } from "framer-motion"
import React, { useRef, useState } from "react"
import style from './index.module.css'

interface HeaderMenuProps {
    width?: number
    children: any
}

const HeaderMenu = (props: HeaderMenuProps) => {
    let { children, width = 200 } = props
    if(children instanceof Array) {
        children = children.map((child, i) => React.cloneElement(child, {
            popupWidth: width,
            key: i
        }))
    }
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
    activeItem?: React.ReactElement
    popupWidth?: number
}

const Item = (props: ItemProps) => {
    const { children, popup, popupOffset, activeItem, popupWidth } = props
    const [popupVisible, setPopupVisible] = useState(false)
    const [focused, setFocused] = useState(false)
    const itemRef = useRef<HTMLButtonElement>()
    const itemDom = itemRef.current
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
                    border: 'none',
                    outline: 'none'
                }}
                onClick={() => {
                    setPopupVisible(!popupVisible)
                    setFocused(!focused)
                }}
                onBlur={() => {
                    setPopupVisible(false)
                    setFocused(false)
                }}
            >
                {(focused && activeItem) ? activeItem : children}
            </motion.button>
            <AnimatePresence>
                {popup && popupVisible && (
                    <motion.div
                        className={style.popup}
                        style={{
                            position: 'absolute',
                            borderRadius: 4,
                            width: popupWidth,
                            zIndex: 0,
                            // boxShadow: '0 12px 36px -2px rgba(0,0,0,0.2)',
                            boxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                            top: itemDom?.offsetTop + itemDom?.offsetHeight + popupOffset[0],
                            left: itemDom?.offsetLeft - (popupWidth - itemDom?.offsetWidth) + popupOffset[1]
                        }}
                        initial={{
                            y: 3
                        }}
                        animate={{
                            y: 0
                        }}
                        exit={{
                            y: 3
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault()
                            setPopupVisible(true)
                        }}
                    >
                        {popup}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

HeaderMenu.Item = Item

export default HeaderMenu