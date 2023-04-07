import React from 'react'
import { Form } from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Form layout="vertical" className="w-400 bg-white p-2" >
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