import React, { useState } from 'react'
import axios from 'axios'

function AddProduct() {

  const [product, setProduct] = useState({
    pid: "",
    pname: "",
    pqty: "",
    price: ""
  });

  const [msg, setMsg] = useState("");

  const addData = () => {
    axios.post("http://localhost:1004/product/add", product)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG FOR STORING DATA");
      });
  };

  const deleteData = () => {
    if (!product.pid) {
      alert("PLEASE ENTER PRODUCT ID TO DELETE");
      return;
    }

    axios.delete(`http://localhost:1004/product/del/${product.pid}`)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG WHILE DELETING DATA");
      });
  };

  const refreshData = () => {
    setProduct({
      pid: "",
      pname: "",
      pqty: "",
      price: ""
    });
    setMsg("");
  };

  return (
    <div style={{ width: "30%", margin: "50px auto" }}>
      <h2 className='text-primary'>ADD / DELETE PRODUCT</h2>

      <input
        type='text'
        className='form-control mb-2'
        value={product.pid}
        onChange={(e) => setProduct({ ...product, pid: e.target.value })}
        placeholder='ENTER THE PRODUCT ID'
      />

      <input
        type='text'
        className='form-control mb-2'
        value={product.pname}
        onChange={(e) => setProduct({ ...product, pname: e.target.value })}
        placeholder='ENTER THE PRODUCT NAME'
      />

      <input
        type='text'
        className='form-control mb-2'
        value={product.pqty}
        onChange={(e) => setProduct({ ...product, pqty: e.target.value })}
        placeholder='ENTER THE PRODUCT QUANTITY'
      />

      <input
        type='text'
        className='form-control mb-2'
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        placeholder='ENTER THE PRICE'
      />

      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={addData}
      >
        ADD
      </button>
      &nbsp;&nbsp;

      <button
        type='button'
        className='btn btn-outline-danger'
        onClick={deleteData}
      >
        DELETE
      </button>
      &nbsp;&nbsp;

      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={refreshData}
      >
        REFRESH
      </button>

      <h4 className='text-danger mt-2'>{msg}</h4>
    </div>
  );
}

export default AddProduct;
