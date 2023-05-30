import Header from './components/Header/Header';
import styles from './App.module.scss';
import Hero from './components/Hero/Hero';
import SkillsList from './components/Skills/SkillsList/SkillsList';

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
            <SkillsList />
        </div>
    );
};

export default App;
