import React, { useState } from "react";
import "./user.css";

const User = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Successful");
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setClicked(true);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      {!clicked && (
        <div className="user-login">
          <form className="user-form" onSubmit={handleFormSubmit}>
            <h1>Signup</h1>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input type="submit" value="Signup" />
          </form>
        </div>
      )}
    </div>
  );
};

export default User;
