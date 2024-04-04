"use client";
import { useState, useEffect } from "react";
import { GET_ARTICLES } from "@/graphql/queries";
import GridPosts from "@/components/UI/GridPosts";
import Button from "@/components/UI/Button";
import SubTitle from "@/components/UI/SubTitle";
import styles from "./index.module.scss";

const Page = () => {

    const [articles, setArticles] = useState(null);
    const [filters, setFilters] = useState({
        limit: 6
    });

    const fetchArticles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: GET_ARTICLES,
                variables: {
                    filters: {
                        limit: Number(filters.limit) || 6
                    }
                }
            }),
        });
        const articles = await res.json();
        setArticles(articles);
    }

    useEffect(() => {
        // console.log(filters);
        // console.log(articles.data.getArticles.length)
        fetchArticles();
    }, [filters]);

    return (
        <div className="container">
            <div id="grid">
                <div className={styles.title__content}>
                    <SubTitle text="Our latest news" color="primary" />
                </div>
                {
                    articles && <GridPosts articles={articles.data.getArticles} />
                }
            </div>
            {
                // on affiche le bouton Load more pour charger plus d'articles
                filters.limit <= articles?.data.getArticles.length && (
                    <div className={styles.loadmore}>
                        <Button text="Load more" handleClick={() => {
                            setFilters({limit: filters.limit + 6});
                        }} />
                    </div>
                )
            }
        </div>
    );
}

export default Page;
