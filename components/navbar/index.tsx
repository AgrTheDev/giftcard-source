import Dropdown from "./dropdown"

const Navbar = () => {
  return (
    <div className="md:navbar md:text-left w-full bg-base-200 sm:navbar-center text-center">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Giftcard Source</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-2">
          <li>
            <a className="btn btn-ghost normal-case ">About Us</a>
          </li>
          <Dropdown />
          <li>
            <a className="btn btn-ghost normal-case">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
