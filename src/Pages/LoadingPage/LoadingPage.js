import LoadingGif from '../../img/loading.gif';
import classes from './LoadingPage.module.css'

const LoadingPage = () => {


    return (
        <div className={classes.parentDiv}>
            <img src={LoadingGif}></img>
        </div>
    )
}

export default LoadingPage