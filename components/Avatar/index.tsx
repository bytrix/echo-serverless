import styles from './index.module.css'

interface AvatarProps {
    src: string
}

export default (props: AvatarProps) => {
    const { src } = props
    return (
        <img
            src={src}
            className={styles.avatar} />
    )
}


// const UserAvatar = styled.img`
//     width: 24px;
//     border-radius: 100%;
//     vertical-align: bottom;
//     margin-right: 6px;
// `;