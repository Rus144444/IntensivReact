import { NavLink } from "react-router"
import {PageTitle} from "../../common/components/PageTitle/PageTitle"
import s from "./HomePage.module.css"




export const HomePage = () => {
  return (
    <div className={s.mainWrapper}>
      <PageTitle style = {{fontSize: "100px"}} title="The Rick and Morty" />
       <nav className={s.linkWrapper}>
          <NavLink to="/characters" className="linkButton">Character</NavLink>
          <NavLink to="/episodes" className="linkButton">Episode</NavLink>
          <NavLink to="/locations" className="linkButton">Location</NavLink>
      </nav>
    </div>
    
  )
}