import "./App.css";

import { Card } from "./components/Card";
import { Header } from "./components/Header";

import walterImage from "./assets/walter-white.jpeg";
import skylerImage from "./assets/skyler-white.jpeg";
import jesseImage from "./assets/jesse-pinkman.webp";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Card name="Walter White" occupation="Chemistry teacher" status="Dead" imageSrc={walterImage} />
        <Card name="Skyler White" occupation="Walter's wife" status="Alive" imageSrc={skylerImage} />
        <Card name="Jesse Pinkman" occupation="Drug dealer" status="Alive" imageSrc={jesseImage} />
      </main>
    </div>
  );
}

export default App;
