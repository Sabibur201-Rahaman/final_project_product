import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function CreatePage() {
  return (
    <MasterLayoutPage>
      <h1>createpage</h1>
      <Suspense fallback={<LazyLoader/>}>

        </Suspense>
    </MasterLayoutPage>
  )
}

export default CreatePage
