import Gallery from "./Gallery.jsx";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import TopBar from "../Navbars/TopBar.jsx";
import Order from "./Order.jsx";

const index = () => {
  return (
    <main className="pb-1">
      <Hero />
      <TopBar />
      <Gallery />
      <Menu />
      <Order />
    </main>
  );
};

export default index;
