import React from "react";

export const ChangeAcount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");

    if (!email || !oldPassword || !newPassword) {
      alert("Please fill in all fields!");
      return;
    }

    console.log("Form submitted with data:", email, oldPassword, newPassword);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[50px] w-[500px] ml-[200px] border-[5px] border-[#df0d0d] hover:border-blue-500 p-[100px] rounded-[10px]"
      >
        <input
          name="email"
          placeholder="Email"
          className="border border-gray-300 py-3 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out hover:border-blue-500 hover:bg-gray-100 focus:bg-white mb-[20px] "
          type="email"
        />
        <input
          name="oldPassword"
          placeholder="Eski parol"
          className="border border-gray-300 py-3 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out hover:border-blue-500 hover:bg-gray-100 focus:bg-white mb-[20px]"
          type="password"
        />
        <input
          name="newPassword"
          placeholder="Yangi parol"
          className="border border-gray-300 py-3 px-4 rounded-lg pl-5 pr-16 text-base outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out hover:border-blue-500 hover:bg-gray-100 focus:bg-white mb-[20px]"
          type="password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};
