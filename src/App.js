import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Main/Nav/Nav";
import Section from "./Components/Main/Section/Section";
import {Route, Routes} from "react-router-dom";
import Users from "./Components/Main/Users/Users";
import Videos from "./Components/Main/Videos/Videos";
import Music from "./Components/Main/Music/Music";
import DialogsContainer from "./Components/Main/Dialogs/DialogsContainer";


function App() {
    return (
            <div className="app">
                <Header/>
                <Main>
                    <Nav/>
                    <Routes>
                        <Route path='/profile' element={<Section />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users' element={<Users/>}/>
                        <Route path='/videos' element={<Videos/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </Main>
                <Footer/>
            </div>
    );
}

export default App;
