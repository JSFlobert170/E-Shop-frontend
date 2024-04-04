'use client';
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import sliderImage from "../../../../public/sliderImage.jpg";
const Index = () => {


    // TODO : 
    // 1. Iso maquette
    // 2. Bloquer le slide si au début ou à la fin
    // 3. Mettre les points de navigation et les rendre fonctionnels
    // -> Prévoir currentSlide et le mettre à jour à chaque slide
    //4. Calculer de manière dynamique la valeur exacte à slider (attention à la marge/gap)
    // 5. Gérer le swipe avec la souris

    const [translateValue, setTranslateValue] = useState(0);

    const getPrevSlide = () => { 
        setTranslateValue(translateValue + 300)
    }

    const getNextSlide = () => { 
        setTranslateValue(translateValue - 300)
    } 

    return (
        <div className={styles.container}> 
            <div className={styles.wrapper}
                onMouseDown={(e) => { console.log("j'appuie sur le clique") }}
                onMouseMove={(e) => { console.log("je bouge la souris") }}
                onMouseUp={(e) => { console.log("je relache le clique") }}
            >
            <div className={styles.slider} style={{transform: `translateX(${translateValue}px)`}}>
                <div data-index="1" className={styles.slide}>  
                <img src={sliderImage.src} alt="" width={300} height={470} />
                </div>
                <div data-index="2" className={styles.slide}>
                <img src={sliderImage.src} alt="" width={300} height={470} />
                </div>
                <div data-index="3" className={styles.slide}>
                <img src={sliderImage.src} alt="" width={300} height={470} />
                </div>
                <div data-index="4" className={styles.slide}>
                <img src={sliderImage.src} alt="" width={300} height={470} />
                </div>
            </div>
            <div className={styles.navigation}>
                <button onClick={(()=>{getPrevSlide()} )}>prev</button>
                <button onClick={()=>getNextSlide()}>next</button>
            </div>
            </div>
        </div>
    );
}

export default Index;
