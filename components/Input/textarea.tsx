import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import styles from './index.module.css'

const TextArea = (props: HTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            placeholder='内容'
            style={props.style}
            rows={22}
            className={styles.textarea} />
    )
}

export default TextArea