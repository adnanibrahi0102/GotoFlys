import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { phoneNumber } from "../lib/number";
const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSendSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSendSuccess(false);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 bg-gradient-to-r from-orange-500 to-purple-600">
        <h2 className="text-center text-white text-3xl font-extrabold mb-8 p-6">
          GET IN TOUCH
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-transparent max-w-4xl mx-auto rounded-lg shadow-lg p-8 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="w-full md:w-3/4 mx-auto">
              <label className="block text-white text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-500 py-2 text-white placeholder-white placeholder-opacity-70"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-3/4 mx-auto">
              <label className="block text-white text-lg font-semibold mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-500 py-2 text-white placeholder-white placeholder-opacity-70"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="mb-8 w-full md:w-3/4 mx-auto">
            <label className="block text-white text-lg font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-500 py-2 text-white placeholder-white placeholder-opacity-70"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-8 w-full md:w-3/4 mx-auto">
            <label className="block text-white text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full bg-transparent border-b border-white focus:outline-none focus:border-purple-500 py-2 text-white placeholder-white placeholder-opacity-70 h-32 resize-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-10 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "SEND MESSAGE"}
            </button>
            {sendSuccess === true && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {sendSuccess === false && (
              <p className="text-red-500 mt-4">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="mt-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1633725519534-a3b98b7b153f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Description of the image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <img
              src="/assets/logo (1).webp"
              alt="Logo"
              className="mr-3 inline-block align-middle"
            />
            <h3 className="text-2xl font-bold mb-4 text-black">Skywayfares</h3>
            <p className="mb-4 text-black">
              Skywayfares is an independent Travel service provider under My Fly
              Support LLC that provides affordable travel services. We are not
              associated with Airlines in any way, all branding is purely for
              demonstrative purposes only and does not signify any association
              with any Airlines or organization.
            </p>
            <p className="mb-4 text-black">
              3705 64th St Apt 5C Woodside NY 11377-2771
            </p>
            <p className="mb-4 text-black">{phoneNumber}</p>
            <p className="text-black">info@skywayfares.com</p>
          </div>
        </div>
        <div className="mt-12 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9542952217317!2d-73.89857978459574!3d40.7477361793277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f282dbaf2a1%3A0x8f680d1bd6e02b29!2s3705%2064th%20St%20Apt%205C%2C%20Woodside%2C%20NY%2011377-2771%2C%20USA!5e0!3m2!1sen!2sin!4v1690993739815!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
