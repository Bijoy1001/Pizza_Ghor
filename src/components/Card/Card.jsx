import { Link } from "react-router-dom";

const Card = ({card}) => {
   
const {id, picture, price, title, category, category_bg_color, text_color, card_bg_color} = card;


    return (
        <div className="mt-20" style={{backgroundColor:card.card_bg_color}}>
        
       <Link to={`/ShowDetail/${id}`}>
       
       <div className="card rounded" style={{color:card.text_color}}>
            <figure><img className="w-full" src={card.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className=" text-center rounded" style={{backgroundColor: card.category_bg_color}}>{card.category}</h1>
                <p className="font-bold text-start">{card.price}</p>
            </div>
         </div>
       
       </Link>
                
        </div>
    );
};

export default Card;