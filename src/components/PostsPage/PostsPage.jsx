import {Component} from "react";
import Post from "./PostFrame";
import { PostInformation } from "./PostsInformation";

export default class PostsPage extends Component {
    render() {
        return (
            PostInformation.map ((player, index) => {
                return (
                    <Post author={{
                        name: player.name,
                        photo: player.photo,
                        nickname: player.nickname
                        }}
                        content = {player.content}
                        image = {player.image}
                        date = {player.date}
                        key={index}
                    />
                )
            })
        ) 
    }
}