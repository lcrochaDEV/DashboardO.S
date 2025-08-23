import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from './componentes/ContextApi';
import PethRouter from './componentes/PethRouter';
import Home from './componentes/Home'
import Raspberrypi from './componentes/Raspberrypi';
import './App.css'
import { queryClient } from './services/queryClient';
import Mapa from './componentes/Mapa';




function App() {

  return (
     <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{user: 'Lucas Rocha'}}>
          <BrowserRouter>
            <Routes>
              <Route  path={'/'} element={<PethRouter />}>
                <Route  path={'/'} element={<Home />}/>
                <Route  path={'/mapa'} element={<Mapa />}/>
                <Route  path={'/raspberrypi'} element={<Raspberrypi />}/>
                <Route  path={'/modem'} element={''}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </QueryClientProvider>
  )
}

export default App
