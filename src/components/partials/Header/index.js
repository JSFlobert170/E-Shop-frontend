"use client";
import {useEffect, useState} from "react";
import SearchInput from '@/components/UI/SearchInput';
import Logo from "@/components/UI/Logo";
import styles from "./index.module.scss";

const Index = () => {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => { 
        window.addEventListener("scroll", (e) => {

            if (window.scrollY > 150) {
                setIsFixed(true);
                // document.querySelector("header").classList.add(styles.fixed);
            }
            else {
                setIsFixed(false);
                // document.querySelector("header").classList.remove(styles.fixed);
            }
        });
    }, []);

    return (
        <>
        <header className={`${styles.header__main} ${isFixed ? styles.fixed : ""}`}>
                <div className={styles.header__left}>
                    <SearchInput/>
                </div>
                <div className={styles.header__center}>
                    <Logo/>
                </div>
                <div className={styles.header__right}>
                    <div className={styles.header__social}>
                        <ul className={styles.social__wrapper}>
                            <li className={styles.social__item}>
                                <a href="facebook.com" target="_blank">
                                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7.84091V11.75H3.93182V18.5909H7.84091V11.75H10.7727L11.75 7.84091H7.84091V5.88636C7.84091 5.62717 7.94387 5.3786 8.12715 5.19533C8.31042 5.01205 8.55899 4.90909 8.81818 4.90909H11.75V1H8.81818C7.52224 1 6.27937 1.51481 5.363 2.43118C4.44663 3.34755 3.93182 4.59042 3.93182 5.88636V7.84091H1Z" stroke="#2C3E50" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </li>
                            <li className={styles.social__item}>
                                <a href="twitter.com" target="_blank">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 1.10031C18.1 1.5447 17.218 1.72518 16.3 1.99816C15.2911 0.850901 13.7953 0.787416 12.358 1.32976C10.9207 1.8721 9.9793 3.19803 10 4.71894V5.62587C7.0795 5.70114 4.4785 4.36071 2.8 1.99816C2.8 1.99816 -0.9638 8.73935 6.4 11.9744C4.7152 13.1053 3.0349 13.868 1 13.7882C3.9772 15.4234 7.2217 15.9857 10.0306 15.164C13.2526 14.2208 15.9004 11.7875 16.9165 8.14259C17.2196 7.03403 17.3701 5.88875 17.3638 4.73889C17.3638 4.51307 18.7228 2.22489 19 1.0994V1.10031Z" stroke="#2C3E50" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </header>
        </>
    );
}

export default Index;