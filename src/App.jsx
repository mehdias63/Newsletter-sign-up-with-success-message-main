import React, { useState } from "react";
import List from './components/List'
import Button from "./components/Button";


function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
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
  const handleDismiss = () => {
    setSuccess("")
    setEmail("")
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center font-robo text-dark-gray p-6 rounded-2xl">
      {!success ? (
        <>
        <div className="md:w-[48rem] lg:w-[58rem] bg-white rounded-2xl flex flex-col md:flex-row gap-3 justify-center items-center md:grid md:grid-cols-2 p-4 lg:p-6">
        <picture className="md:col-start-2 md:ml-10 lg:ml-12">
        <source media="(min-width: 640px)" srcSet='/images/illustration-sign-up-desktop.svg' type="image/png"/>
        <source media="(max-width: 639px)" srcSet='/images/illustration-sign-up-mobile.svg' type="image/png"/>
        <img src='/images/illustration-sign-up-mobile.svg' alt='illustration'/>
      </picture>
      <div className="md:col-start-1 md:row-start-1 lg:ml-6 relative">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-10 lg:leading-[3.5rem] my-4 lg:my-8">Stay updated!</h1>
        <p className="text-base leading-normal my-4">Join 60,000+ product managers receiving monthly updates on:</p>
      <List text="Product discovery and building what matters"/>
      <List text="Measuring to ensure updates are a success"/>
      <List text="And much more!"/>
      <form onSubmit={handleSubmit} className="w-full mt-6">
      <div className="flex flex-col mb-4 md:mb-6">
        <label className="text-xs font-bold leading-[1.125rem] mt-4 mb-2">Email address</label>
        {error && <div className="absolute text-xs text-light-red right-0 mt-4">{error}</div>}
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="email@company.com"
          className={`w-full border-2 placeholder:text-dark-gray rounded-lg placeholder:opacity-50 px-6 py-3 ${error ? "border-light-red text-light-red bg-light-pink" : "bg-white border-light-gray"}`}
        />
       <Button>Subscribe to monthly newsletter</Button>
      </div>
      </form>
      </div>
      </div>
        </>
      ) : (
        <>
        <div className="sm:w-[31.5rem] bg-white rounded-2xl">
        <div className="p-6 lg:px-16 lg:py-12 flex flex-col justify-start items-start">
          <img src='/images/icon-success.svg' className="mb-4" alt="icon-success"/>
          <h2 className="text-[2.5rem] lg:text-[3.5rem] font-bold leading-10 lg:leading-[3.5rem] my-6">Thanks for subscribing!</h2>
          <p className="text-base leading-6">A confirmation email has been sent to <span className="font-bold">{email}</span> Please open it and click the button inside to confirm your subscription</p>
          <Button className="mt-[10rem] md:mt-[4rem] mb-[5.7rem] md:mb-[2rem]" onClick={handleDismiss}>Dismiss message</Button>
        </div>
        </div>
        </>
      )}
      
    </div>
  )
}

export default App
