import React from 'react'
import { Form } from 'antd'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <Form layout="vertical" className="w-400 bg-white p-2" >
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