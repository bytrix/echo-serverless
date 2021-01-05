import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'
import React from 'react'

interface TooltipProps {
    children: any
    title: string
}

export default (props: TooltipProps) => {
    const { children, title } = props
    return (
        <Tooltip
            mouseLeaveDelay={0}
            // transitionName='rc-tooltip-animate'
            overlay={<div style={{ cursor: 'default' }}>{title}</div>}
        >
            <a>{children}</a>
        </Tooltip>
    )
}