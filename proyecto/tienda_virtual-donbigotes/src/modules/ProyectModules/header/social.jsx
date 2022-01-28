import YoutubeIco from "../svg/icon-youtube";
import InstagramIco from "../svg/icon-instagram";
import FacebookIco from "../svg/icon-facebook";

const Social = () => {
    return (
        <div class="social">
            <div class="label">Síguenos</div>
            <a class="icon">
                <YoutubeIco />
            </a>
            <a class="icon">
                <InstagramIco />
            </a>
            <a class="icon">
                <FacebookIco />
            </a>
        </div>
    );
}

export default Social;