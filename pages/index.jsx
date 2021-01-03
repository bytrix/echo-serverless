import { inject, observer } from 'mobx-react'
import CardBook from '../components/CardBook'
import Layout from '../components/Layout'
import PostDialog from '../components/PostDialog'
import Waterfall from '../components/Waterfall'

const App = (props) => {
  const { store } = props
  const { PostDialogStore } = store
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
          }
        ]}
      />
    </Layout>
  )
}

export default inject('store')(observer(App))
