import React, { useEffect, useState } from 'react';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [localUser, setLocalUser] = useState(null);

  // Fetch user from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user_details');
    if (storedUser) {
      setLocalUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetch users from API if not available in local storage
  useEffect(() => {
    if (!localUser) {
      const fetchUsers = async () => {
        try {
          const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // Include authorization token if needed
            },
          });

          const data = await response.json();
          if (data.users) {
            setUsers(data.users);
          } else {
            setUsers([]);
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          setUsers([]);
        }
      };

      fetchUsers();
    }
  }, [localUser]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render the user from localStorage if it exists */}
        {localUser ? (
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg text-pink-500 font-semibold">
              {localUser.first_name} {localUser.last_name}
            </h2>
            <p className="text-gray-600">Email: {localUser.email}</p>
            <p className="text-orange-600">Phone: {localUser.phone}</p>
          </div>
        ) : users.length > 0 ? (
          // Render users fetched from API
          users.map((user) => (
            <div key={user.id} className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AllUsers;

