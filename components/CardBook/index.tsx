import React, { useState } from 'react';
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import CardImage from './CardImage';
// import styled from 'styled-components';
import CardActionButton from './CardActionButton';
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import Avatar from '../Avatar';
import style from './index.module.css'

interface UserProps {
    username: string
    avatar: string
}

interface PostProps {
    title: string
    image: string
    count: any
    user: UserProps
    type: 'image' | 'video'
}

interface CardBookProps {
    // src: string,
    // title: string,
    post: PostProps
    store?: any
    loading?: boolean
    onLoad?: Function
    // user?: any,
    // count?: any
    onClick: Function
}

const CardBook = (props: CardBookProps) => {
    const { store, onLoad, post, onClick } = props
    const { title, image, count, user, type } = post
    // const { PostModalStore } = store
    const [ like, setLike ] = useState(false)
    const [ collect, setCollect ] = useState(false)
    return (
        <div className={style.cardWrapper}>
            <CardImage
                src={image}
                // onClick={() => {
                //     // console.log('PostModalStore', PostModalStore)
                //     // PostModalStore.open()
                // }}
                onClick={onClick}
                onLoad={onLoad}
                type={type}
                showImageIcon={count.images > 1}
            />
            <div className={style.cardTitle}>{title}</div>
            <div style={{
                display: 'flex'
            }}>
                <div className={style.user}>
                    <Link href='/user'>
                        <div>
                            <Avatar
                                // style={{
                                //     width: '10px'
                                // }}
                                src="https://img.xiaohongshu.com/avatar/5f75d88ca8204500012c1379.jpg@240w_240h_90q_1e_1c_1x.jpg"
                                // src={user.avatar}
                                />
                            <span className={style.username}>{user.username}</span>
                        </div>
                    </Link>
                    {/* <Username to='/user'>{user.username}</Username> */}
                </div>
                <CardActionButton
                    defaultIcon={<AiOutlineHeart />}
                    activeIcon={<AiFillHeart />}
                    value={count.likes}
                    active={like}
                    color='red'
                    onClick={() => {
                        if(like) {
                            setLike(false)
                        } else {
                            setLike(true)
                        }
                    }}
                />
                <CardActionButton
                    defaultIcon={<AiOutlineStar />}
                    activeIcon={<AiFillStar />}
                    color='#FAC35B'
                    value={count.likes}
                    active={collect}
                    onClick={() => {
                        if(collect) {
                            setCollect(false)
                        } else {
                            setCollect(true)
                        }
                    }}
                />
            </div>
        </div>
    )
}

// export default inject('store')(observer(CardBook))
export default CardBook

// const CardAction = styled.div`
//     display: flex;
// `;

// const User = styled.div`
//     display: inline-block;
//     flex: 1;
//     text-align: left;
//     margin-top: 2px;
// `;

// const Username = styled.a`
//     height: 24px;
//     line-height: 24px;
//     display: 'inline-block;
//     font-size: 0.9rem;
//     color: rgba(0,0,0,0.5);
//     :hover: {
//         color: rgba(0,0,0,0.7)
//     }
// `;

// const CardTitle = styled.span`
//     text-align: left;
//     padding: 6px;
//     display: block;
//     text-decoration: none
// `;

// const CardWrapper = styled.div`
//     width: 220px;
//     padding: 10px;
//     breakInside: avoid;
//     position: relative;
// `;

// const UserAvatar = styled.img`
//     width: 24px;
//     border-radius: 100%;
//     vertical-align: bottom;
//     margin-right: 6px;
// `;