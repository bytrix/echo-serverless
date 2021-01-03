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

interface ItemProps {
    children: React.ReactElement
    href: string
}

const Item = (props: ItemProps) => {
    const { children, href } = props
    const router = useRouter()
    return (
        <Link href={href}>
            <span style={{
                color: router.pathname === href ? 'black' : 'rgba(0,0,0,0.3)',
                margin: 8,
                cursor: 'pointer',
                fontSize: 24,
            }}>
                {children}
            </span>
        </Link>
    )
}

Navigation.Item = Item

export default Navigation