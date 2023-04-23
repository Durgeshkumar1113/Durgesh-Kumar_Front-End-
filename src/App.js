import React from 'react';
import List from './List';

const items = [
    { text: 'Durgesh Kumar Singh Rajput' },
    { text: 'Abhimanyu kumar ' },
    { text: 'Bittu kumar' },
    { text: 'RJ_Abhi' },
];

function App() {
    return (
        <div>
            <h1>My List</h1>
            <List items={items} />
        </div>
    );
}

export default App;
