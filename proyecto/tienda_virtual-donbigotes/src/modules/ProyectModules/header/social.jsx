import YoutubeIco from "../svg/icon-youtube";
import InstagramIco from "../svg/icon-instagram";
import FacebookIco from "../svg/icon-facebook";

const Social = () => {
    return (
        <div className="social">
            <div className="label">Síguenos</div>
            <a className="icon">
                <YoutubeIco />
            </a>
            <a className="icon">
                <InstagramIco />
            </a>
            <a className="icon">
                <FacebookIco />
            </a>
        </div>
    );
}

export default Social;