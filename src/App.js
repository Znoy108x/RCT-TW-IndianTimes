import './App.css';
import React , {useState} from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import News from "./components/News"
import About from "./components/About"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
function App() {
  const pageSize = 5
  const [progress , setProgress]  = useState(0)
  const apiKey = "8a8ac00e0eae4212a27740520b8d5bde"
  return (
    <>
      <Router>
        <LoadingBar height={3} color='#f11946' progress = {progress}/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/business">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="business" pageSize={pageSize} country="in" category="business"
            />
          </Route>

          <Route exact path="/entertainment">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="entertainment" pageSize={pageSize} country="in" category="entertainment"
            />
          </Route>

          <Route exact path="/general">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="general" pageSize={pageSize} country="in" category="general"
            />
          </Route>

          <Route exact path="/health">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="health" pageSize={pageSize} country="in" category="health"
            />
          </Route>

          <Route exact path="/science">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="science" pageSize={pageSize} country="in" category="science"
            />
          </Route>
          <Route exact path="/sports">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="sports" pageSize={pageSize} country="in" category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <Navbar/>
            <News setProgress={setProgress} apiKey={apiKey} 
            key="technology" pageSize={pageSize} country="in" category="technology"
            />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
   </>
  );
}
export default App;