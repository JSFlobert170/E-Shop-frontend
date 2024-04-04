import styles from "./index.module.css";
const Index = ({handleClick, text, color}) => {
    return (
        <button className={`btn btn__${color}`} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Index;
