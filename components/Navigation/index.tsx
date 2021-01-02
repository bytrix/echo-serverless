import Link from "next/link"
import { useRouter } from 'next/router'
import React from 'react'

const Navigation = ({ children }) => {
    return (
        <div
            style={{
                margin: '22px 0px'
            }}
        >
            {children}
        </div>
    )
}

const Item = ({ children, href }) => {
    console.log('children', children)
    const router = useRouter()
    return (
        <Link href={href}>
            {React.cloneElement(children, {
                style: {
                    color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',
                    margin: 8,
                    cursor: 'pointer',
                    fontSize: 24,
                }
            })}
        </Link>
    )
}

export {
    Item
}

export default Navigation