import React, { useState, useEffect } from 'react';
import Slider from './propsSlid';
import './sliderCss.css';

function App() {
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const host = 'https://your-api-host';  // Укажите свой хост
        fetch(`${host}/api/pets/slider`)
            .then(response => response.json())
            .then(data => {
                if (data?.data?.pets?.length > 0) {
                    const loadedSlides = data.data.pets.map(pet => ({
                        image: pet.image || '/path-to-default-image.jpg', // Дефолтное изображение, если нет
                        title: pet.kind,
                        description: pet.description
                    }));
                    setSlides(loadedSlides);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;  // Прелоадер во время загрузки
    }

    if (slides.length === 0) {
        return <div>No pets found.</div>;  // Если данных нет
    }

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <Slider slides={slides} />
        </div>
    );
}

export default App;
