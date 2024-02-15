import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function FullScreenLoaderPage() {
  return (
    <MasterLayoutPage>
      <h2>fullscreenloader</h2>
      <Suspense fallback={<LazyLoader/>}>

        </Suspense>
    </MasterLayoutPage>
  )
}

export default FullScreenLoaderPage
