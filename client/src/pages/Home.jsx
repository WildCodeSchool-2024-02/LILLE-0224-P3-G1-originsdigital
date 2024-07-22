import NavBar from "../components/Home/NavBar";
import HomePartPub from "../components/Home/HomePartPub";
import CardPub from "../components/Home/CardPub";
import PlanFormula from "../components/Home/PlanFormula";
import CardPlan from "../components/Home/CardPlan";
import PubSuggestion from "../components/Home/PubSuggestion";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <HomePartPub />
      <CardPub />
      <PlanFormula />
      <CardPlan />
      <PubSuggestion />
      <Footer />
    </div>
  );
}
export default Home;
