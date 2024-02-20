import axios from "axios";
import toast from "react-hot-toast";
import { hideLoader, showLoader } from "../redux/state-slice/SettingSlice";
import Store from "../redux/store/Store";
import { setToken, setUserDetails } from "../helper/SessionHelper";
const BaseUrl = "http://localhost:9000/api/v1";



export async function LoginRequest(email, password) {
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/login";
    let PostBody = { "email": email, "password": password };
    // const res=await axios.post(URL,PostBody)
    const response = await fetch(URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(PostBody), // body data type must match "Content-Type" header
    });

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      setToken(res.data['token']);
      setUserDetails(res.data['data']);
      toast.success("Login Success");
      return true;
    } else {
      toast.error("Invalid Email or Password");
      return false;
    }
  } catch (err) {
    console.log(err)
    toast.error("Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}



  
export async function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/registration";
    let PostBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      password: password,
      photo: photo,
    };

    const res = await axios.post(URL, PostBody);

    Store.dispatch(hideLoader());

    if (res.status === 200) {
      if (res.data["status"] === "fail") {
        if (res.data["data"]["keyPattern"]["email"]) {
          toast.error("Email Already Exist");
          return false;
        } else {
          toast.error("something went wrong");
          return false;
        }
      } else {
        toast.success("Registration success");
        return true;
      }
    } else {
      toast.error("Something went wrong");
      return false;
    }
  } catch (err) {
    Store.dispatch(hideLoader());
    toast.error("Something went wrong");
    return false;
  }
}
