import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const ForgetPassword =lazy (() => import("../components/forgetPass/ForgetPass"));
function ForgetPassPage() {
  return (
    <MasterLayoutPage>
      <h2>forgetPass</h2>
      <Suspense fallback={<LazyLoader />}>
        <ForgetPassword />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default ForgetPassPage;
