import { Link } from "react-router";
import { useEpisodeDetails } from "../../../../BLL/useEpisodeDetails";
import { PATH } from "../../../common/routing/path";

export const Episode = () => {
    const {episode} = useEpisodeDetails()
    if (!episode) {
        return (
            <div className="pageContainer">
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">
                    {episode?.name}
                </h1>
                 <div className="content">
                    <div className="description">
                        <div className="info">
                            <p className="subTitle">Data</p>
                            <p className="subTitleResult">
                                {episode.air_date}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Origin</p>
                            <p className="subTitleResult">
                                {episode.episode}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Last known location</p>
                            <div className="subTitleResult">
                                {episode.characters.map((character) => <div key={character}>{character}</div>)}
                            </div>
                        </div>
                        <div className="info">
                            <p className="subTitle">Episode count</p>
                            <p className="subTitleResult">
                                {episode.url}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Data count</p>
                            <p className="subTitleResult">
                                {episode.created}
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    to={PATH.EPISODES}
                    className="backButton"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
}