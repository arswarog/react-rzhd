import React, { useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { RouteList } from './components/RouteList';
import { Section, SectionLeftContent, SectionRightContent } from './components/Section';
import { allRoutes } from './data/routes';
import { RouteSearchPage } from './pages/RouteSearchPage';

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
            <RouteSearchPage></RouteSearchPage>
        </div>
    );
}

export default App;
