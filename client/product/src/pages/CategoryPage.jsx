import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Category = lazy(() => import("../components/category/Category"));
function CategoryPage() {
  return (
    <div>
      <MasterLayoutPage>
        <h2>welcome to categories</h2>
        <Suspense fallback={<LazyLoader />}>
          <Category />
        </Suspense>
      </MasterLayoutPage>
    </div>
  );
}

export default CategoryPage;
