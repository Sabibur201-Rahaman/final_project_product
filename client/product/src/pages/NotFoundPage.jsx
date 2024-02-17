import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const NotFound = lazy(() => import("../components/notFound/NotFound"));
function NotFoundPage() {
  return (
    <MasterLayoutPage>
      <h2>not found</h2>
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default NotFoundPage;
