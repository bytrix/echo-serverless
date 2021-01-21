import { HTMLAttributes, useState } from "react"
import styles from './index.module.scss'
import classNames from 'classnames'
import { motion } from "framer-motion"

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    children: any
    defaultActiveKey: string
}

const Tabs = (props: TabsProps) => {
    const { children, defaultActiveKey, style } = props
    const [activeKey, setActiveKey] = useState(defaultActiveKey)
    return (
        <div style={{
            ...style,
            // backgroundColor: 'red',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {children.filter(child => child.key === activeKey).map(child => (
                <TabPane
                    tab={child.props.tab}
                    style={child.props.style}
                    key={child.key}
                >
                    {child.props.children}
                </TabPane>
            ))}
            <div>
            {children.map(child => (
                <button
                    onClick={() => {
                        setActiveKey(child.key)
                    }}
                    className={classNames(styles.tab, {
                        [styles.activeTab]: activeKey == child.key
                    })}
                >{child.props.tab}</button>
            ))}
            </div>
        </div>
    )
}

interface TabPaneProps extends HTMLAttributes<HTMLDivElement> {
    key: string
    tab: any
    children: any
}

const TabPane = (props: TabPaneProps) => {
    const { key, tab, children, style } = props
    return (
        <motion.div
            initial={{
                // scale: 0.6
                x: 100
            }}
            animate={{
                // scale: 1
                x: 0
            }}
            style={style}
            key={key}>
                {children}
        </motion.div>
    )
}

Tabs.TabPane = TabPane

export default Tabs