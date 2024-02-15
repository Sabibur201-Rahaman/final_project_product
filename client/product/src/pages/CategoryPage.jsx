import React, { Suspense } from 'react'
import MasterLayoutPage from './MasterLayoutPage'
import LazyLoader from '../components/masterLayout/LazyLoader'

function CategoryPage() {
  return (
    <div>
      <MasterLayoutPage>
        <h2>welcome to categories</h2>
        <Suspense fallback={<LazyLoader/>}>

        </Suspense>
      </MasterLayoutPage>
    </div>
  )
}

export default CategoryPage
