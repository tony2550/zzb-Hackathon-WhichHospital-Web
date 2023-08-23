import Footer from 'components/Footer'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'
import 'scss/root.scss'

const Root = () => {
  return (
    <div id='main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
