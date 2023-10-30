import "./PageNotFound.css";
import imageSource from "../../../Assets/images/404.webp";


function PageNotFound(): JSX.Element {
    
    return (
        <div className="PageNotFound">

        <img alt="pageNotFound" src={imageSource}></img>

        <p>The page you were looking for was not found</p>

			
        </div>
    );
}

export default PageNotFound;
