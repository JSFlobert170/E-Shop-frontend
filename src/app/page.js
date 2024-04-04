import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";
import { GET_ARTICLES } from "@/graphql/queries";
import Hero from "@/components/UI/Hero";
import Slider from "@/components/UI/Slider";
import BackgroundHero from "../../public/background_hero.jpg";
import styles from "./page.module.scss";
export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/articles`, {
    // const res = await fetch(`http://localhost:3030/api/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_ARTICLES
    }),
  });

  const articles = await res.json();

  return (
    <div style={{height: "3000px"}}>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={BackgroundHero.src}
        buttonLink="/"
        buttonText="Discover"
      />
      <div className={styles.main_part}>
        <div className={styles.left_part}>
        <h1>test</h1>
            <p>qefrbgqihrbgqsrbgfjuqshjfsvbJLFVQSJFVJQSHVFJVSJFHVSJehfvjehvfjqehf jefrhgjzefrugfgfegfegqffeqfuefueyfueyfyegyegfyegzyfgzeyfgeyfuyfveuFVELZFZEFVUYEZVLU</p>
        </div>
        <div className={styles.right_part}>
          <Slider/>
        </div>
      </div>
      
      {/* {
        articles && <GridPosts articles={articles.data.getArticles} />
      } */}
    </div>
  )
}