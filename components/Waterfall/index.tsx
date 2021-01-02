import CardBook from "../CardBook"

const Waterfall = (props) => {
    const { dataSource, renderItem } = props
    return (
        <div
            style={{
                // backgroundColor: 'red',
                width: 930,
                columnCount: 4
            }}
        >
            {dataSource.map(item => renderItem(item))}
        </div>
    )
}

export default Waterfall