import { motion } from "framer-motion"
import React, { useState } from "react"
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri"
import styles from './index.module.css'

const FollowButton = () => {
    const [followed, setFollowed] = useState(false)
    return (
        <motion.button
            whileTap={{
                scale: 0.9
            }}
            onClick={() => {
                setFollowed(!followed)
            }}
            className={styles.followButton}>
            {followed ? (
                <RiUserUnfollowLine />
            ) : (
                <RiUserFollowLine />
            )}
        </motion.button>
    )
}

export default FollowButton