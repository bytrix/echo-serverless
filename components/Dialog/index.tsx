import { motion } from 'framer-motion'
import RcDialog from 'rc-dialog'
// import Dialog from '../rc-dialog'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'

interface DialogProps {
    title?: string
    children: React.ReactNode
    visible: boolean
    onClose: (event: SyntheticEvent) => void
    image?: string
}

export default (props: DialogProps) => {
    const { title, children, image, visible, onClose } = props
    // useEffect(() => {
    //     if(visible) {
    //         document.querySelector('#__next').style.filter = 'blur(2px)'
    //     }
    // }, [visible])
    return (
        <div>
            <RcDialog
                closeIcon={<IoIosClose />}
                visible={visible}
                maskAnimation='fade'
                animation='zoom'
                style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    width: 900,
                    margin: '0 auto',
                    outline: 'none',
                    top: -290,
                    padding: 0,
                    boxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                    borderRadius: 4,
                }}
                maskStyle={{
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0
                }}
                title={title}
                onClose={e => {
                    // document.querySelector('#__next').style.filter = 'blur(0px)'
                    onClose(e)
                }}
            >
                {children}
            </RcDialog>
        </div>
    )
}