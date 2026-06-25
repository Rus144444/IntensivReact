import { Link } from "react-router";
import logo from "../../../../assets/img/image.png"
import s from "./Header.module.css"
 
export const Header = () => {
  return (
    <div className={s.container}>
      <Link to={"/IntensivReact"}>
        <img className={s.logo} src={logo} alt="lototype" />
      </Link>
      <Link to={"/IntensivReact"} className={s.headerLink}>
        Home
      </Link>
      <Link to={"/IntensivReact/characters"} className={s.headerLink}>
        Characters
      </Link>
      <Link to={"/IntensivReact/locations"} className={s.headerLink}>
        Locations
      </Link>
      <Link to={"IntensivReact/episodes"} className={s.headerLink}>
        Episodes
      </Link>
    </div>
  )
}