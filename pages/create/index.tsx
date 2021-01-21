import { motion } from 'framer-motion'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { MdVideoLibrary } from 'react-icons/md'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import Tabs from '../../components/Tabs'
import styles from './index.module.css'
import Lottie from 'react-lottie'
import bathAnimation from './lf30_editor_uhvxusxm.json'

const Create = () => {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    height: 450
                }}
            >
                <div
                    style={{
                        border: '2px solid black',
                        boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.4)',
                        borderRadius: 12,
                        textAlign: 'center',
                        width: 260,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Tabs defaultActiveKey='image' style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Tabs.TabPane style={{ flex: 1 }} key='image' tab={<MdVideoLibrary />}>
                                <motion.button
                                    whileTap={{
                                        scale: 0.9
                                    }}
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        fontSize: '3.5rem',
                                        outline: 'none',
                                        cursor: 'pointer',
                                        marginTop: 120
                                    }}
                                >
                                    <AiOutlineCloudUpload />
                                </motion.button>
                                <div>可上传1分钟以内的视频</div>
                            </Tabs.TabPane>
                            <Tabs.TabPane style={{ flex: 1 }} key='video' tab={<BsImages />}>
                                <motion.button
                                    whileTap={{
                                        scale: 0.9
                                    }}
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        fontSize: '3.5rem',
                                        outline: 'none',
                                        cursor: 'pointer',
                                        marginTop: 120
                                    }}
                                >
                                    <AiOutlineCloudUpload />
                                </motion.button>
                                <div>可上传10张以内图片</div>
                            </Tabs.TabPane>
                        </Tabs>
                        
                    </div>
                </div>
                <div style={{ flex: 1, paddingLeft: 32 }}>
                    {/* <Loading
                        style={{
                            marginTop: 80
                        }}
                    /> */}
                    <Input style={{
                        width: '100%'
                    }} />

                    <Input.TextArea
                        style={{
                            width: '100%',
                            resize: 'none'
                        }}
                    />
                    
                    {/* <input className={styles.title} />
                    <textarea className={styles.content} /> */}
                </div>
                <div style={{
                    zIndex: -99999
                    // backgroundColor: 'yellow'
                }}>
                    <Lottie
                        width={300}
                        options={{
                            animationData: bathAnimation
                        }}
                        // style={{
                        //     backgroundColor: 'red'
                        // }}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Create