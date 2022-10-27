"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import { ContactForm, ContactFormData } from "../../components/contact/Form";
import { successToast, errorToast } from "../../components/common/Toasts";

export default function ContactPage() {
  const onFormSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        errorToast("Error sending message..");
      } else {
        successToast("Message sent!");
      }
    } catch (error) {
      errorToast("Error sending message..");
    }
  };

  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <h1 className="font-bold text-4xl">Contact</h1>
      <div className="pt-8">
        <ContactForm onFormSubmit={onFormSubmit} />
      </div>
      <ToastContainer />
    </div>
  );
}
