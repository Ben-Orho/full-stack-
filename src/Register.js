import React, { useState } from "react";

const Register = ({ onHome, onSignIn, loadUser }) => {
  const [userName, setuserName] = useState("");
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");

  const onuserNameChange = (e) => {
    setuserName(e.target.value);
    //console.log(userName);
  };
  const onregisterEmailChange = (e) => {
    setregisterEmail(e.target.value);
    //console.log();
  };
  const onregisterPasswordChange = (e) => {
    setregisterPassword(e.target.value);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        email: registerEmail,
        password: registerPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          e.preventDefault();
          loadUser(user);
          onHome();
        }
      });
  };
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <div>
        <main class="pa4 black-80">
          <form class="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Register</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">
                  Username
                </label>
                <input
                  onChange={onuserNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  onChange={onregisterEmailChange}
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  onChange={onregisterPasswordChange}
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={onSubmitRegister}
              />
            </div>
            <div class="lh-copy mt3">
              <a
                href="#0"
                class="f6 link dim black db pointer"
                onClick={onSignIn}
              >
                Sign In
              </a>
            </div>
          </form>
        </main>
      </div>
    </article>
  );
};

export default Register;
