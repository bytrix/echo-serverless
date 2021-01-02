import CardBook from '../components/CardBook'
import Layout from '../components/Layout'
import Waterfall from '../components/Waterfall'

const App = () => (
  <Layout>
    <Waterfall
      renderItem={item => (
        <CardBook post={item}/>
      )}
      dataSource={[
          {
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

export default App
