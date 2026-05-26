import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";


export default function Lottery({n,winningSum}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum; // Example winning condition
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                {ticket.map((num, index) => (
                    <span key={index}>{num}</span>
                ))}
            </div>
            <button onClick={() => setTicket(genTicket(3))}>Generate Ticket</button>
            {isWinning && <p>Congratulations! You won!</p>}
        </div>
    );
}