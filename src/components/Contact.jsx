import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
    onSubmit: (values) => {
      //TODO: send data to server
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(20, "Name must be 20 characters")
        .required("Name is required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),

      message: yup.string().required("Message is required"),
    }),
  });

  return (
    <>
      <h2 className="sous-titre">
        <span className="line">Contact Us</span>
      </h2>
      <div className="contact" id="contact">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">
              {formik.errors.name ? formik.errors.name : "Name"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Your Email"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="service">
              {formik.touched.service && formik.errors.service
                ? formik.errors.service
                : "What are you interested in?"}
            </label>
            <select
              id="service"
              name="service"
              value={formik.values.service}
              onChange={formik.handleChange}
            >
              <option value="">Select something</option>
              <option value="digital">Digital Consulting</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="event">Event Management</option>
              <option value="search">Search Marketing</option>
              <option value="content-creation">Content Creation</option>
              <option value="branding">Branding</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">
              {formik.touched.message && formik.errors.message
                ? formik.errors.message
                : "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
