import BackHome from "../components/BackHome";
import Layout from "../components/Layout";
import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received: ", res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }
      });

      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <>
      <div className="mx-full cream-color px-4" id="contact-us-container">
        <form className="container mx-auto py-16 lg:px-32" onSubmit={handleSubmit}>
          <div className="name flex flex-col justify-between mb-8">
            <div className="mb-4 flex flex-col">
              <label htmlFor="frm-first" className="mb-4">Your Name</label>
              <input
                id="frm-first"
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                autoComplete="given-name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="email flex flex-col mb-8">
              <label htmlFor="frm-email" className="mb-4">Your Email<span className="text-red-600">*</span></label>
              <input
                id="frm-email"
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                autoComplete="email"
                placeholder="Please enter a valid email address"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="phone flex flex-col mb-8">
              <label htmlFor="frm-phone" className="mb-4">Phone<span className="text-red-600">*</span></label>
              <input
                id="frm-phone"
                type="text"
                name="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                autoComplete="tel"
                placeholder="Please enter a valid phone number"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="message flex flex-col mb-8">
            <label htmlFor="frm-message" className="mb-4">Message</label>
            <textarea
              id="frm-message"
              name="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows={6}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="mb-8">
            A <span className="text-red-600">*</span><span> means required field.</span>
          </div>
          <div className="button primary flex flex-col justify-start">
            <button
              className="mx-auto py-8 px-16 btn-primary-color uppercase font-bold hover:text-white hover:bg-[#ff7700]"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}