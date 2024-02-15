import React, { Suspense } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Registration = lazy(() =>
  import("../components/registration/Registration")
);
function RegistrationPage() {
  return (
    <MasterLayoutPage>
      <h2>welcome to Registration</h2>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default RegistrationPage;
