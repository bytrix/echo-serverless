import './css/app.css'
import { Provider } from 'mobx-react'
import store from '../store'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
