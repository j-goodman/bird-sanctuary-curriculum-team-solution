import { useState } from "react";
export default function Checkout({ completePurchase }) {
  const [checkoutInfo, setCheckoutInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setCheckoutInfo({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
    completePurchase();
  };
  const handleTextChange = (event) => {
    setCheckoutInfo({
      ...checkoutInfo,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="Checkout">
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={handleTextChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={handleTextChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleTextChange} />
        <label htmlFor="zip">Zip Code</label>
        <input type="number" id="zip" onChange={handleTextChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
