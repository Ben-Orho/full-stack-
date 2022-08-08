import { useState } from "react";

const SignIn = ({ onHome, onRegister, loadUser }) => {
  const [signInEmail, setsignInEmail] = useState("");
  const [signInPassword, setsignInPassword] = useState("");

  const onEmailChange = (e) => {
    //console.log(signInEmail);
    setsignInEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    //console.log(signInPassword);
    setsignInPassword(e.target.value);
  };
  const onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
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
              <legend class="f4 fw6 ph0 mh0">Sign In</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  onChange={onEmailChange}
                  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
                  onChange={onPasswordChange}
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div class="">
              <input
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={onSubmitSignIn}
              />
            </div>
            <div class="lh-copy mt3">
              <p
                href="#0"
                class="f6 link dim black pointer db"
                onClick={onRegister}
              >
                Register
              </p>
              <a href="#0" class="f6 link dim black db">
                Forgot your password?
              </a>
            </div>
          </form>
        </main>
      </div>
    </article>
  );
};

export default SignIn;
