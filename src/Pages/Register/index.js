import React from 'react'
import { Form ,message} from 'antd'
import { Link, useNavigate } from "react-router-dom";

import {createUser} from '../../apiCalls/createUser'
const Register = () => {

  const navigate = useNavigate();


  const onFinsh = async (values) => {
    try {
      const response = await createUser({
        ...values,
        role: "user",
      });
      if (response.success) {
        message.success(response.message);

        setTimeout(() => {         navigate("/login",2500);
      })
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);

    }
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) navigate("/");
  }, []);

    return (
      <div className="flex justify-center items-center h-screen">
        <Form layout="vertical" className="w-400 bg-white p-2" onFinish={onFinsh} >
          <h2 className="uppercase my-1">
            <strong>SHEYHELTHY Register</strong>
          </h2>
          <hr />
          <Form.Item label="Name" name="name">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" />
          </Form.Item>
  
          <button className="contained-btn my-1 w-full" type="submit">
            REGISTER
          </button>
  
          <Link className="underline" to="/login">
            Already have an account? <strong>Sign In</strong>
          </Link>
        </Form>
      </div>  )
}

export default Register