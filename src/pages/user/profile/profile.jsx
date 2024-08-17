import React from "react";

export const Profile = () => {
  return (
    <div className="  mx-auto mt-10 ml-[300px] ">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profil</h2>
      <div className="flex items-center mb-6">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"
          alt="Avatar"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">Foydalanuvchi ismi</h3>
          <p className="text-gray-600">foydalanuvchi@misol.com</p>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Shaxsiy ma'lumotlar</h4>
        <p className="text-gray-800 mb-1"><strong>Ism:</strong> Foydalanuvchi ismi</p>
        <p className="text-gray-800 mb-1"><strong>Email:</strong> foydalanuvchi@misol.com</p>
        <p className="text-gray-800 mb-1"><strong>Telefon:</strong> +998 90 123 45 67</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Sozlamalar</h4>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-600">
          Profilni tahrirlash
        </button>
      </div>
    </div>
  </div>
  );
};
