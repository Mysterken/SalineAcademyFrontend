import ReactPlayer from "react-player";

function VideoPlayer(props) {


    return(
        <>
            <ReactPlayer url={props.url}
            width={props.width} height={props.height} borderradius='20px' controls='true'
            />
        </>
    )
}
export default VideoPlayer;
