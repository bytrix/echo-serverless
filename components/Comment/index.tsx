import Skeleton from "../Skeleton"

const Comment = (props) => {
    const { text } = props
    return (
        // <div>
            <div
                style={{
                    display: 'flex',
                    marginBottom: 24
                }}
            >
                <Skeleton.Image
                    width={36}
                    height={36}
                    src='https://img.xiaohongshu.com/avatar/5f86871900000000010035f5.jpg@240w_240h_90q_1e_1c_1x.jpg'
                    style={{
                        borderRadius: 4
                    }}
                />
                <div
                    style={{
                        marginLeft: 12,
                        verticalAlign: 'bottom',
                        fontSize: '0.9rem',
                        flex: 1
                    }}
                >
                    <a href='/a' style={{
                        marginRight: 12,
                    }}>大学设计素材站</a>
                    <span
                        style={{
                            fontWeight: 300,
                            lineHeight: '1.5rem'
                        }}
                    >{text}</span>
                </div>
            </div>
        // </div>
    )
}

export default Comment