import { Link } from "react-router";
import logo from "../../../../assets/img/image.png"
import s from "./Header.module.css"
import { PATH } from "../../routing/path";
 
export const Header = () => {
  return (
    <div className={s.container}>
      <Link to={"/IntensivReact"}>
        <img className={s.logo} src={logo} alt="lototype" />
      </Link>
      <Link to={PATH.HOME} className={s.headerLink}>
        Home
      </Link>
      <Link to={PATH.CHARACTERS} className={s.headerLink}>
        Characters
      </Link>
      <Link to={PATH.LOCATIONS} className={s.headerLink}>
        Locations
      </Link>
      <Link to={PATH.EPISODES} className={s.headerLink}>
        Episodes
      </Link>
    </div>
  )
}