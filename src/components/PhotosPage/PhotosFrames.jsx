import "./PhotosFrames.css";

const Photo = ({photo}) => {
    return (
        <div className="photo_box">
            <img src={photo}></img>
        </div>
    )
}

export default Photo;