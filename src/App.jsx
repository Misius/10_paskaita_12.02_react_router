import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import About from './components/pages/About'
import Contact from './components/pages/Contact.'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import SingleUser from './components/pages/SingleUser'
import Users from './components/pages/Users'

export const usersData = [
  {
  id: 1,
  name: 'James Band',
  town: 'London',
  age: 99,
  },
  {
  id: 2,
  name: 'Serbentautas',
  town: 'Kaunas',
  age: 27,
  },
  {
  id: 3,
  name: 'Jane Doe',
  town: 'London',
  age: 33,
  }
]

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* :userId - dinamine kelio dalis. Dynamic parameter */}
        <Route path={'/users/:userId'}>
          <SingleUser />
        </Route>

        <Route path={'/users'}>
          <Users />
        </Route>

        <Route path={'/apie'}>
          <About />
        </Route>

        <Route path={'/kontaktai'}>
          <Contact />
        </Route>

        <Route path={'/'} exact>
          <Home/>
        </Route>
          {/* 404 puslais kuris neegzistoja */}
        <Route path={'*'}>
          <NotFound />
        </Route>

      </Switch>
      <h1>React</h1>
    </div>
  )
}

export default App
