import React, { Suspense,lazy } from 'react'
import BarndPage from './BrandPage';
import MasterLayoutPage from './MasterLayoutPage';
import LazyLoader from '../components/masterLayout/LazyLoader';

function BrandPage() {
  return (
   <MasterLayoutPage>
    <h2>welcome to brandpage</h2>
    <Suspense fallback={<LazyLoader/>}>

        </Suspense>
   </MasterLayoutPage>
  )
}

export default BrandPage
