import { GET_ARTICLES } from "@/graphql/queries";
import Hero from "@/components/UI/Hero";
import Slider from "@/components/UI/Slider";
import TitleMain from "@/components/UI/TitleMain";
import BackgroundHero from "../../public/background_hero.jpg";
import Image from "../../public/background_hero.jpg";
import styles from "./index.module.scss";
export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_ARTICLES
    }),
  });

  const articles = await res.json();

  console.log(Image);

  const images = [Image.src, Image.src, Image.src,  Image.src]

  return (
    <>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={BackgroundHero.src}
        buttonLink="/"
        buttonText="Discover"
      />
      <div className="container">
        <section className={styles.about__wrapper}>
          <div className={styles.left__part}>
            <TitleMain
              withUnderline={true}
              title="Discover the best blog ever" color="primary"
            />
            <a className="btn btn__primary" href="#">About us</a>
          </div>
          <div className={styles.right__part}>
            <Slider
              images={images}
              width={330}
            />
          </div>
        </section>
        {/* {
          articles && <GridPosts articles={articles.data.getArticles} />
        } */}

      </div>
    </>
  )
}