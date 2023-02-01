import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    console.log(event);
    const { value } = event.target;
    setEmail(value);
  };
  const onPasswordChange = (event) => {
    console.log(event);
    const { value } = event.target;
    setPassword(value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // submit 버튼 클릭 시 새로고침 방지
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="input email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="input password"
          value={password}
          onChange={onPasswordChange}
          required
        />
        <input type="submit" value="sign in" />
      </form>
    </div>
  );
};

export default Auth;
