import React, { Suspense, lazy } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'
const FullScreenLoader=lazy(()=>import('../components/masterLayout/FullScreenLoader'))
function FullScreenLoaderPage() {
  return (
    <MasterLayoutPage>
      <h2>fullscreenloader</h2>
      <Suspense fallback={<LazyLoader/>}>
    <FullScreenLoader/>
        </Suspense>
    </MasterLayoutPage>
  )
}

export default FullScreenLoaderPage
