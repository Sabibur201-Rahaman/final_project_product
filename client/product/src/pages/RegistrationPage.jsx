import React, { Suspense } from 'react'
import Registration from './../components/registration/Registration';
import MasterLayoutPage from './MasterLayoutPage';
import LazyLoader from '../components/masterLayout/LazyLoader';

function RegistrationPage() {
  return (
    <MasterLayoutPage>
      <h2>welcome to Registration</h2>
      <Suspense fallback={<LazyLoader/>}>

        </Suspense>
    </MasterLayoutPage>
  )
}

export default RegistrationPage
