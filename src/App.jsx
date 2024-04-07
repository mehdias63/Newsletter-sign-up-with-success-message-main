import React, { useState } from "react";
import List from './components/List'


function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
    } else if (!isValidEmail(email)) {
      setError("Oops! Please check your email");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Thank you for subscribing!");
    }
  };
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(email);
  };

  return (
    <div>
      {!success ? (
        <>
        <picture>
        <source media="(min-width: 640px)" srcSet='/images/illustration-sign-up-desktop.svg' type="image/png"/>
        <source media="(max-width: 639px)" srcSet='/images/illustration-sign-up-mobile.svg' type="image/png"/>
        <img src='/images/illustration-sign-up-mobile.svg' alt='illustration'/>
      </picture>
      <div>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <List text="Product discovery and building what matters"/>
      <List text="Measuring to ensure updates are a success"/>
      <List text="And much more!"/>
      <form onSubmit={handleSubmit} className="w-full mt-6">
      <div className="sm:w-[22rem] md:w-[25rem] lg:w-[27rem] flex flex-col mb-4 md:mb-6 relative">
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email@company.com"
          className="w-full border-2 placeholder:text-dark-gray placeholder:opacity-50 px-6 py-3 bg-white"
        />
        <button className=" px-7 py-3 sm:px-10 cursor-pointer bg-dark-blue text-white mt-5">
        Subscribe to monthly newsletter
        </button>
      </div>
      </form>
      </div>
        </>
      ) : (
        <>
        <div className="">
          <img src='/images/icon-success.svg'/>
          <h2>Thanks for subscribing!</h2>
          <p>A confirmation email has been sent to <span>ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription</p>
          <button className=" px-7 py-3 sm:px-10 cursor-pointer bg-dark-blue text-white mt-5">
          Dismiss message
        </button>
        </div>
        </>
      )}
      {error && <div className="text-xs text-red">{error}</div>}
    </div>
  )
}

export default App
