import { HTMLAttributes } from 'react'
import SkeletonImage from './image'
import styles from './index.module.css'

interface SkeletonProps {
    width: number | string
    height?: number | string
}

const Skeleton = (props: SkeletonProps & HTMLAttributes<HTMLDivElement>) => {
    const { width, height, style } = props
    return (
        <div
            style={{
                width: width,
                height: height,
                ...style
            }}
            className={styles.skeleton}>
        </div>
    )
}

Skeleton.Image = SkeletonImage

export default Skeleton