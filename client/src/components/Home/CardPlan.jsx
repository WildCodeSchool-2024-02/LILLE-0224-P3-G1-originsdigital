import "./CardPlan.css";
import { Link } from "react-router-dom";
import CardPay from "./CardPay";

function CardPlan() {
  return (
    <div className="card-container">
      <Link className="underlineText" to="/payment">
        <CardPay
          title="VHS Premium Sans publicités"
          price={3.99}
          buttonText="Abonne mtn"
          background="02DF93"
        />
      </Link>
      <Link className="underlineText" to="/subscribe">
        <CardPay
          title="VHS Lite Avec publicités"
          buttonText="Gratuit"
          background="FFFFFF"
        />
      </Link>
    </div>
  );
}

export default CardPlan;
