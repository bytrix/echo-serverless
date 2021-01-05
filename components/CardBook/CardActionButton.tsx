import { motion } from "framer-motion";
import React from "react";
// import styled from 'styled-components'
import styles from './index.module.css'

interface CardActionButtonProps {
    defaultIcon: React.ReactElement
    activeIcon: React.ReactElement
    value: number
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    active: boolean
    color: string
}

const CardActionButton = (props: CardActionButtonProps) => {
    const { defaultIcon, activeIcon, value, onClick, active, color = 'black' } = props;
    const icon = active ? activeIcon : defaultIcon;
    return (
        <motion.button
            style={{
                cursor: 'pointer',
                color: active ? color : 'rgba(0,0,0,0.3)',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent'
            }}
            onClick={onClick}
            whileTap={{
                scale: 0.95
            }}
        >
            {React.cloneElement(icon, {
                size: 18
            })}
            {/* <span
                style={{
                    color: active ? color : 'rgba(0,0,0,0.3)',
                    lineHeight: '24px',
                    marginLeft: 2,
                    verticalAlign: '0.24em',
                    fontSize: '0.9rem'
                }}
            >{value}</span> */}
            <Number activeColor={active && color}>
                {value}
            </Number>
        </motion.button>
    );
}

export default CardActionButton;

// const Number = styled.span`
//     color: ${props => props.color};
//     line-height: 24px;
//     margin-left: 2px;
//     vertical-align: 0.26em;
//     font-size: 0.9rem;
// `;

const Number = ({ children, activeColor }) => (
    <span
        style={{
            color: activeColor || 'rgba(0,0,0,0.3)'
        }}
        className={styles.number}>{children}</span>
)