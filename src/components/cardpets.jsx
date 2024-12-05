import React, { useState } from 'react';
import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';
import dog1 from '../png/собака1.jpg';
import hamster from '../png/хомяк.jpg';
import parrot from '../png/попугай.jpg';
import rat from '../png/крыса.jpg';
import Card from './propsCard';
import AdDetails from './adDetale'; 

const pet = [
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

// Функция для сортировки по дате в убывающем порядке
const sortedAnimals = pet.sort((a, b) => new Date(b.date) - new Date(a.date));

function CardPats() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Количество карточек на одной странице
    const [selectedAnimal, setSelectedAnimal] = useState(null); // Состояние для выбранного животного

    // Индексы карточек для текущей страницы
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortedAnimals.slice(indexOfFirstCard, indexOfLastCard);

    // Количество страниц
    const totalPages = Math.ceil(sortedAnimals.length / cardsPerPage);

    // Функции для смены страниц
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Функция для открытия карточки питомца
    const openAnimalCard = (animal) => {
        setSelectedAnimal(animal);
    };

    // Функция для возврата к списку
    const closeAnimalCard = () => {
        setSelectedAnimal(null);
    };

    return (
        <div>
            {selectedAnimal ? (
                <AdDetails selectedAd={selectedAnimal} closeAd={closeAnimalCard} />
            ) : (
                <>
                    <div>
                        
                        <div className="d-flex flex-wrap justify-content-center">
                            {currentCards.map(pet => (
                                <Card key={pet.id} pet={pet} onClick={openAnimalCard} />
                            ))}
                        </div>


                        {/* Пагинация */}
                        <nav aria-label="pagination" className="m-auto">
                            <ul className="pagination pagination-lg justify-content-center">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => paginate(index + 1)}
                                        >
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}

export default CardPats;
