import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function ForgetPassPage() {
  return (
    <MasterLayoutPage>
      <h2>forgetPass</h2>
      <Suspense fallback={<LazyLoader/>}>

        </Suspense>
    </MasterLayoutPage>
  )
}

export default ForgetPassPage
