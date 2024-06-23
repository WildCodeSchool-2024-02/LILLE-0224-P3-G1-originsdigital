import NavBar from "../components/Home/NavBar";
import HomePartPub from "../components/Home/HomePartPub";
import CardPub from "../components/Home/CardPub";
import PlanFormula from "../components/Home/PlanFormula";
import CardPlan from "../components/Home/CardPlan";
import TablePlan from "../components/Home/TablePlan";
import PubSuggestion from "../components/Home/PubSuggestion";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <HomePartPub />
      <CardPub />
      <PlanFormula />
      <CardPlan />
      <TablePlan />
      <PubSuggestion />
    </>
  );
}
export default Home;