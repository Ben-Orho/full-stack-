import { useState } from "react";
import Logo from "./Logo";
import Rank from "./Rank";
import "./App.css";
import Navigation from "./Navigation";
import LinkForm from "./LinkForm";
import SignIn from "./SignIn";
import Register from "./Register";

function App() {
  const [route, setRoute] = useState({
    signin: true,
    home: false,
    register: false,
  });

  const [submittedLink, setsubmittedLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      entries: user.entries,
      joined: user.joined,
    });
    //console.log(user);
  };

  // connecting to the server
  // useEffect(() => {
  //   fetch("http://locathost:3002/signin")
  //     .then((res) => res.json())
  //     .then(console.log);
  // });
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleBtnSubmit = () => {
    console.log("click");
    setsubmittedLink(input);
    setSubmitted(true);
    if (input.length !== 0) {
      fetch("http://localhost:3002/link", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
        }),
      })
        .then((res) => res.json())
        .then((count) => {
          setUser(
            Object.assign(user, {
              entries: count,
            })
          );
        });
    }
  };

  const handleSignIn = () => {
    setRoute({ home: false, signin: true, register: false });
  };
  const handleRegister = () => {
    setRoute({ home: false, signin: false, register: true });
  };
  const handleHome = () => {
    setRoute({ home: true, signin: false, register: false });
  };

  return (
    <div className="App">
      {route.signin && (
        <SignIn
          loadUser={loadUser}
          onHome={handleHome}
          onRegister={handleRegister}
        />
      )}
      {route.register && (
        <Register
          onHome={handleHome}
          onSignIn={handleSignIn}
          loadUser={loadUser}
        />
      )}
      {route.home && (
        <>
          <Navigation onSignIn={handleSignIn} />
          <Logo />
          <Rank username={user.name} entries={user.entries} />
          <LinkForm
            handleBtnSubmit={handleBtnSubmit}
            handleInputChange={handleInputChange}
            submitted={submitted}
            submittedLink={submittedLink}
          />
        </>
      )}
    </div>
  );
}

export default App;
