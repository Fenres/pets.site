import React from 'react';

import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';
import dog1 from '../png/собака1.jpg';
import hamster from '../png/хомяк.jpg';
import parrot from '../png/попугай.jpg';
import rat from '../png/крыса.jpg';

const animals = [
    {
        id: 14,
        type: 'Кошка',
        description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.',
        chip: 'ca-001-spb',
        district: 'Василиостровский',
        date: '24-03-2020',
        src: cat
    },
    {
        id: 18,
        type: 'Коза',
        description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.',
        chip: 'go-011-spb',
        district: 'Центральный',
        date: '14-03-2022',
        src: goat
    },
    {
        id: 22,
        type: 'Собака',
        description: 'Потерялась собака, больших размеров, коричневого цвета. Отзывчивая, дружелюбная.',
        chip: 'dog-123-msk',
        district: 'Московский',
        date: '01-04-2023',
        src: dog1
    },
    {
        id: 25,
        type: 'Хомяк',
        description: 'Сбежал хомяк, маленький, серый. Любит семечки.',
        chip: '(нет)',
        district: 'Фрунзенский',
        date: '10-05-2023',
        src: hamster
    },
    {
        id: 28,
        type: 'Попугай',
        description: 'Улетел попугай, зеленый, с красной грудкой. Говорит "Привет!".',
        chip: '(нет)',
        district: 'Адмиралтейский',
        date: '20-06-2023',
        src: parrot
    },
    {
        id: 31,
        type: 'Крыса',
        description: 'Сбежала декоративная крыса, белая, с розовыми ушками. Очень дружелюбная.',
        chip: '(нет)',
        district: 'Выборгский',
        date: '25-07-2023',
        src: rat
    }
];

function CardPats() {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {animals.map(animal => (
                    <div key={animal.id} className="border m-3 p-3" style={{ minWidth: 300, width: '30%' }}>
                        {/* Изменено на animal.src */}
                        <img src={animal.src} className="w-75 mx-auto" alt={`рисунок ${animal.type}`} />
                        <p className="text-primary">id:</p>
                        <p>{animal.id}</p>
                        <p className="text-primary">Вид животного:</p>
                        <p>{animal.type}</p>
                        <p className="text-primary">Описание:</p>
                        <p>{animal.description}</p>
                        <p className="text-primary">Номер чипа:</p>
                        <p>{animal.chip}</p>
                        <p className="text-primary">Район:</p>
                        <p>{animal.district}</p>
                        <p className="text-primary">Дата:</p>
                        <p>{animal.date}</p>
                    </div>
                ))}
            </div>
           
        </div>
    );
}

export default CardPats;
