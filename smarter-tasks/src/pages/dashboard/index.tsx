// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard: React.FC = () => {
//   const userdata = localStorage.getItem('userData');
//   const navigate = useNavigate();

//   if (userdata === 'undefined' || userdata === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="p-8 border border-gray-300 rounded-sm bg-gray-100 shadow-lg">
//           <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Dashboard</h1>
//           <div className="mb-4 text-xl text-center text-red-800">
//             <h2>No user data</h2>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const userData = JSON.parse(userdata);

//   const handleLogout = () => {
//     localStorage.removeItem('userData');
//     localStorage.removeItem('authToken');
//     navigate('/signin');
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-200">
//       <div className="p-6 border border-gray-300 rounded-xl bg-white shadow-lg">
//         <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Dashboard</h1>
//         <button
//             id="logout-link"
//           onClick={handleLogout}
//           className="absolute px-4 py-2 font-semibold bg-red-600 rounded text-white right-4 top-4 hover:bg-red-700 focus:outline-none focus:shadow-outline-gray"
//         >
//           Logout
//         </button>

//         <div className="mb-4 text-xl text-center text-gray-800">
//           <h2 className="mb-2">Name: {userData?.name || 'Not available'}</h2>
//           <h1>Email: {userData?.email || 'Not available'}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userdata = localStorage.getItem('userData');
  const navigate = useNavigate();

  if (userdata === 'undefined' || userdata === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="p-8 border border-black rounded-sm">
          <h1 className="mb-6 text-3xl font-bold text-center text-black">Dashboard</h1>
          <div className="mb-4 text-xl text-center text-red-800">
            <h2>No user data</h2>
          </div>
        </div>
      </div>
    );
  }

  const userData = JSON.parse(userdata);
  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="p-8 border border-black rounded-xl bg-gray-100">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">Dashboard</h1>
        <button
          id="logout-link"
          onClick={handleLogout}
          className="absolute px-4 py-2 font-semibold bg-red-600 rounded text-white right-4 top-4 hover:bg-red-700 focus:outline-none focus:shadow-outline-gray"
        >
          Logout
        </button>
        <div className="mb-4 text-xl text-center text-gray-800">
          <h2 className="mb-2">Name: {userData?.name || 'Not available'}</h2>
          <h1>Email: {userData?.email || 'Not available'}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;