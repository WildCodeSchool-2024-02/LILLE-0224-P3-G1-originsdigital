import PropTypes from "prop-types";

export default function CardPay({ title, price, buttonText, background }) {
  return (
    <div className="cardP" style={{ background: `#${background}` }}>
      <h2 className="textTitle">{title}</h2>
      {price && <p className="textPrice">Prix: €{price}</p>}
      <button type="button" className="btn-buy">
        {buttonText}
      </button>
    </div>
  );
}
CardPay.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
