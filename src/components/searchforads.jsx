import React, { useState } from "react";
import React from 'react';
import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpg';
import dog1 from '../png/собака1.jpg';
import hamster from '../png/хомяк.jpg';
import parrot from '../png/попугай.jpg';
import rat from '../png/крыса.jpg';

const Searchforads = () => {
  const [ads] = useState([
    {
      id: 18,
      type: "Коза",
      description:
        "Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.",
      chipNumber: "go-011-spb",
      region: "Центральный",
      date: "14-03-2022",
      image: "png/Коза.jpeg",
    },
    {
      id: 14,
      type: "Кошка",
      description:
        "Потерялась кошка, пушистая, серая. Любит играть, ласковая.",
      chipNumber: "ca-001-spb",
      region: "Василиостровский",
      date: "24-03-2020",
      image: "png/Кошка.jpg",
    },
    {
      id: 42,
      type: "Собака",
      description:
        "Собака рыжая, была утеряна в красногвардейском районе.",
      chipNumber: "do-123-spb",
      region: "Красногвардейский",
      date: "22-07-2023",
      image: "png/Собака.jpg",
    },
    {
      id: 42,
      type: "Собака",
      description:
        "Потерялась собака, больших размеров, коричневого цвета. Отзывчивая, дружелюбная.",
      chipNumber: "dog-123-spb",
      region: "Московский",
      date: "01-04-2023",
      image: "png/Собака1.jpg",
    },
  ]);

  const [regionInput, setRegionInput] = useState("");
  const [animalTypeInput, setAnimalTypeInput] = useState("");
  const [filteredAds, setFilteredAds] = useState(ads);

  const searchAds = () => {
    const region = regionInput.trim();
    const animalType = animalTypeInput.trim().toLowerCase();
    const filtered = ads.filter((ad) => {
      const matchesRegion = region ? ad.region === region : true;
      const matchesType = animalType ? ad.type.toLowerCase().includes(animalType) : true;
      return matchesRegion && matchesType;
    });
    setFilteredAds(filtered);
  };

  return (
    <div>
      <div className="search-box text-center">
        <h3>Поиск</h3>
        <input
          type="text"
          placeholder="Район"
          value={regionInput}
          onChange={(e) => setRegionInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Вид животного"
          value={animalTypeInput}
          onChange={(e) => setAnimalTypeInput(e.target.value)}
        />
        <button onClick={searchAds}>Найти</button>
      </div>
      <div id="adsContainer">
        {filteredAds.length === 0 ? (
          <p>Объявлений не найдено.</p>
        ) : (
          filteredAds.map((ad) => (
            <div key={ad.id} className="ad">
              <img src={ad.image} alt={ad.type} />
              <p><strong>ID:</strong> {ad.id}</p>
              <p><strong>Вид животного:</strong> {ad.type}</p>
              <p><strong>Описание:</strong> {ad.description}</p>
              <p><strong>Номер чипа:</strong> {ad.chipNumber}</p>
              <p><strong>Район:</strong> {ad.region}</p>
              <p><strong>Дата:</strong> {ad.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Searchforads;
