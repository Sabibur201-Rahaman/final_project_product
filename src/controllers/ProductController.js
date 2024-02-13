const ProductModel = require("../models/ProductModel");
exports.createProduct = async(req, res) => {
  try {
    let reqBody = req.body;
    reqBody.email = req.headers["email"];
    let newProduct=await ProductModel.create(reqBody);
    console.log(newProduct)
    if(newProduct){
      res.status(200).json({ status: "success", data: "datas" });

    }else{
      res.status(404).json({ status: "fail", data: "err" });

    }
  } catch (err){
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};


// exports.createProduct = async (req, res) => {
//   try {
//     let reqBody = req.body;
//     reqBody.email = req.headers["email"];
    
//     let newProduct = await ProductModel.create(reqBody);
//     console.log(newProduct)
//     res.status(200).json({ status: "success", data: newProduct });
//   } catch (err) {
//     if (err.code === 11000 && err.keyPattern && err.keyPattern.email === 1) {
//       // Duplicate key error for email
//       res.status(400).json({ status: "fail", message: "Email already exists" });
//     } else {
//       // Other errors
//       console.error(err);
//       res.status(500).json({ status: "error", message: "Internal server error" });
//     }
//   }
// };



exports.deleteProduct= (req, res) => {
    try {
      let id=req.params.id
      let Query={_id:id};
      ProductModel.remove(Query);
      res.status(200).json({ status: "success", data: "data" });
    } catch {
      res.status(400).json({ status: "fail", data: "some issues" });
    }
  };
  exports.updateProductStats = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };
        let reqBody = req.body;
        
        // Update the product using await
        let updatedData = await ProductModel.updateOne(Query, reqBody);
        
        // Check if any document was modified
        if (updatedData) {
            res.status(200).json({ status: "success", data: updatedData });
        } else {
            res.status(404).json({ status: "fail", data: "Product not found or no changes applied" });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};
  