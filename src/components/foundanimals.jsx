import React, { useState } from 'react';

import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpg';


function FoundPets() {
    // Данные о найденных животных (могут быть загружены с API)
    const [pets, setPets] = useState([
        {
            id: 14,
            type: 'Кошка',
            description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.',
            chipNumber: 'ca-001-spb',
            district: 'Василиостровский',
            date: '24-03-2020',
            img: cat
        },
        {
            id: 18,
            type: 'Коза',
            description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.',
            chipNumber: 'go-011-spb',
            district: 'Центральный',
            date: '14-03-2022',
            img: goat
        }
        // Добавьте другие объекты животных при необходимости
    ]);

    return (
        <div>
            <h2 className="text-white bg-primary m-2">Найденные животные</h2>
            <div className="d-flex flex-row flex-wrap">
                {pets.map((pet) => (
                    <div key={pet.id} className="d-flex flex-row flex-wrap border m-3 p-3" style={{ minWidth: 300, width: '30%' }}>
                        <img src={pet.img} className="w-75" alt="рисунок животного" />
                        <p className="w-50 text-primary" style={{ minWidth: 250 }}>id:</p>
                        <p className="w-50" style={{ minWidth: 250 }}>{pet.id}</p>
                        <p className="w-50 text-primary" style={{ minWidth: 250 }}>Вид животного:</p>
                        <p className="w-50" style={{ minWidth: 250 }}>{pet.type}</p>
                        <p className="w-50 text-primary" style={{ minWidth: 300 }}>Описание:</p>
                        <p className="w-50" style={{ minWidth: 300 }}>{pet.description}</p>
                        <p className="w-50 text-primary" style={{ minWidth: 300 }}>Номер чипа:</p>
                        <p className="w-50" style={{ minWidth: 300 }}>{pet.chipNumber}</p>
                        <p className="w-50 text-primary" style={{ minWidth: 300 }}>Район:</p>
                        <p className="w-50" style={{ minWidth: 300 }}>{pet.district}</p>
                        <p className="w-50 text-primary" style={{ minWidth: 300 }}>Дата:</p>
                        <p className="w-50" style={{ minWidth: 300 }}>{pet.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoundPets;
