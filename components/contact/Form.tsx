"use client";

import React from "react";

export type ContactFormData = {
  email: string;
  subject: string;
  message: string;
};

interface Props {
  onFormSubmit: (data: ContactFormData) => void;
}

export function ContactForm(props: Props) {
  const onFormSubmit = props.onFormSubmit;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data: ContactFormData = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    onFormSubmit(data);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Email
        </span>
        <input
          type="email"
          name="email"
          className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-gray-100 focus:ring-0
                  "
          placeholder=""
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-gray-100 focus:ring-0
                  "
          placeholder=""
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Message <span className="text-xs">(Max. 500 characters)</span>
        </span>
        <textarea
          rows={8}
          name="message"
          className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-gray-100 focus:ring-0
                  "
          placeholder=""
          maxLength={500}
          required
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white text-sm py-3 w-full rounded-md mt-4"
      >
        Submit
      </button>
    </form>
  );
}
