"use client";

export function ContactForm() {
  console.log("test");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Clicked!");
  };
  return (
    <form className="max-w-md mx-auto" onSubmit={handleOnSubmit}>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Email
        </span>
        <input
          type="email"
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
        />
      </label>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Subject
        </span>
        <input
          type="text"
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
        />
      </label>
      <label className="block">
        <span className="text-gray-700 text-sm font-medium uppercase">
          Message <span className="text-xs">(Max. 500 characters)</span>
        </span>
        <textarea
          rows={10}
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
