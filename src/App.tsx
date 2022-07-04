import React, { SyntheticEvent, useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { RouteList } from './components/RouteList';
import { Section, SectionLeftContent, SectionRightContent } from './components/Section';
import { StationInput, StationInputType } from './components/StationInput';
import { allRoutes } from './data/routes';

const initialData = [
    { id: 1, title: '123' },
    { id: 2, title: '32435' },
    { id: 3, title: '52' },
    { id: 4, title: 'dfgdf' },
];

function App() {
    const [data, setData] = useState(initialData);

    const [value, setValue] = useState('');

    function addItem() {
        setData([
            ...data,
            {
                id: data.length + 1,
                title: Math.random().toString(36).substring(2),
            },
        ]);
    }

    function onChange(event: string) {
        setValue(event);
    }

    return (
        <div className="App">
            <StationInput
                type={StationInputType.from}
                onChange={onChange}
            />

            <Section>
                <SectionLeftContent title="Станции">stations</SectionLeftContent>
                <SectionRightContent title="Маршруты">
                    <RouteList routes={allRoutes} />
                </SectionRightContent>
            </Section>
            {value}
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
