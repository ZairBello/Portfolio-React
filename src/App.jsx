import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col p-6 font-josefinsans overflow-hidden">
      <NavbarMain />
      <HeroMain />
    </main>
  );
};

export default App;
