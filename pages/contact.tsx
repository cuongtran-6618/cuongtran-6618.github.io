import BackHome from "../components/BackHome";
import Layout from "../components/Layout";
import React from "react";

export default function ContactUs() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
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
              <label htmlFor="frm-first">First Name</label>
              <input
                id="frm-first"
                type="text"
                name="first"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="frm-last">Last Name</label>
              <input
                id="frm-last"
                type="text"
                name="last"
                autoComplete="family-name"
                required
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
            />
          </div>

          <div className="message flex flex-col mb-8">
            <label htmlFor="frm-message">Message</label>
            <textarea id="frm-message" name="message" rows={6}></textarea>
          </div>
          <div className="button primary flex flex-col items-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
