import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrandSummRequest, summaryRequest } from "../../ApiRequest/ApiRequest";

function DashBoard() {
  const summaryList = useSelector((state) => state.summary.value);
  const BrandSumList = useSelector((state) => state.BrandSumm.BrandValue);
  useEffect(()=>{
   (async()=>{
    await summaryRequest()
    await BrandSummRequest()

   })()
  },[])
  return (
    <Fragment>
      <div className="container">
        <div className="row">
        <div className="text-center">
        <h2>category</h2>
      </div> 
          {
            summaryList.map((item,i)=>
<div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="animated fadeInUp">{item._id} </h5>
                <h6 className="text-secondary animated fadeInUp">{item.count}</h6>
              </div>
            </div>
          </div>
            )
          }
          
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="text-center">
        <h2>Brand</h2>
      </div>          {
            BrandSumList.map((item,i)=>
<div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="animated fadeInUp">{item._id} </h5>
                <h6 className="text-secondary animated fadeInUp">{item.count}</h6>
              </div>
            </div>
          </div>
            )
          }
          
        </div>
      </div>
    </Fragment>
  );
}

export default DashBoard;
