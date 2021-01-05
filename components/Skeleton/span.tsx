import { HTMLAttributes } from 'react'
import SkeletonImage from './image'
import Skeleton from './index'
import { SkeletonProps } from './skeleton'

interface SkeletonSpanProps extends SkeletonProps, HTMLAttributes<HTMLSpanElement> {
    // width: number
    // height?: number
}

const SkeletonSpan = (props: SkeletonSpanProps) => {
    const { style, width, height = 24 } = props
    return (
        <Skeleton.Div
            width={width}
            height={height}
            animated={true}
            style={{
                display: 'inline-block',
                height: height,
                // marginLeft: 12
                // marginTop: 4
                ...style
            }} />
    )
}

export default SkeletonSpan
// export default () => <h1>aa</h1>