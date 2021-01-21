import { inject, observer } from 'mobx-react'
import CardBook from '../components/CardBook'
import Layout from '../components/Layout'
import PostDialog from '../components/PostDialog'
import Waterfall from '../components/Waterfall'
import React, { useEffect } from 'react'

const App = (props) => {
  const { store } = props
  const { PostDialogStore, PostStore } = store
  useEffect(() => {
    // console.log('props', props)
    PostStore.getPosts();
  }, []);
  return (
    <Layout>
      <PostDialog
        visible={PostDialogStore.visible}
      />

      <Waterfall
        renderItem={item => (
          <CardBook
            key={item.id}
            onClick={() => {
              PostDialogStore.open()
            }}
            post={item}/>
        )}
        dataSource={[
            {
              id: 1,
              title: 'title',
              image: '//aa',
              type: 'image',
              user: {
                  username: 'username',
                  avatar: '//aa'
              },
              count: {
                  likes: 1
              }
          },
          {
            id: 2,
            title: '大理民宿|住进🌊《心花怒放》电影拍摄地',
            image: 'https://ci.xiaohongshu.com/933aeb95-8128-229e-b655-f16ad03b3192?imageView2/2/w/1080/format/jpg',
            type: 'image',
            user: {
                username: '迟到大王Summer',
                avatar: 'https://img.xiaohongshu.com/avatar/5d6f4ba3bded9900013cfda9.jpg@240w_240h_90q_1e_1c_1x.jpg'
            },
            count: {
                likes: 1
            }
          }
        ]}
      />
    </Layout>
  )
}

export default inject('store')(observer(App))
