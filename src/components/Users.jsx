import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../utils/api';
import UserCard from './UserCard';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers(currentPage);
      setUsers(data.data);
      setTotalPages(data.total_pages);
    };
    getUsers();
  }, [currentPage]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center bg-gray-100 p-6 rounded-md shadow-md">
          User Directory
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
          ))}
        </div>
        <div className="mt-8">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default Users;