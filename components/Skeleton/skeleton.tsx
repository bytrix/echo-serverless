import { HTMLAttributes } from "react"
import styles from './index.module.css'
import classNames from 'classnames'

export interface SkeletonProps {
    width: number | string
    height?: number | string
    animated?: boolean
}

const Skeleton = (props: SkeletonProps & HTMLAttributes<HTMLDivElement>) => {
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

export default Skeleton