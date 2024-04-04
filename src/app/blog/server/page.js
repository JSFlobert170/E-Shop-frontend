import { GET_ARTICLES } from "@/graphql/queries";
import Link from "next/link";
import SubTitle from "@/components/UI/SubTitle";
import GridPosts from "@/components/UI/GridPosts";
import styles from "./index.module.scss";

export const metadata = {
  title: 'test title',
  description: 'test descriptiion',
}

export default async function Home({ params, searchParams }) {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_ARTICLES,
      variables: {
        filters: {
          limit: Number(searchParams.limit) || 6
        }
      }
    }),
  });

  const articles = await res.json();
  
  const limit = Number(searchParams.limit) || 6;

  return (
    <>
      <div className="container">
        <div id="grid">
          <div className={styles.title__content}>
            <SubTitle text="Our latest news" color="primary"/>
            <Link className="btn btn__primary" href="/blog">
              View more
            </Link>
          </div>
          {
            articles && <GridPosts articles={articles.data.getArticles} />
          }
        </div>
        <div className={styles.loadmore}>
          <Link className="btn btn__primary" href={`/?limit=${limit + 6}#grid`}>
            Load more
          </Link>
        </div>
      </div>
    </>
  )
}