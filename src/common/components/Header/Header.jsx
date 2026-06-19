import { NavLink } from "react-router";
import logo from "../../../assets/img/image.png"
import s from "./Header.module.css"
 
export const Header = () => {
  return (
    <div className={s.container}>
      <NavLink to={"IntensivReact"}>
        <img className={s.logo} src={logo} alt="lototype" />
      </NavLink>
      <NavLink to={"IntensivReact"} className={s.headerLink}>
        Home
      </NavLink>
      <NavLink to={"/characters"} className={s.headerLink}>
        Characters
      </NavLink>
      <NavLink to={"/locations"} className={s.headerLink}>
        Locations
      </NavLink>
      <NavLink to={"/episodes"} className={s.headerLink}>
        Episodes
      </NavLink>
    </div>
  )
}