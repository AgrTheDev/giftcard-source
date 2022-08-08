import * as Icon from "react-bootstrap-icons"
import { getAllGiftcards } from "../../lib/giftcards"

const Dropdown = () => {
  return (
    <li tabIndex={0}>
      <a className="btn btn-ghost normal-case">
        Giftcards
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul className="bg-base-200">
        {getAllGiftcards().map((giftcard) => {
          return (
            <li className="hover-bordered" key={giftcard.name}>
              <a>
                {giftcard.icon != "GooglePlay" ? (
                  <giftcard.icon />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                  </svg>
                )}
                {giftcard.name}
              </a>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default Dropdown
