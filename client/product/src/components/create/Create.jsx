import React, { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IsEmpty } from "../../helper/FormHelper";
import { NewProductRequest } from "../../ApiRequest/ApiRequest";
import Category from './../category/Category';
function Create() {
  let titleRef,descriptionRef,brandRef,categoryRef=useRef()
  let navigate=useNavigate();
  const CreateNew=()=>{
let title=titleRef.value;
let description=descriptionRef.value;
let category=categoryRef.value;
let brand=brandRef.value;
if(IsEmpty(titleRef)){
toast.error('title is required')
}
else if(IsEmpty(description)){
toast.error('description is required')
}
else{
  NewProductRequest(title,description,category,brand).then((res)=>{
    if(res===true){
      navigate('/')
    }
  })
}
  }
  return (
    <div>
      <Container fluid={true} className="content-body">
        <Row className="d-flex justify-content-center">
          <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
            <div className="card">
              <div className="card-body">
                <h4>Create New</h4>
                <br />
                <input
                  ref={(input) => (titleRef = input)}
                  placeholder="Product Name"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <textarea
                  ref={(input) => (descriptionRef = input)}
                  rows={5}
                  placeholder="Product Description"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <textarea
                  ref={(input) => (brandRef = input)}
                  rows={5}
                  placeholder="Product brand"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <textarea
                  ref={(input) => (categoryRef = input)}
                  rows={5}
                  placeholder="Product category"
                  className="form-control animated fadeInUp"
                  type="text"
                />
                <br />
                <button
                  onClick={CreateNew}
                  className="btn float-end btn-primary"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
