import { Mycontext } from "../Context";
import "./BurgerMenu.css";

function BurgerMini() {
  const { animate, setAnimate, setMenu } = Mycontext();
  const animation = () => {
    setAnimate("burger-mini-animate");
    setTimeout(() => {
      setMenu(true);
      setAnimate("none");
    }, 2500);
  };
  return (
    <div className={animate} style={{ zIndex: 1 }}>
      <button
        type="button"
        label
        className="button-telecommande-mini"
        onClick={animation}
      >
        &nbsp;
      </button>
      <img
        src="/public/telecommandemini.png"
        alt="telecommandemini"
        className="telecommande-mini"
      />
    </div>
  );
}
export default BurgerMini;
