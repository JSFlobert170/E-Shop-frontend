import styles from "./index.module.scss";

const Index = ({}) => {
    return (

        <div className={styles.wrapper}>
        <svg  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        </svg>
        <video width="320" height="240" controls preload="none">
        <source src="./test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    );
}

export default Index;
