import {Component} from "react";
import { image_player3 } from "../PostsPage/PostsInformation";
import Photo from "./PhotosFrames";
import IMAGE1 from "./PhotosInformation/photo1.jpeg";
import IMAGE2 from "./PhotosInformation/photo2.jpeg";
import IMAGE3 from "./PhotosInformation/photo3.jpeg";
import IMAGE4 from "./PhotosInformation/photo4.jpeg";
import IMAGE5 from "./PhotosInformation/photo5.jpeg";
import IMAGE6 from "./PhotosInformation/photo6.jpeg";
import IMAGE7 from "./PhotosInformation/photo7.jpeg";
import IMAGE8 from "./PhotosInformation/photo8.jpeg";
import IMAGE9 from "./PhotosInformation/photo9.jpeg";


export default class PhotosPage extends Component {
    render() {
        const boxStyle = {display: `flex`, flexDiraction: `row`, flexWrap: `wrap`, justifyContent: `center`, margin: `10%`}

        return (
            <div style={boxStyle}>
                <Photo photo={IMAGE1}/>
                <Photo photo={IMAGE2}/>
                <Photo photo={IMAGE3}/>
                <Photo photo={IMAGE4}/>
                <Photo photo={IMAGE5}/>
                <Photo photo={IMAGE6}/>
                <Photo photo={IMAGE7}/>
                <Photo photo={IMAGE8}/>
                <Photo photo={IMAGE9}/>
            </div>
        )
    }
}