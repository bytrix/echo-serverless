import style from './index.module.css'

interface SkeletonProps {
    width: number
    height: number
}

const Skeleton = (props: SkeletonProps) => {
    const { width, height } = props
    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className={style.skeleton}>
        </div>
    )
}

export default Skeleton