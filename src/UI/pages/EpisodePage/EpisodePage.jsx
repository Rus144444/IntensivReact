import axios from "axios"
import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import { useState, useEffect } from "react"
import { Link } from "react-router"

export const EpisodePage = () => {
    const [episodes, setEpisodes] = useState(null)
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
    )

    const fetchData = (url) => {
    axios.get(url).then((res) => {
      setEpisodes(res.data.results)
      setInfo(res.data.info)
      setError(null)
    })
    .catch((err) => {
        setError(err.response.data.error)
      })
  }

  const searchHandler = (event) => {
    const value = event.currentTarget.value
    fetchData(`https://rickandmortyapi.com/api/episode?name=${value}`)
  }
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode?page=1").then((res) => {
        setEpisodes(res.data.results)
        setInfo(res.data.info)
        })
    }, [])
 
    const nextPageHandler = () => {
       fetchData(info.next)
    }
    const previousPageHandler = () => {
       fetchData(info.prev)
    }
    
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
        .then((res)=> setEpisodes(res.data.results))
    }, [])

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