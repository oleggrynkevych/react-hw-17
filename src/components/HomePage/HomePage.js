import {Component} from "react";
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return(
            <div className="homepage">
                <img className="homepage-photo" src="https://www.si.com/.image/t_share/MTg2NDEyODYyNzIwMTkwMTQ3/imago1007574215h.jpg"></img>
                <p>Chelsea Football Club is an English professional football club based in Fulham, in the western parts of London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. They won their first major honor, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honor, the Cup Winners' Cup, in 1971, and becoming only the third English club to win the Club World Cup in 2022.</p>
                <p>Chelsea are one of five clubs to have won all three of UEFA's main club competitions, being the first English club to achieve the UEFA treble, and the only club to have won all three major European competitions twice. They are also the only London club to have won the Champions League and the Club World Cup. Domestically, the club has won six league titles, eight FA Cups, five League Cups, and four FA Community Shields. Internationally, they have won the UEFA Champions League, the UEFA Europa League, the UEFA Cup Winners' Cups and the UEFA Super Cup twice each, and one FIFA Club World Cup since their inception. In terms of overall trophies won, it is the fourth-most successful club in English football.</p>
            </div>
        )
    }

}