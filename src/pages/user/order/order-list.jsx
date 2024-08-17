import React from 'react';

export const OrderList = () => {
  return (
    <div className=" mx-auto mt-10 ml-[150px]">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Buyurtmalar ro'yxati</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Buyurtma ID</th>
                <th className="py-2 px-4 border-b">Sana</th>
                <th className="py-2 px-4 border-b">Jami</th>
                <th className="py-2 px-4 border-b">Holati</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">2024-07-01</td>
                <td className="py-2 px-4 border-b">$150.00</td>
                <td className="py-2 px-4 border-b">Yetkazildi</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">2024-07-05</td>
                <td className="py-2 px-4 border-b">$85.00</td>
                <td className="py-2 px-4 border-b">Jarayonda</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">3</td>
                <td className="py-2 px-4 border-b">2024-07-10</td>
                <td className="py-2 px-4 border-b">$60.00</td>
                <td className="py-2 px-4 border-b">Bekor qilingan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
