import React from 'react'
import {  Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from '../../apiCalls/createUser';
const Login = () => {
  const navigate = useNavigate();

  const onFinsh = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...response.data,
            password: "",
          })
        );
        navigate("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <Form  onFinish={onFinsh} layout="vertical" className="w-400 bg-white p-2" >
      <h2 className="uppercase my-1">
        <strong>SHEYHELTHY Login</strong>
      </h2>
      <hr />

      <Form.Item label="Email" name="email">
        <input type="email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <input type="password" />
      </Form.Item>

      <button className="contained-btn my-1 w-full" type="submit">
        Login
      </button>

      <Link className="underline" to="/register">
        Dont have an account? <strong>Sign Up</strong>
      </Link>
    </Form>
  </div>  )
}

export default Login