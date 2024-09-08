import { useState } from "react";
import emailjs from "emailjs-com";

const ContactFormPopup = ({ closePopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object that maps formData to EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_1ll2h5c", // Replace with your EmailJS service ID
        "template_5e3xk2j", // Replace with your EmailJS template ID
        templateParams, // Pass templateParams instead of formData
        "w3WXT4m2W4Ppzd7k4" // Replace with your EmailJS user ID
      )
      .then((response) => {
        alert("Email successfully sent!");
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      });

    closePopup(); // Close the popup after form submission
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 lg:p-16 w-full max-w-md relative mx-4 sm:mx-auto">
          {/* X Button to close the popup */}
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            &#x2715; {/* X symbol */}
          </button>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full border-2 px-4 py-2 bg-accent text-white rounded-2xl hover:bg-white hover:border-accent hover:text-accent font-semibold transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactFormPopup;
