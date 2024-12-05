import React from 'react';
import Slider from './propsSlid';
import dogImage from '../png/собака.jpg';
import mouseImage from '../png/мышь.jpg';
import gorillaImage from '../png/горилла.jpg';

function App() {
    const slides = [
        {
            image: dogImage,
            title: 'Найдена собака',
            description: 'Собака рыжая, была утеряна в Красногвардейском районе',
        },
        {
            image: mouseImage,
            title: 'Найдена мышь',
            description: 'Мышь серая, была утеряна в центральном районе',
        },
        {
            image: gorillaImage,
            title: 'Найдена горилла',
            description: 'Горилла, была утеряна в Красногвардейском районе',
        },
        
    ];

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <Slider slides={slides} />
        </div>
    );
}

export default App;
