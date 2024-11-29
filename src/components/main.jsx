function Main() {
    return (
        <div>
       <main style={{minHeight: '70vh'}}>
  <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
  <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-100 p-2" data-bs-ride="carousel" style={{height: 500}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner text-center">
      <div className="carousel-item active">
        <img src="png/собака.jpg" className="d-block h-50 mx-auto" alt="Собака" style={{width: 400}} />
        <h2 className="text-center">Найдена собака</h2>
        <p>Собака рыжая, была утеряна в красногвардейчком райне районе</p>
      </div>
      <div className="carousel-item">
        <img src="png/мышь.jpg" className="d-block h-50 mx-auto" alt="Мышь" style={{width: 400}} />
        <h2 className="text-center">Найдена мышь</h2>
        <p>Мышь серая, была утеряна в центральном районе</p>
      </div>
      <div className="carousel-item">
        <img src="png/горилла.jpg" className="d-block h-50 mx-auto" alt="Горилла" style={{width: 400}} />
        <h2 className="text-center">Найдена горила</h2>
        <p>Горилла, была утеряна в красногвардейчком райне районе</p>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
  <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
  <div className="d-flex flex-row flex-wrap">
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/кошка.jpg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>14</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}> Кошка</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>ca-001-spb</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Василиостровский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>24-03-2020</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/коза.jpeg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>18</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}> Коза</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Потерялась коза, последний раз видели в здании Московского вокзала
        г. Санкт-Петербург. Коза белая, пуховая.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>go-011-spb</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Центральный</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>14-03-2022</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/собака1.jpg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>22</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}>Собака</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Потерялась собака, больших размеров, коричневого цвета. Отзывчивая, дружелюбная.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>dog-123-msk</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Московский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>01-04-2023</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/хомяк.jpg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>25</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}>Хомяк</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Сбежал хомяк, маленький, серый. Любит семечки.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>(нет)</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Фрунзенский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>10-05-2023</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/попугай.jpg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>28</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}>Попугай</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Улетел попугай, зеленый, с красной грудкой. Говорит "Привет!".</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>(нет)</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Адмиралтейский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>20-06-2023</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '30%'}}>
      <img src="png/крыса.jpg" className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>31</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}>Крыса</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Сбежала декоративная крыса, белая, с розовыми ушками. Очень дружелюбная.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>(нет)</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Выборгский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>25-07-2023</p>
    </div>
  </div>
  <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
  <form className="w-50 m-auto p-3" style={{minWidth: 300}}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
    </div>
    <button type="submit" className="btn btn-primary">Подписаться</button>
  </form>
</main>
</div>
      );
}

export default Main;