import { useState } from "react";
import "./Lottery.css";



export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));
    return(
        <div>
            <h1>Lottery Game</h1>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
    );
}