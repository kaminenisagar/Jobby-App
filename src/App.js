import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Jobs from './component/Jobs'
import ProtectedRoute from './component/ProtectedRoute'
import JobItemDetails from './component/JobItemDetails'
import NotFound from './component/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact component={NotFound} />
  </Switch>
)

export default App
