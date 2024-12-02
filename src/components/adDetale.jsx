import React from "react";

const AdDetails = ({ selectedAd, closeAd }) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="card-details d-flex flex-wrap align-items-center border p-2" style={{ width: '90%', height: '500px' }}>
          <div className="image-container" style={{ maxWidth: '100%' }}>
            <img
              src={selectedAd.src}
              alt={`рисунок ${selectedAd.type}`}
              style={{
                height: '400px',
                width: '600px',
                objectFit: 'cover'
              }}
              className="animal-image"
            />
          </div>
          <div className="text-container ms-4" style={{ maxWidth: '100%' }}>
            <h5>{selectedAd.type}</h5>
            <p><strong>ID:</strong> {selectedAd.id}</p>
            <p><strong>Описание:</strong> {selectedAd.description}</p>
            <p><strong>Номер чипа:</strong> {selectedAd.chip}</p>
            <p><strong>Район:</strong> {selectedAd.district}</p>
            <p><strong>Дата:</strong> {selectedAd.date}</p>
            <button className="btn btn-primary" onClick={closeAd}>Назад к списку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetails;
