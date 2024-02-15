import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function profilePage() {
  return (
    <MasterLayoutPage>
    <h2>welcome to profile</h2>
    <Suspense fallback={<LazyLoader/>}>

        </Suspense>
  </MasterLayoutPage>
  )
}

export default profilePage
