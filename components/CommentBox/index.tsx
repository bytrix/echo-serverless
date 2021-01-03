import Comment from '../Comment'
import style from './index.module.css'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useState } from 'react'
import { motion } from 'framer-motion'

const CommentBox = () => {
    const [text, setText] = useState('')
    return (
        <div style={{ flex: 1 }}>
          <div className={style.commentWrapper}>
            {/* one comment */}
            {Array(10).fill(0).map((comment, i) => (
              <Comment
                key={i}
                text='哈咯大家好～今天是2021年的第二天！新年新气象，昨天是新年第一天，我在写新年目标和展望的时候，想把事业这一块的思考分享给大家，这也是我从大学时期就想明白的一个事情，随着时间的推移也在慢慢调整。欢迎大家对号入座，希望对大家能有所启发。'
              />
            ))}
          </div>
          <div className={style.sendBox}>
              <input
                value={text}
                onChange={e => {
                    setText(e.target.value.substr(0, 140))
                }}
                placeholder='写评论..' />
            <div style={{
                color: 'rgba(0,0,0,0.1)',
                lineHeight: '51px'
            }}>
                {text.length}/140
            </div>
            <motion.button
              whileTap={text === '' ? null : {
                scale: 0.9
              }}
              disabled={text === ''}>
                <RiSendPlaneFill size={24}/>
            </motion.button>
          </div>
        </div>
    )
}

export default CommentBox