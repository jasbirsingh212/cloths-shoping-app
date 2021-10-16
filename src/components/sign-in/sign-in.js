import React from "react";
import { Form, Input, Button } from "antd";
import {
  AiOutlineUser as UserOutlined,
  AiOutlineLock as LockOutlined,
} from "react-icons/ai";
import './sign-in.scss';

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="sign-in-section">
      <h2 className='heading'>Have an account ! </h2>
      <p className='description'>Sign In with your Username and Password</p>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item className='button-container'>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btn-bg-black"
            size='large'
            shape='round'
          >
            Sign in
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button google-btn"
            size='large'
            shape='round'
            danger
          >
            Sign in with Google
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SignIn;
