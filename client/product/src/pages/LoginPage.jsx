import React, { Suspense } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Login = lazy(() => import("../components/login/Login"));
function LoginPage() {
  return (
    <MasterLayoutPage>
      <h2>login</h2>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default LoginPage;
