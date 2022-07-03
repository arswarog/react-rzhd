import React, { useState } from 'react';

import './App.css';
import { Section, SectionLeftContent, SectionRightContent } from './components/Section';
import logo from './logo.svg';

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

    console.log('render');

    return (
        <div className="App">
            <Section>
                <SectionLeftContent title="Станции">
                    <div>hello</div>
                </SectionLeftContent>
                <SectionRightContent title="Маршруты">
                    <ul className="station-list" id="route-list">
                        <template id="route-list-item">
                            <li className="station-list__item">
                                <h4 className="station-list__title" data-source="name">Кисловодск</h4>
                                <div className="station-list__info">
                                    <span className="data">
                                        <span className="data__name">ID:</span>
                                        <span className="data__value" data-source="id">2</span>
                                    </span>
                                </div>
                            </li>
                        </template>
                    </ul>
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
