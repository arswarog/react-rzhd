import React, { useState } from 'react';

import './App.css';
import { RouteList } from './components/RouteList';
import { Section, SectionLeftContent, SectionRightContent } from './components/Section';
import { allRoutes } from './data/routes';

const initialData = [
    { id: 1, title: '123' },
    { id: 2, title: '32435' },
    { id: 3, title: '52' },
    { id: 4, title: 'dfgdf' },
];

function App() {
    const [data, setData] = useState(initialData);

    function addItem() {
        setData([
            ...data,
            {
                id: data.length + 1,
                title: Math.random().toString(36).substring(2),
            },
        ]);
    }

    return (
        <div className="App">
            <Section>
                <SectionLeftContent title="Станции">stations</SectionLeftContent>
                <SectionRightContent title="Маршруты">
                    <RouteList routes={allRoutes} />
                </SectionRightContent>
            </Section>

            <button onClick={addItem}>add item</button>

            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
