import React, { useState } from "react";
import cat from '../png/кошка.jpg';
import goat from '../png/коза.jpeg';
import dog1 from '../png/собака1.jpg';
import hamster from '../png/хомяк.jpg';
import parrot from '../png/попугай.jpg';
import rat from '../png/крыса.jpg';

const Searchforads = () => {
  const [ads] = useState([
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
    },
  ]);

  const [regionInput, setRegionInput] = useState("");
  const [animalTypeInput, setAnimalTypeInput] = useState("");
  const [filteredAds, setFilteredAds] = useState(ads);

  const searchAds = () => {
    const filtered = ads.filter((ad) => {
      const matchesRegion = ad.district.toLowerCase().includes(regionInput.toLowerCase());
      const matchesAnimalType = ad.type.toLowerCase().includes(animalTypeInput.toLowerCase());
      return matchesRegion && matchesAnimalType;
    });
    setFilteredAds(filtered);
  };

  return (
    <div>
      <div className="search-box text-center text-white bg-primary me-2 p-2">
        <h3>Поиск</h3>
        <div className="d-flex flex-wrap justify-content-center">
          <input
            type="text"
            className="form-control w-25 d-flex flex-wrap justify-content-center me-2"
            placeholder="Район"
            value={regionInput}
            onChange={(e) => setRegionInput(e.target.value)}
          />
          <input
            type="text"
            className="form-control w-25 d-flex flex-wrap justify-content-center me-2"
            placeholder="Вид животного"
            value={animalTypeInput}
            onChange={(e) => setAnimalTypeInput(e.target.value)}
          />
          <button onClick={searchAds} className="btn btn-light me-2">Найти</button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {filteredAds.length === 0 ? (
          <p className="" style={{height: '570px'}}>Объявлений не найдено.</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            {filteredAds.map((ad) => (
              <div key={ad.id} className="card border m-3 " style={{ minWidth: 300, width: '30%' }}>
                <img 
                  className="card-img-top" 
                  src={ad.src} 
                  alt={ad.type} 
                  style={{ height: '60%', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">{ad.type}</h5>
                  <p className="card-text"><strong>ID:</strong> {ad.id}</p>
                  <p className="card-text"><strong>Описание:</strong> {ad.description}</p>
                  <p className="card-text"><strong>Номер чипа:</strong> {ad.chip}</p>
                  <p className="card-text"><strong>Район:</strong> {ad.district}</p>
                  <p className="card-text"><strong>Дата:</strong> {ad.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav aria-label="pagination" className="m-auto">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item active" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Searchforads;
