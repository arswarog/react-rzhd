import React, { useState } from 'react';

import './App.css';
import { Button } from './components/Button';
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
            <h1>Просмотр маршрутов</h1>

            <Section>
                <SectionLeftContent title="Станции">stations</SectionLeftContent>
                <SectionRightContent title="Маршруты">
                    <RouteList routes={allRoutes} />
                </SectionRightContent>
            </Section>

            <Button onClick={addItem}>add item</Button>

            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;