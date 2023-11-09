import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '/src/utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axiosWithAuth().get('/friends');
        setFriends(response.data); 
      } catch (error) {
        console.error('Error fetching friends:', error.response ? error.response.data : error.message);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="friends-list">
      <h1>FRIENDS LIST</h1>
      {friends.map(friend => (
        <div key={friend.id} className="friend">
          <p>{friend.name.toUpperCase()} - {friend.email.toLowerCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
