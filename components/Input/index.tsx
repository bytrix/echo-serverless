import { motion } from 'framer-motion'
import { HTMLAttributes, useRef, useState } from 'react'
import styles from './index.module.css'
import TextArea from './textarea'
import classNames from 'classnames'

const Input = (props: HTMLAttributes<HTMLInputElement>) => {
    const { style } = props
    const [focused, setFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement>()
    const handleBlur = () => {
        // if(inputRef.current) {
            if(inputRef.current.value === '') {
                setFocused(false)
            }
        // }
    }
    return (
        <input
            ref={inputRef}
            style={style}
            className={styles.input}
            onChange={() => {
                // console.log(inputRef.current.value !== '')
            }}
            placeholder='标题'
            onClick={() => setFocused(true)}
            onBlur={handleBlur} />
    )
}

Input.TextArea = TextArea

export default Input