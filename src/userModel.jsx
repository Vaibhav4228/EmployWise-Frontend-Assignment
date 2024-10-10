import React, { useState } from 'react';
import { updateUser } from './utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserEditModal({ user, onClose, onUpdate }) {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      email,
    };

   try {
      await updateUser(user.id, updatedData);
      toast.success("user updated successfully!",{
        position:"top-center"
      })
      onUpdate(user.id, updatedData);  
      onClose(); 
    } catch (error) {
      toast.error('Error updating the user.');
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md">
      <div className="bg-white p-10 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out scale-100 hover:scale-105 max-w-lg w-full">
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Edit User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-150 ease-in-out">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserEditModal;
