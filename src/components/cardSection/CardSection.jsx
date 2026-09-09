import './CardSection.css'
import CardItem from "../cardItem/CardItem";


function CardSection() {
const cardItems = [
    {
        title: "Card Title 1",
        description: "This is a simple card item 1."
    },
    {
        title: "Card Title 2",
        description: "This is a simple card item 2."
    },
    {
        title: "Card Title 3",
        description: "This is a simple card item 3."
    }
];


    return(
        <section className="card-section">
            <div className="card-container">
                {cardItems.map((card, index) => (
                    <CardItem 
                        key={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default CardSection;