import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Feedback:
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} />
        </label>
        <br />
        <input type="submit" />
      </form>
      <h2>Preview</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Feedback:</strong> {formData.feedback}</p>
    </div>
  );
}

export default App;
