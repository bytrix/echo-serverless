import { motion } from "framer-motion"
import React from "react"

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

const Item = ({ children }) => {
    return (
        <motion.button
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
        >
            {children}
        </motion.button>
    )
}

export {
    Item
}

export default HeaderMenu