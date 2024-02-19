import axios from "axios";
import toast from "react-hot-toast";
import { hideLoader, showLoader } from "../redux/state-slice/SettingSlice";
import Store from "../redux/store/Store";
const BaseUrl = "http://localhost:9000/api/v1";
export function RegistrationRequest(
    email,
    firstName,
    lastName,
    mobile,
    password,
    photo
  ) {
    Store.dispatch(showLoader())
    let URL = BaseUrl + "/registration";
    let PostBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      password: password,
      photo: photo,
    };
    return axios
      .post(URL, PostBody) // Corrected order of arguments
      .then((res) => {
        Store.dispatch(hideLoader())

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
      })
      .catch((err) => {
        Store.dispatch(hideLoader())

        toast.error("Something went wrong");
        return false;
      });
  }
  
