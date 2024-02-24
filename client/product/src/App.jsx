import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import BrandPage from "./pages/BrandPage";
import CreatePage from "./pages/CreatePage";
import CategoryPage from "./pages/CategoryPage";
import NewPage from "./pages/NewPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import FullScreenLoaderPage from "./pages/FullScreenLoaderPage";
import LazyLoaderPage from "./pages/LazyLoaderPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";
import ProfilePage from './pages/ProfilePage';
function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashBoardPage />} />
            <Route exact path="/brand" element={<BrandPage />} />
            <Route exact path="/create" element={<CreatePage />} />
            <Route exact path="/category" element={<CategoryPage />} />
            <Route exact path="/new" element={<NewPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" replace />} />
            <Route exact path="/for" element={<ForgetPassPage />} />
            <Route exact path="/full" element={<FullScreenLoaderPage />} />
            <Route exact path="/lazy" element={<LazyLoaderPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/regis" element={<RegistrationPage />} />
            <Route exact path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  }
}

export default App;
