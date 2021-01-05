import { HTMLAttributes } from 'react'
import SkeletonImage from './image'
import SkeletonSpan from './span'
import styles from './index.module.css'
import SkeletonDiv from './div'

// interface SkeletonProps {
//     width: number | string
//     height?: number | string
// }

// const Skeleton = (props: SkeletonProps & HTMLAttributes<HTMLDivElement>) => {
//     const { width, height, style } = props
//     return (
//         <div
//             style={{
//                 width: width,
//                 height: height,
//                 ...style
//             }}
//             className={styles.skeleton}>
//         </div>
//     )
// }

// Skeleton.Image = SkeletonImage
// Skeleton.Span = SkeletonSpan

// export default Skeleton

// export const Skeleton = {
//     Image: SkeletonImage,
//     Span: SkeletonSpan
// }

export default {
    Image: SkeletonImage,
    Span: SkeletonSpan,
    Div: SkeletonDiv
}