import Header from './components/Header/Header';
import styles from './App.module.scss';
import Hero from './components/Hero/Hero';

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
        </div>
    );
};

export default App;
