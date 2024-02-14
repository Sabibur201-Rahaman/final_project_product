import React, { Fragment } from 'react'
import  { BrowserRouter,Route,Routes } from 'react-router-dom'
import DashBoardPage from './pages/DashBoardPage';
import BrandPage from './pages/BrandPage';
function App() {
  return (
    <Fragment>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<DashBoardPage/>}/>
<Route exact path='/brand' element={<BrandPage/>}/>


</Routes>
</BrowserRouter>
    </Fragment>
  )
}

export default App
