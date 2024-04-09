import React, { useState } from "react";
import List from './components/List'
import Button from "./components/Button";


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
      setError("Valid email required");
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
    <div className="bg-white flex flex-col md:flex-row gap-3 justify-center items-center md:grid  font-robo text-dark-gray p-6 rounded-2xl min-h-screen">
      {!success ? (
        <>
        <picture className="md:col-start-2">
        <source media="(min-width: 640px)" srcSet='/images/illustration-sign-up-desktop.svg' type="image/png"/>
        <source media="(max-width: 639px)" srcSet='/images/illustration-sign-up-mobile.svg' type="image/png"/>
        <img src='/images/illustration-sign-up-mobile.svg' alt='illustration'/>
      </picture>
      <div className="md:col-start-1 md:row-start-1">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-10 lg:leading-[3.5rem]">Stay updated!</h1>
        <p className="text-base leading-normal lg:my-2">Join 60,000+ product managers receiving monthly updates on:</p>
      <List text="Product discovery and building what matters"/>
      <List text="Measuring to ensure updates are a success"/>
      <List text="And much more!"/>
      <form onSubmit={handleSubmit} className="w-full mt-6">
      <div className="sm:w-[22rem] md:w-[25rem] lg:w-[27rem] flex flex-col mb-4 md:mb-6 relative">
        <label className="text-xs font-bold leading-[1.125rem]">Email address</label>
        {error && <div className="absolute text-xs text-light-red right-0">{error}</div>}
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email@company.com"
          className={`w-full border-2 placeholder:text-dark-gray placeholder:opacity-50 px-6 py-3 ${error ? "border-light-red text-light-red bg-light-pink" : "bg-white border-dark-gray"}`}
        />
       <Button text="Subscribe to monthly newsletter"/>
      </div>
      </form>
      </div>
        </>
      ) : (
        <>
        <div className="w-[31.5rem] px-6 lg:px-16 lg:py-12">
          <img src='/images/icon-success.svg'/>
          <h2 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-10 lg:leading-[3.5rem] my-6">Thanks for subscribing!</h2>
          <p>A confirmation email has been sent to <span>ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription</p>
          <Button text="Dismiss message" className="mt-[10rem] md:mt-[4rem]"/>
        </div>
        </>
      )}
      
    </div>
  )
}

export default App
