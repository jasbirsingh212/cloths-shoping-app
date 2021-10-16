import React from "react";
import { Form, Input, Button } from "antd";
import {
  AiOutlineUser as UserOutlined,
  AiOutlineLock as LockOutlined,
} from "react-icons/ai";
import "../sign-in/sign-in.scss";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <section className="sign-up-container">
      <h2 className="heading">Don't have an account ! </h2>
      <p className="description">Sign Up with your Username and Password</p>
      <Form name="normal_sign" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
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
            placeholder="Username/Email"
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

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item className="button-container">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button btn-bg-black"
            size="large"
            shape="round"
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SignUp;
