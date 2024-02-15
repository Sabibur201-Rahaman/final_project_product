import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'
function LazyLoaderPage() {
  return (
    <MasterLayoutPage>
      <h2>lazyload</h2>
      <Suspense fallback={<LazyLoader/>}>
        </Suspense>
    </MasterLayoutPage>
  )
}

export default LazyLoaderPage
