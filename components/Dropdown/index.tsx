import React from "react"
import { useState } from "react"
import style from './index.module.css'

const Dropdown = ({ children, popup }) => {
    const [popupVisible, setPopupVisible] = useState(false)
    console.log('className', style.caret)
    return (
        <>
            1122
            <div className={style.caret}>
                {/* {popup} */}
                aa
            </div>
            {/* {popupVisible ? React.cloneElement(popup, {
                className: style.caret,
                style: {
                    backgroundColor: 'red',
                    position: 'absolute',
                    // top: 60,
                    // ...popup.props.style
                }
            }) : null} */}
            {React.cloneElement(children, {
                onClick: () => {
                    setPopupVisible(true)
                },
                onBlur: () => {
                    setPopupVisible(false)
                }
            })}
        </>
    )
}

export default Dropdown