import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import { Link } from "react-router"
import { useEpisodePage } from "../../../BLL/useEpisodePage"

export const EpisodePage = () => {
    const {info, error, episodes, searchHandler, nextPageHandler, previousPageHandler} = useEpisodePage()
    return (
        <div>
            <PageTitle style={{fontSize: "70px"}} title="EpisodePage"/>
            <input type="search" className="search" onChange={searchHandler} placeholder="Search..." />
            {error && <div className="errorMessage">{error}</div>}
            {!error && <div>
                {episodes && episodes.map((episode) => <div key={episode.id}>
                <ul>
                     <Link to={`/IntensivReact/episode/${episode.id}`}>{episode.name}</Link>
                    <li className="item">{episode.air_date}</li>
                    <li>{episode.episode}</li>
                    <li>{episode.url}</li>
                    <li>{episode.created}</li>
                    <hr />
                </ul>
            </div>)}

                <div className="buttonContainer">
                    <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
                        Назад
                    </button>
                    <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                        Вперед
                    </button>
                </div>
            </div>}
        </div>
    )
}