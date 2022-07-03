import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
 
  const [inp, setInp] = useState({
    name: "",
    material: "",
    email: "",
    phone: "",
    website: "",
  });

  const setData = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInp((preVal) => {
      return {
        ...preVal, 
        [name]: value,
      };
    });
  };
  const { id } = useParams("");
  console.log(id);

  const getuser = async () => {
    const res = await fetch(`http://localhost:8003/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 400 || !data) {
      console.log("error");
    } else {
      setInp(data);
      console.log("data recieved");
    }

  };
  
  useEffect(() => {
    getuser();
  },[]);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, material, email, phone, website } = inp;

    const res2 = await fetch(`http://localhost:8003/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        material,
        email,
        phone,
        website ,
      }),
    });
    const data2 = await res2.json();
    // console.log(data2);

    if (res2.status === 400 || !data2) {
      alert(`please fill the data`);
    } else {
      setInp(data2);
      history('/supplier')
      alert(`data upadated`);
    }
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 my-5">
        <h5 className=" mb-4">Edit Supplier Information</h5>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Name"
              name="name"
              value={inp.name}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company material"
              name="material"
              value={inp.material}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company E-mail"
              name="email"
              value={inp.email}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Contact no."
              name="phone"
              value={inp.phone}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Website"
              name="website"
              value={inp.website}
              onChange={setData}
            />
          </div>
          <button  type="submit"
            onClick={updateuser} className="btn btn-warning btn-sm btn-block my-3">Update Supplier</button>
        </form>
      </div>
    </div>
  );
};

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// /* eslint-disable no-template-curly-in-string */

// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

// return (
//   <Form
//     {...layout}
//     name="nest-messages"
//     validateMessages={validateMessages}
//     onSubmit={(e) => onSubmit(e)}
//   >

//     <Form.Item
//       name="name"
//       label="Name"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input
//         type="text"
//         style={{ width: 300 }}
//         value={name}
//         onChange={(e) => onInputChange(e)}
//       />
//     </Form.Item>

//     <Form.Item
//       name="material"
//       label="material"
//       rules={[
//         {
//           required: true,
//         },
//       ]}
//     >
//       <Input
//         style={{ width: 300 }}
//         value={material}
//         onChange={(e) => onInputChange(e)}
//       />
//     </Form.Item>

//     <Form.Item
//       name="email"
//       label="Email"
//       rules={[
//         {
//           type: "email",
//         },
//       ]}
//     >
//       <Input
//         style={{ width: 300 }}
//         value={email}
//         onChange={(e) => onInputChange(e)}
//       />
//     </Form.Item>

//     <Form.Item
//       name="phone"
//       label="phone"
//       rules={[
//         {
//           type: "number",
//         },
//       ]}
//     >
//       <InputNumber
//         style={{ width: 300 }}
//         value={phone}
//         onChange={(e) => onInputChange(e)}
//       />
//     </Form.Item>
//     <Form.Item name="website" label="Website">
//       <Input
//         style={{ width: 300 }}
//         value={website}
//         onChange={(e) => onInputChange(e)}
//       />
//     </Form.Item>

//     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//       <Space>
//       <Button type="primary" htmlType="submit">
//         update User
//       </Button>

//       <Link to='/'>
//       <Button type="primary">
//         Supplier List
//       </Button>
//       </Link>
//       </Space>
//     </Form.Item>
//   </Form>
// );
// };

export default EditUser;
