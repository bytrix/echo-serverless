import { HTMLAttributes } from "react"
import styles from './index.module.css'
import classNames from 'classnames'
import { SkeletonProps } from "./skeleton"

interface SkeletonDivProps extends SkeletonProps, HTMLAttributes<HTMLDivElement> {
    // width: number | string
    // height?: number | string
}

const SkeletonDiv = (props: SkeletonDivProps) => {
    const { width, height, style, animated } = props
    return (
        <div
            style={{
                width: width,
                height: height,
                ...style
            }}
            className={classNames([styles.skeleton, {[styles.animation]: animated}])}>
        </div>
    )
}

export default SkeletonDiv