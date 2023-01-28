import BackHome from "../components/BackHome";
import Layout from "../components/Layout";
import React from "react";
import { useState } from "react";

export default function ContactUs() {
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
        console.log("Response received");
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
      console.error(err);
      //alert("We can't submit the form, try again later?");
    }
  }

  return (
    <Layout>
      <div className="mx-auto container">
        <form className="container mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-center">Contact us</h1>
          <div className="name flex flex-row justify-between mb-8">
            <div className="mb-4 flex flex-col">
              <label htmlFor="frm-first">Full Name</label>
              <input
                id="frm-first"
                type="text"
                name="name"
                autoComplete="given-name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="email flex flex-col mb-8">
            <label htmlFor="frm-email">Email</label>
            <input
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="phone flex flex-col mb-8">
            <label htmlFor="frm-phone">Phone</label>
            <input
              id="frm-phone"
              type="text"
              name="phone"
              autoComplete="tel"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="message flex flex-col mb-8">
            <label htmlFor="frm-message">Message</label>
            <textarea
              id="frm-message"
              name="message"
              rows={6}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="button primary flex flex-col items-center">
            <button
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
    </Layout>
  );
}
