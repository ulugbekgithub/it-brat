import { useState } from 'react';
import { FaBriefcase, FaPen } from 'react-icons/fa';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-5">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-center text-xl font-semibold mb-6 text-black">
          Пожалуйста, выберите свою роль
        </h2>
        <div className="flex justify-around mb-6">
          <button
            onClick={() => handleRoleSelect('employer')}
            className={`flex flex-col items-center p-4 rounded-lg transition ${
              selectedRole === 'employer' ? 'bg-red-600 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <FaBriefcase size={40} />
            <span className="mt-2">Работодатель</span>
          </button>
          <button
            onClick={() => handleRoleSelect('candidate')}
            className={`flex flex-col items-center p-4 rounded-lg transition ${
              selectedRole === 'candidate' ? 'bg-red-600 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <FaPen size={40} />
            <span className="mt-2">Соискатель</span>
          </button>
        </div>
        <button
          className={`w-full py-2 rounded-lg text-white transition ${
            selectedRole ? 'bg-red-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedRole}
        >
          Продолжать
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
