import {Component} from "react";
import "./Header.css";
import Nav from "./Nav";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1200px-FC_Chelsea_Logo.svg.png" className="logo"></img>
                <Nav/>
            </div>
        )
    }
} 