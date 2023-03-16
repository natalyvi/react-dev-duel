import GlobalStyles from "./GlobalStyles";
import {BrowserRouter as Router} from "react-router-dom";
import {Navbar} from "./components";
import {inspectUser, duelUsers} from './services/userService'
import {useEffect} from "react";
import Home from "./components/Home";
import{Route, Switch,Link} from "react-router-dom";
import Inspect from "./components/Inspect";
import Duel from "./components/Duel";

function App() {


    // Hook that runs after React has updated the DOM
    useEffect(() => {
        inspectUser()
    }, [])

    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/inspect"  component={Inspect}/>
            <Route path="/duel"  component={Duel}/>
            <GlobalStyles/>
            </Switch>
            <Navbar/>

        </Router>
    );
}

export default App;
