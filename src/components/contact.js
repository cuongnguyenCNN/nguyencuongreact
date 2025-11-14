"use client";

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.message)
      return "Please fill in all fields.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email format.";
    const phoneRegex = /^(0[0-9]{9}|84[0-9]{9})$/;
    if (!phoneRegex.test(form.phone)) return "Invalid phone number.";
    return "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setErrors(err);
    setLoading(true);
    setErrors("");
    setSuccess("");
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzcF4SdctYnjbp6t1reTYDPypHkVgEELfCpe4rwADf9A_D3mGJ3VFz3r7bMYkG194-s/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else setErrors("❌ Lỗi gửi form: ");
    } catch (err) {
      setErrors("Something went wrong. Try again.");
    }
    setForm({ name: "", phone: "", email: "", message: "" });
    setLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit} className="text-start">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your requirements..."
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      {errors && (
        <p className="text-red-500 text-sm" style={{ color: "red" }}>
          {errors}
        </p>
      )}
      {success && <p className="mt-3 text-success">{success}</p>}
      <div className="text-center">
        <Button variant="primary" type="submit" className="px-4">
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </Form>
  );
}
