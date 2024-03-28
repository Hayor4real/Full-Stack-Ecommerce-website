import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./OrderForm.css"; // Create a separate CSS file for styling

const OrderForm = () => {
  const { resetCart } = useContext(ShopContext);
  const navigate = useNavigate(); // useNavigate hook instead of useHistory
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    fullAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can add additional validation here if needed

    // Display success message
    alert(
      "Your order has been successfully registered. It will be delivered in 3 to 4 working days."
    );

    // Clear the form data
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      fullAddress: "",
      city: "",
      state: "",
      zipCode: "",
    });
    resetCart();
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Basic Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="fullAddress">Full Address</label>
        <input
          type="text"
          id="fullAddress"
          name="fullAddress"
          value={formData.fullAddress}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
