import React, { useState } from 'react';

import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';
import dog1 from '../png/собака1.jpg';
import hamster from '../png/хомяк.jpg';
import parrot from '../png/попугай.jpg';
import rat from '../png/крыса.jpg';
import dogImage from '../png/собака.jpg';
import mouseImage from '../png/мышь.jpg';
import gorillaImage from '../png/горилла.jpg';

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

// Функция для сортировки по дате в убывающем порядке
const sortedAnimals = animals.sort((a, b) => new Date(b.date) - new Date(a.date));

function CardPats() {
    const [email, setEmail] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Количество карточек на одной странице
    const [selectedAnimal, setSelectedAnimal] = useState(null); // Состояние для выбранного животного

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with ${email}`);
    };

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
            {/* Если животное выбрано, показываем его карточку, иначе слайдер, список животных и подписку */}
            {selectedAnimal ? (
               <div>
               <div className="search-box text-center text-white bg-primary me-2 p-2">
                 <h3>Карточка объявления</h3>
               </div>
         
               <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
              <div className="card-details d-flex flex-wrap align-items-center border p-2" style={{ width: '90%', height: '500px'}}>
                   <div className="image-container" style={{ maxWidth: '100%' }}>
                     <img
                       src={selectedAnimal.src}
                       alt={`рисунок ${selectedAnimal.type}`}
                       style={{
                        height: '400px',
                        width: '600px',
                         objectFit: 'cover'
                       }}
                       className="animal-image"
                     />
                   </div>
                   <div className="text-container ms-4" style={{ maxWidth: '100%' }}>
                     <h5>{selectedAnimal.type}</h5>
                     <p><strong>ID:</strong> {selectedAnimal.id}</p>
                     <p><strong>Описание:</strong> {selectedAnimal.description}</p>
                     <p><strong>Номер чипа:</strong> {selectedAnimal.chip}</p>
                     <p><strong>Район:</strong> {selectedAnimal.district}</p>
                     <p><strong>Дата:</strong> {selectedAnimal.date}</p>
                     <button className="btn btn-primary" onClick={closeAnimalCard}>Назад к списку</button>
                   </div>
                 </div>
               </div>
             
               {/* CSS медиа-запросы */}
               <style jsx>{`
                 @media (max-width: 768px) {
                   .card-details {
                     flex-direction: column;
                     text-align: center;
                   }
             
                   .image-container {
                     max-width: 100%;
                     margin-bottom: 20px;
                   }
             
                   .animal-image {
                     max-height: 300px;
                     width: auto;
                   }
             
                   .text-container {
                     margin-left: 0;
                   }
                 }
               `}</style>
             </div>
             
            ) : (
                <>
                    {/* Слайдер */}
                    <div className='w-100' style={{ overflow: 'hidden' }}>
                        <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide bg-success bg-opacity-25 w-100 p-2"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                            <div className="carousel-inner text-center d-flex align-items-center" style={{ height: '600px' }}>
                                <div className="carousel-item active w-100">
                                    <img
                                        src={dogImage}
                                        className="d-block mx-auto"
                                        alt="Собака"
                                        style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                                    />
                                    <h2 className="text-center">Найдена собака</h2>
                                    <p>Собака рыжая, была утеряна в Красногвардейском районе</p>
                                </div>
                                <div className="carousel-item w-100">
                                    <img
                                        src={mouseImage}
                                        className="d-block mx-auto"
                                        alt="Мышь"
                                        style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                                    />
                                    <h2 className="text-center">Найдена мышь</h2>
                                    <p>Мышь серая, была утеряна в центральном районе</p>
                                </div>
                                <div className="carousel-item w-100">
                                    <img
                                        src={gorillaImage}
                                        className="d-block mx-auto"
                                        alt="Горилла"
                                        style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }}
                                    />
                                    <h2 className="text-center">Найдена горилла</h2>
                                    <p>Горилла, была утеряна в Красногвардейском районе</p>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Предыдущий</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Следующий</span>
                            </button>
                        </div>
                    </div>

                    {/* Список карточек */}
                    <div>
                        <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
                        <div className="d-flex flex-wrap justify-content-center">
                            {currentCards.map(animal => (
                                <div key={animal.id} className="border card m-3" style={{ minWidth: 300, width: '30%' }} onClick={() => openAnimalCard(animal)}>
                                    <img src={animal.src} className="card-img-top" alt={`рисунок ${animal.type}`} style={{ height: '60%', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{animal.type}</h5>
                                        <p className="card-text"><strong>ID:</strong> {animal.id}</p>
                                        <p className="card-text"><strong>Описание:</strong> {animal.description}</p>
                                        <p className="card-text"><strong>Номер чипа:</strong> {animal.chip}</p>
                                        <p className="card-text"><strong>Район:</strong> {animal.district}</p>
                                        <p className="card-text"><strong>Дата:</strong> {animal.date}</p>
                                    </div>
                                </div>
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

                    {/* Подписка на новости */}
                    <div>
                        <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
                        <form 
                            className="w-50 m-auto p-3" 
                            style={{ minWidth: 300 }} 
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">
                                    Введите адрес электронной почты
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-describedby="emailHelp"
                                    required
                                />
                                <div id="emailHelp" className="form-text">
                                    Мы никогда не делимся Вашими e-mail ни с кем.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Подписаться</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default CardPats;
