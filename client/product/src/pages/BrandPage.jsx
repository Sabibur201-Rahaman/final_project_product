import React, { Suspense,lazy } from 'react'
import BarndPage from './BrandPage';
import MasterLayoutPage from './MasterLayoutPage';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Brand=lazy(()=>import('../components/brand/Brand'))
function BrandPage() {
  return (
   <MasterLayoutPage>
    <h2>welcome to brandpage</h2>
    <Suspense fallback={<LazyLoader/>}>
    <Brand/>
        </Suspense>
   </MasterLayoutPage>
  )
}

export default BrandPage
