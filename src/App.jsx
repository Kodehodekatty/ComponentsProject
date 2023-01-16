import { useState } from "react";

import AnimalPic from "./components/Button";
import image from "./images/red-panda-16633083704x3.jpg";
import image2 from "./images/Big_Tiger_Cub.jpg";
import image3 from "./images/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg";
import styles from "./components/styles.module.css";
import image4 from "./images/quokka.jpg";
import image5 from "./images/curled-up-armadillo-lizard.webp";

import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.favAnimal}>Fav Animals</h1>

      <AnimalPic title="Red Panda" image={image} />
      <AnimalPic title="Tiger" image={image2} />
      <AnimalPic title="Cat" image={image3} />
      <AnimalPic title="Quakka" image={image4} />
      <AnimalPic title="Armadillo Lizard" image={image5} />
    </div>
  );
}

export default App;
