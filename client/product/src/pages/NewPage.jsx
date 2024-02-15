import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const New = lazy(() => import("../components/new/New"));
function NewPage() {
  return (
    <MasterLayoutPage>
      <h2>welcome to newPage</h2>
      <Suspense fallback={<LazyLoader />}>
        <New />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default NewPage;
