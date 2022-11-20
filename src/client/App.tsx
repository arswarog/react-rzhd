import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { RouteSearchPage } from './pages/RouteSearchPage';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RouteSearchPage />
            </div>
        </Provider>
    );
}

export default App;
