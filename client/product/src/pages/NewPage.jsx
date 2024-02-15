import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function NewPage() {
  return (
    <MasterLayoutPage>
      <h2>welcome to newPage</h2>
      <Suspense fallback={<LazyLoader/>}>

        </Suspense>
    </MasterLayoutPage>
  )
}

export default NewPage
