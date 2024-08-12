import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 border-r border-gray-200">
        <div className="flex items-center justify-center py-6">
          <div className="text-3xl font-bold text-orange-500">xPay</div>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-red-500">My dashboard</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <span>Accounts</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <span>Mobile</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <span>Payments</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <span>Complaints</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-500">
              <span>Supports</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold">My finance dashboard</h1>
            <p className="text-gray-500">Welcome to xPay payment portal</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello Sami</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Sami"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow h-[40rem]">
            <div className="text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 text-center">My profile</h2>
              <div className="mt-4 space-y-2 text-center">
                <p>Sami Rahman</p>
                <p>+1 555-569-959-1236</p>
                <p>Sami.rahman2022@gmail.com</p>
                <div className="flex justify-center items-center space-x-2">
                  <span className="text-green-500">SMS alerts activation</span>
                  <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                </div>
              </div>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full mt-8 block mx-auto">
                Save
              </button>
            </div>
          </div>

          {/* xPay Accounts and My Bills Sections */}
          <div className="col-span-2 space-y-8">
            {/* xPay Accounts Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">My xPay accounts</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Active account</span>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-full">Block Account</button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Blocked account</span>
                  <button className="bg-green-500 text-white py-1 px-3 rounded-full">Unblock Account</button>
                </div>
              </div>
            </div>

            {/* My Bills Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">My bills</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Phone bill</span>
                  <span className="bg-red-500 text-white py-1 px-3 rounded-full">Not paid</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Internet bill</span>
                  <span className="bg-green-500 text-white py-1 px-3 rounded-full">Bill paid</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>House rent</span>
                  <span className="bg-green-500 text-white py-1 px-3 rounded-full">Bill paid</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Income tax</span>
                  <span className="bg-green-500 text-white py-1 px-3 rounded-full">Bill paid</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
