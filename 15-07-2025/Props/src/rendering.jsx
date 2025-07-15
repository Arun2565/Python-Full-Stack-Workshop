// Conditonal rendering in React, we can use if else statements, ternary operators, or logical && operator.
// It helps

import React from "react";
//using if-else statement

function Greeting(name) {
  if (name.isloggedin) {
    return (
      <h1>
        Welcome,
        {name.user}!{" "}
      </h1>
    );
  } else {
    return <h1>Please Log in.</h1>;
  }
}
