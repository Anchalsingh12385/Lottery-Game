import { useState } from "react";

import { genTicket, sum } from "./helper";


export default function Lottery({n=3,winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket); // Example winning condition
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                {ticket.map((num, index) => (
                    <span key={index}>{num}</span>
                ))}
            </div>
            <button onClick={() => setTicket(genTicket(n))}>Generate Ticket</button>
            {isWinning && <p>Congratulations! You won!</p>}
        </div>
    );
}