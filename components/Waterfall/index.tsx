interface WaterfallProps {
    dataSource: Array<any>
    renderItem: (item: any) => JSX.Element
}

const Waterfall = (props: WaterfallProps) => {
    const { dataSource, renderItem } = props
    return (
        <div
            style={{
                width: 930,
                columnCount: 4
            }}
        >
            {dataSource && dataSource.map(item => renderItem(item))}
        </div>
    )
}

export default Waterfall