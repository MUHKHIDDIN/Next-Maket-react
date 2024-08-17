import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex gap-[60px]">
        <div className="lg:w-1/2">
          <img
            src="https://www.click4mac.com/images2/blog/2019-02-25_20:08:35_8312.png"
            alt="Product"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="flex mt-2 space-x-2">
            <img
              src="https://images.uzum.uz/clc3jfl6sfhgee0m73dg/original.jpg"
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg shadow-sm border border-gray-200"
            />
            <img
              src="https://images.uzum.uz/cq2g7eb6eisq2rkeg8l0/original.jpg"
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg shadow-sm border border-gray-200"
            />
            <img
              src="https://images.uzum.uz/cpuqi3gsarnfdo99l710/original.jpg"
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg shadow-sm border border-gray-200"
            />
            <img
              src="https://images.uzum.uz/cigimfv5d7kom1tj1u00/original.jpg"
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg shadow-sm border border-gray-200"
            />
          </div>
        </div>
        <div className="w-[900px]">
          <h1 className="text-3xl font-bold">
            Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB
          </h1>
          <div className="mt-4">
            <label className="block mb-2 text-gray-700">Rang:</label>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded focus:outline-none border-2 border-transparent shadow-sm bg-[#984242]" />
              <button className="w-8 h-8 rounded focus:outline-none border-2 border-transparent shadow-sm bg-pink-300" />
              <button className="w-8 h-8 rounded focus:outline-none border-2 border-transparent shadow-sm bg-blue-300" />
              <button className="w-8 h-8 rounded focus:outline-none border-2 border-transparent shadow-sm bg-black" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-[#5c5a5a]">
              16 114 285 so'm
            </span>{" "}
            <span className="text-lg text-[20px]">/ dona</span>
            <p className="text-sm text-gray-600 mt-1">6 434 000 so'm x 3 oy</p>
          </div>

          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Savatchaga olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
