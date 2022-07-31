import {Component} from "react";
import Post from "./PostFrame";
import {player1, photo_player1, nickname_player1, content_player1, image_player1, date_player1} from "./PostsInformation";
import {player2, photo_player2, nickname_player2, content_player2, image_player2, date_player2} from "./PostsInformation";
import {player3, photo_player3, nickname_player3, content_player3, image_player3, date_player3} from "./PostsInformation";


export default class PostsPage extends Component {
    render() {
        return (
            <div>
                <Post author={{
                    name: player1,
                    photo: photo_player1,
                    nickname: nickname_player1
                    }}
                    content = {content_player1}
                    image = {image_player1}
                    date = {date_player1}
                />

                <Post author={{
                    name: player2,
                    photo: photo_player2,
                    nickname: nickname_player2
                    }}
                    content = {content_player2}
                    image = {image_player2}
                    date = {date_player2}
                />

                <Post author={{
                    name: player3,
                    photo: photo_player3,
                    nickname: nickname_player3
                    }}
                    content = {content_player3}
                    image = {image_player3}
                    date = {date_player3}
                />
            </div>
        )
    }
}