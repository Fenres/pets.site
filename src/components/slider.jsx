import React from 'react';
import dogImage from '../png/собака.jpg';
import mouseImage from '../png/мышь.jpg';
import gorillaImage from '../png/горилла.jpg';

function Slider() {
    return (
        <main style={{ minHeight: '70vh' }}>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <div
                id="carouselExampleIndicators"
                className="carousel slide m-auto bg-success bg-opacity-25 w-100 p-2"
                data-bs-ride="carousel"
                style={{ height: 500 }}
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
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <img
                            src={dogImage}
                            className="d-block h-50 mx-auto"
                            alt="Собака"
                            style={{ width: 400 }}
                        />
                        <h2 className="text-center">Найдена собака</h2>
                        <p>Собака рыжая, была утеряна в Красногвардейском районе</p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={mouseImage}
                            className="d-block h-50 mx-auto"
                            alt="Мышь"
                            style={{ width: 400 }}
                        />
                        <h2 className="text-center">Найдена мышь</h2>
                        <p>Мышь серая, была утеряна в центральном районе</p>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={gorillaImage}
                            className="d-block h-50 mx-auto"
                            alt="Горилла"
                            style={{ width: 400 }}
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
        </main>
    );
}

export default Slider;
