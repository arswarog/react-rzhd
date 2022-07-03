import React, { useState } from 'react';

import './App.css';
import { Section, SectionLeftContent, SectionRightContent } from './components/Section';
import { ITicket, TicketList } from './components/TicketList';
import logo from './logo.svg';

const initialTickets = [
    {
        src: 'Source',
        dst: 'Destination',
        stop_number: 8,
    },
];

function App() {
    const [tickets, setTickets] = useState(initialTickets);

    function addItem() {
        setTickets([
            ...tickets,
            {
                src: 'City1',
                dst: 'City2',
                stop_number: 2,
            },
        ]);
    }

    console.log('render');

    return (
        <div className="App">
            <button onClick={addItem}>add item</button>
            <TicketList tickets={tickets} />
        </div>
    );
}

export default App;
