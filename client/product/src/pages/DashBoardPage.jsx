import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const DashBoard = lazy(() => import("../components/dashBoard/DashBoard"));
function DashBoardPage() {
  return (
    <MasterLayoutPage>
      <div className="text-center">
      </div>

      <Suspense fallback={<LazyLoader />}>
        <DashBoard />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default DashBoardPage;
