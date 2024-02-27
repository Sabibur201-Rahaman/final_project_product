import axios from "axios";
import toast from "react-hot-toast";
import { hideLoader, showLoader } from "../redux/state-slice/SettingSlice";
import Store from "../redux/store/Store";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import {
  SetBrandProduct,
  SetCategoryProduct,
} from "../redux/state-slice/ProductSlice";
import { SetSummary } from "../redux/state-slice/SummarySlice";
import { SetBrandSummary } from "../redux/state-slice/BrandSummSlice";
import { SetProfile } from "../redux/state-slice/ProfileSlice";
const BaseUrl = "http://localhost:9000/api/v1";

export async function GetProfileDetails() {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/profileDetails/";
    const res = await axios.get(URL, AxiosHeader);
    Store.dispatch(hideLoader());
    if (res.status === 200) {
      Store.dispatch(SetProfile(res.data["data"]));
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    console.log(err)
    toast.error("!Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function DeleteRequest(id) {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());

    let URL = BaseUrl + "/deleteProduct/" + id;

    const res = await axios.post(URL,{},AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      toast.success("successfully deleted");
      return true;
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    console.log(err);
    toast.error("!Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function BrandSummRequest() {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/productsBrandCounts/";
    const res = await axios.get(URL, AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      Store.dispatch(SetBrandSummary(res.data["data"]));
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    toast.error("!Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function summaryRequest() {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/productsCategoryCounts/";
    const res = await axios.get(URL, AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      Store.dispatch(SetSummary(res.data["data"]));
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    console.log(err);
    toast.error("!Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function ProductListBycategory(Category) {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/listProductByCategory/" + Category;
    const res = await axios.get(URL, AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      if (Category === "printer") {
        Store.dispatch(SetCategoryProduct(res.data["data"]));
      } else if (Category === "mobile") {
        Store.dispatch(SetCategoryProduct(res.data["data"]));
      } else if (Category === "laptop") {
        Store.dispatch(SetCategoryProduct(res.data["data"]));
      }
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    console.log(err);
    toast.error("!Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}
export async function ProductListByBrand(Brand) {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/listProductByBrand/" + Brand;
    const res = await axios.get(URL, AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      if (Brand === "Epson") {
        Store.dispatch(SetBrandProduct(res.data["data"]));
      } else if (Brand === "hp") {
        Store.dispatch(SetBrandProduct(res.data["data"]));
      } else if (Brand === "apple") {
        Store.dispatch(SetBrandProduct(res.data["data"]));
      }
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function NewProductRequest(title, description, category, brand) {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/createProduct";
    let PostBody = {
      title: title,
      description: description,
      category: category,
      brand: brand,
    };
    const res = await axios.post(URL, PostBody, AxiosHeader);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      toast.success("product created");
      return true;
    } else {
      toast.error("Something Went Wrong");
      return false;
    }
  } catch (err) {
    toast.error("Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}
export async function LoginRequest(email, password) {
  try {
    Store.dispatch(showLoader());
    let URL = BaseUrl + "/login";
    let PostBody = { email: email, password: password };
    const res = await axios.post(URL, PostBody);

    Store.dispatch(hideLoader());
    if (res.status === 200) {
      setToken(res.data["token"]);
      setUserDetails(res.data["data"]);
      toast.success("Login Success");
      return true;
    } else {
      toast.error("Invalid Email or Password");
      return false;
    }
  } catch (err) {
    console.log(err);
    toast.error("Something Went Wrong");
    Store.dispatch(hideLoader());
    return false;
  }
}

export async function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
) {
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

export async function ProfileUpdateRequest(email, firstName, lastName, mobile, password, photo) {
  const AxiosHeader = { headers: { token: getToken() } };
  try {
      Store.dispatch(showLoader());

      let URL = BaseUrl + "/profileUpdate/";

      let PostBody = {
          email: email,
          firstName: firstName,
          lastName: lastName,
          mobile: mobile,
          password: password,
          photo: photo
      };
      let UserDetails = {
          email: email,
          firstName: firstName,
          lastName: lastName,
          mobile: mobile,
          photo: photo
      };

      const res = await axios.post(URL, PostBody, AxiosHeader);

      Store.dispatch(hideLoader());

      if (res.status === 200) {
          toast.error("Profile Update Success");
          setUserDetails(UserDetails);
          return true;
      } else {
          ErrorToast("Something Went Wrong");
          return false;
      }
  } catch (err) {
    console.log(err)
      toast.error("!Something Went Wrong");
      Store.dispatch(hideLoader());
      return false;
  }
}
