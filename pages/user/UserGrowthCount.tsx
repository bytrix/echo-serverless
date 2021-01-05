interface UserGrowthCountProps {
    title: string
    count: number
    endDot?: boolean
}

const UserGrowthCount = (props: UserGrowthCountProps) => {
    const { title, count, endDot = true } = props
    return (
        <div style={{
            display: 'inline-block',
            marginBottom: 24,
            fontSize: '1.1rem',
            color: 'rgba(0,0,0,0.6)'
        }}>
            <span style={{
                fontWeight: 500
            }}>{count}</span>
            <span style={{
                fontWeight: 300,
                color: 'rgba(0,0,0,0.5)',
                marginLeft: 6
            }}>{title}</span>
            {endDot && (
                <span style={{
                    margin: 14
                }}>·</span>
            )}
        </div>
    )
}

export default UserGrowthCount