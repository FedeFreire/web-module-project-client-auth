import React, { useState } from 'react';
import { axiosWithAuth } from '/src/utils/axiosWithAuth';

const AddFriend = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axiosWithAuth().post('/friends', formData);
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding friend:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="add-friend-form">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">FRIEND NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">FRIEND EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddFriend;
