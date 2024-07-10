import "./CardPlan.css";
import { Link } from "react-router-dom";
import CardPay from "./CardPay";

function CardPlan() {
  return (
    <div className="card-container">
      <Link className="underlineText" to="/payment">
        <CardPay
          title="VHS Premium"
          price={3.99}
          buttonText="S'abonner"
          background="02DF93"
        />
      </Link>
      <Link className="underlineText" to="/subscribe">
        <CardPay title="VHS free" buttonText="Gratuit" background="FFFFFF" />
      </Link>
    </div>
  );
}

export default CardPlan;
