/**
 * Navbar Component
 */

import { Link } from 'react-router-dom'

const Navbar: React.FC<{}> = () => {
  return (
    <nav className="p-4 flex shadow items-center">
      <span className="font-semibold text-lg">EWhizard</span>
      <ul className="flex ml-auto space-x-3">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/gallery'}>Gallery</Link>
        </li>
        <li>
          <Link to={'/services'}>Services</Link>
        </li>
        <li>
          <Link to={'/contacts'}>Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
