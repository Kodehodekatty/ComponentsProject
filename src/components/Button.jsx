import { useState } from "react";
import styles from "./styles.module.css";
import Wrapper from "./Title";

export default function AnimalPic({ image, title }) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      <Wrapper info="Animal Card">
        {showImage && <h1 className={styles.titNam}>{title}</h1>}
        {showImage && <img src={image} className={styles.animalImg} />}

        <button
          className={styles.btnAnimal}
          onClick={() => setShowImage(!showImage)}
        >
          click too see animal
        </button>
      </Wrapper>
    </div>
  );
}
