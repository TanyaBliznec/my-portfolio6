import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Info } from './layout/section/info/Info';
import { Skills } from './layout/section/skills/Skills';
import { Projects } from './layout/section/projects/Projects';
import { Contact } from './layout/section/contact/Contact';
import { Footer } from './layout/footer/Footer';






function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Info />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;