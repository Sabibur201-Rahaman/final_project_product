import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Create = lazy(() => import("../components/create/Create"));
function CreatePage() {
  return (
    <MasterLayoutPage>
      <h1>createpage</h1>
      <Suspense fallback={<LazyLoader />}>
        <Create />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default CreatePage;
