import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from './componentes/ContextApi';
import PethRouter from './componentes/PethRouter';
import Home from './componentes/Home'
import Raspberrypi from './componentes/Raspberrypi';
import './App.css'

function App() {

  return (
      <UserContext.Provider value={{user: 'Lucas Rocha'}}>
        <BrowserRouter>
          <Routes>
          <Route  path={'/'} element={<PethRouter />}>
            <Route  path={'/'} element={<Home />}/>
            <Route  path={'/raspberrypi'} element={<Raspberrypi />}/>
          </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  )
}

export default App
