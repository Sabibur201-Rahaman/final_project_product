import React, { Suspense, lazy } from "react";
import MasterLayoutPage from "./MasterLayoutPage";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Profile = lazy(() => import("../components/profile/profile"));
function ProfilePage() {
  return (
    <MasterLayoutPage>
      <h2>welcome to profile</h2>
      <Suspense fallback={<LazyLoader />}>
        <Profile />
      </Suspense>
    </MasterLayoutPage>
  );
}

export default ProfilePage;
