import './CardItem.css'
function CardItem({ title, description }) {
  return (

    <section className="card-section">
    <div className="card-item">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
    </section>
  );
}

export default CardItem;