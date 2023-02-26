import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Root: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
