import React, {Suspense,lazy}from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function DashBoardPage() {
  return (
    
      <MasterLayoutPage >
        <h2>DashBoard</h2>
        <Suspense fallback={<LazyLoader/>}>

        </Suspense>
      </MasterLayoutPage>

  )
}

export default DashBoardPage
