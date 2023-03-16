import {Route, Switch} from 'react-router-dom'
import './App.css'

import Header from './components/Header/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <>
    <div className="bg-container">
      <div className="content-con">
        <Header />
        <div className="category-con">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </>
)

export default App
