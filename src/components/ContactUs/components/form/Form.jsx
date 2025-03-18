import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.phone.trim() || !/^[0-9]{10,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const emailSubject = `New Message from ${formData.fullName}`;
      const emailContent = `
        Full Name: ${formData.fullName}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Message: ${formData.message}
      `;

      const mailtoLink = `mailto:info@mhceg.com?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailContent)}`;

      window.location.href = mailtoLink;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center mt-10">
        <div className="w-full max-w-sm min-w-[80%]  my-2">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Full Name"
          />
          {errors.fullName && (
            <p className="text-red-500 ps-1">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[80%] my-2">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500 ps-1">{errors.phone}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[80%] my-2">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 ps-1">{errors.email}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[80%]">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white my-2 placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            rows={8}
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 ps-1">{errors.message}</p>
          )}
          <button
            type="submit"
            className="px-5 py-2 bg-white text-mainColor rounded-lg me-auto"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
