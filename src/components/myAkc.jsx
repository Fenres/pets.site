import React, { useState } from 'react';

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

            
            </div>
   
    );
}

export default MyAkc;
