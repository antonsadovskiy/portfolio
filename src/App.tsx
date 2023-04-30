import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import RemoteWork from "./components/RemoteWork/RemoteWork";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<RemoteWork/>*/}
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
