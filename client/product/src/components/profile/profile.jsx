import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  GetProfileDetails,
  ProfileUpdateRequest,
} from "../../ApiRequest/ApiRequest";
import { IsEmail, IsEmpty, IsMobile, getBase64 } from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getUserDetails } from "../../helper/SessionHelper";
const initialValue = {
  email: "",
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
  photo: "",
};
function profile() {
  const [data, setData] = useState(initialValue);
  const handleChange = (e) => {
    console.log(e.target.value)
    // setData({
    //   ...data,
    //   [e.name]: e.target.value,
    // });
  };
  console.log(data)
  // useEffect(() => {
  //   (async () => {
  //     await GetProfileDetails();
  //   })();
  // }, []);
  const navigate = useNavigate();
  // const ProfileData = useSelector((state) => state.profile.ProfileValue);
  const ProfileData = getUserDetails();
  const PreviewImage = () => {
    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img) => {
      userImgView.src = base64Img;
    });
  };

  // const UpdateMyProfile = () => {
  //   let email = emailRef.value;
  //   let firstName = firstNameRef.value;
  //   let lastName = lastNameRef.value;
  //   let mobile = mobileRef.value;
  //   let password = passwordRef.value;
  //   let photo = userImgView.src;
  //   if (IsEmail(email)) {
  //     toast.error("Valid Email Address is required");
  //   } else if (IsEmpty(firstName)) {
  //     toast.error("firstName is required");
  //   } else if (IsEmpty(lastName)) {
  //     toast.error("lastName is required");
  //   } else if (!IsMobile(mobile)) {
  //     toast.error("valid mobile no is required");
  //   } else if (IsEmpty(password)) {
  //     toast.error("password is required");
  //   } else {
  //     ProfileUpdateRequest(
  //       email,
  //       firstName,
  //       lastName,
  //       mobile,
  //       password,
  //       photo
  //     ).then((result) => {
  //       if (result === true) {
  //         navigate("/");
  //       }
  //     });
  //   }
  // };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <img
                  // ref={(input) => (userImgView = input)}
                  className="icon-nav-img-lg"
                  src={ProfileData?.photo}
                  alt=""
                />
                <hr />
                <div className="row">
                  <div className="col-4 p-2">
                    <label>Profile Picture</label>
                    <input
                      // onChange={PreviewImage}
                      // ref={(input) => (userImgRef = input)}
                      className="form-control animated fadeInUp"
                      type="file"
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Email Address</label>
                    <input
                      key={Date.now()}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                      value={data?.email}
                      name="email"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>First Name</label>
                    <input
                      key={Date.now()}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                      value={data?.firstName}
                      name="firstName"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Last Name</label>
                    <input
                      key={Date.now()}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                      value={data?.lastName}
                      name="lastName"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Mobile</label>
                    <input
                      key={Date.now()}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="text"
                      value={data?.mobile}
                      name="mobile"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-4 p-2">
                    <label>Password</label>
                    <input
                      key={Date.now()}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                      value={data?.password}
                      name="password"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-4 p-2">
                    <button
                      // onClick={UpdateMyProfile}
                      className="btn w-100 float-end btn-primary animated fadeInUp"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
