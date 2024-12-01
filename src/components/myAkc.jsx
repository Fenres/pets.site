import React, { useState } from 'react';

function MyAkc() {
    // Используем состояние для хранения данных пользователя
    const [userData, setUserData] = useState({
        name: 'Иван Иванов',
        phone: '+79111234567',
        email: 'ivan.ivanov@example.com',
        registrationDate: '2024-03-01',
        daysOnSite: 150,
        adsCount: 4,
        foundPets: 2
    });

    // Функции для изменения данных
    const updatePhone = () => {
        const newPhone = prompt("Введите новый номер телефона:", userData.phone);
        if (newPhone) {
            setUserData(prevState => ({ ...prevState, phone: newPhone }));
        }
    };

    const updateEmail = () => {
        const newEmail = prompt("Введите новый email:", userData.email);
        if (newEmail) {
            setUserData(prevState => ({ ...prevState, email: newEmail }));
        }
    };

    // Обработчик выхода
    const handleLogout = () => {
        // Здесь можно добавить логику выхода, например, очистить данные пользователя
        setUserData({
            name: '',
            phone: '',
            email: '',
            registrationDate: '',
            daysOnSite: 0,
            adsCount: 0,
            foundPets: 0
        });
        alert("Вы успешно вышли из аккаунта.");
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
                    <button className="btn btn-primary me-2" onClick={updatePhone}>Изменить</button>
                </p>
                <p><strong>Email:</strong> {userData.email}
                    <button className="btn btn-primary me-2" onClick={updateEmail}>Изменить</button>
                </p>
                <p><strong>Дата регистрации:</strong> {userData.registrationDate}</p>
                <p><strong>Дней на сайте:</strong> {userData.daysOnSite}</p>
                <p><strong>Количество объявлений:</strong> {userData.adsCount}</p>
                <p><strong>Найденных животных:</strong> {userData.foundPets}</p>
            </div>
            {/* Кнопка "Выйти" */}
            <button id="logoutButton" className="btn btn-danger" onClick={handleLogout}>Выйти</button>
        </div>
    );
}

export default MyAkc;
