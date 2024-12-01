import React, { useState } from 'react';
import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';
import { Modal, Button } from 'react-bootstrap';
import './MyAkc.css'; // Подключаем CSS

function MyAkc() {
    // Состояние для хранения данных пользователя
    const [userData, setUserData] = useState({
        name: 'Иван Иванов',
        phone: '+79111234567',
        email: 'ivan.ivanov@example.com',
        registrationDate: '2024-03-01',
        daysOnSite: 150,
        adsCount: 4,
        foundPets: 2
    });

    // Состояние для хранения найденных животных
    const [pets] = useState([
        {
            id: 14,
            type: 'Кошка',
            description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.',
            chipNumber: 'ca-001-spb',
            district: 'Василиостровский',
            date: '24-03-2020',
            src: cat
        },
        {
            id: 18,
            type: 'Коза',
            description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.',
            chipNumber: 'go-011-spb',
            district: 'Центральный',
            date: '14-03-2022',
            src: goat
        }
    ]);

    const [selectedAnimal, setSelectedAnimal] = useState(null); // Состояние для выбранного животного
    const [showModal, setShowModal] = useState(false); // Состояние для управления модальным окном

    // Открыть модальное окно
    const openModal = (animal) => {
        setSelectedAnimal(animal);
        setShowModal(true);
    };

    // Закрыть модальное окно
    const closeModal = () => {
        setShowModal(false);
        setSelectedAnimal(null);
    };

    return (
        <div>
            <div className="text-center text-white bg-primary m-2">
                <h1 className="text-center text-white bg-primary m-2">Личный кабинет</h1>
                <h2 className="text-center text-white bg-primary m-2">Информация о пользователе</h2>
            </div>
            <div className="container">
                <p><strong>Имя:</strong> {userData.name}</p>
                <p><strong>Телефон:</strong> {userData.phone}
                    <button className="btn btn-primary me-2 p-1" onClick={() => {}}>Изменить</button>
                </p>
                <p><strong>Email:</strong> {userData.email}
                    <button className="btn btn-primary me-2 p-1" onClick={() => {}}>Изменить</button>
                </p>
                <p><strong>Дата регистрации:</strong> {userData.registrationDate}</p>
                <p><strong>Дней на сайте:</strong> {userData.daysOnSite}</p>
                <p><strong>Количество объявлений:</strong> {userData.adsCount}</p>
                <p><strong>Найденных животных:</strong> {userData.foundPets}</p>
                <button id="logoutButton" className="btn btn-danger" onClick={() => {}}>Выйти</button>
            </div>
            <br />

            <div>
                <h2 className="text-white bg-primary me-2 text-center">Найденные животные</h2>
                <div className="d-flex flex-row flex-wrap container">
                    {pets.map(pet => (
                        <div key={pet.id} className="border card m-3" style={{ minWidth: 300, width: '30%' }} onClick={() => openModal(pet)}>
                            <img src={pet.src} className="card-img-top" alt={`рисунок ${pet.type}`} style={{ height: '60%', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{pet.type}</h5>
                                <p className="card-text"><strong>ID:</strong> {pet.id}</p>
                                <p className="card-text"><strong>Описание:</strong> {pet.description}</p>
                                <p className="card-text"><strong>Номер чипа:</strong> {pet.chipNumber}</p>
                                <p className="card-text"><strong>Район:</strong> {pet.district}</p>
                                <p className="card-text"><strong>Дата:</strong> {pet.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Модальное окно для показа информации о животном */}
                {selectedAnimal && (
                    <Modal show={showModal} onHide={closeModal} centered className="custom-modal">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedAnimal.type}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex">
                                <img src={selectedAnimal.src} alt={`рисунок ${selectedAnimal.type}`} style={{ width: '30%', height: 'auto', objectFit: 'cover', marginRight: '20px' }} />
                                <div>
                                    <p><strong>ID:</strong> {selectedAnimal.id}</p>
                                    <p><strong>Описание:</strong> {selectedAnimal.description}</p>
                                    <p><strong>Номер чипа:</strong> {selectedAnimal.chipNumber}</p>
                                    <p><strong>Район:</strong> {selectedAnimal.district}</p>
                                    <p><strong>Дата:</strong> {selectedAnimal.date}</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                Закрыть
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default MyAkc;
