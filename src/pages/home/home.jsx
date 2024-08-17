import React from "react";
import { ProductsData } from "../../data/product";
import { CategoriesData } from "../../data/categories1";
import { Categoris } from "../../components/categories";
import { Link } from "react-router-dom";
import {Bunnor} from "../../components/bunnor"
import { BunnorBotom } from "../../components/bunnor-botom";
import {Brend} from "../../components/brend"
import {Shop} from "../../components/shop"

export const Home = () => {
  return (
    <div>
      <section className="container pb-[40px] mx-[auto] pt-[60px]">
        <Bunnor />
      </section>
      <section className="container pb-[60px] mx-[auto] pt-[60px]">
        <div className="flex justify-between mb-[25px]">
          {CategoriesData.map((item) => (
            <Categoris key={item.id} title={item.title} Img={item.Img} />
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px]">
          Batafsil
        </p>
      </section>
      <section className="container pb-[40px] mx-[auto]">
        <h1 className="font-[500px] text-[28px] mb-[18px]">
          Eng ko’p sotilgan
        </h1>
        <div className=" grid grid-cols-5 gap-[30px] ">
          {ProductsData.map((item) => (
            <Link
              className=" bg-white rounded-[10px] pl-[15px] pr-[15px] w-[220px] pb-[30px] "
              to={`/product/product-detail/${item.id}`}
              key={item.id}
            >
              <img src={item.img} alt="img" />
              <p className="font-[500px] text-[18px] text-[#317AF5] mb-[7px]">
                {item.price}
              </p>
              <p className="font-[539px] text-[14px] mb-[15px]">{item.title}</p>
              <p className="font-[400px] text-[14px]  text-[#6C757D] mb-[14px]">
                {item.text}
              </p>
              <div className="flex items-center">
                <button className="pt-[10px] w-[130px]  pb-[10px] pl-[10px] pr-[10px] rounded-[10px] text-center bg-[#0D63F3] text-white">
                  {item.button}
                </button>
              </div>
            </Link>
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko’proq ko’rish
        </p>
      </section>
      <section className="container pb-[60px] "> 
        <BunnorBotom />
      </section>
      <section className="container pb-[50px] mx-[auto]">
        <h1 className="font-[500px] text-[28px] mb-[18px]">
        Eng ommabop
        </h1>
        <div className=" grid grid-cols-5 gap-[30px] ">
          {ProductsData.map((item) => (
            <Link
              className=" bg-white rounded-[10px] pl-[15px] pr-[15px] w-[220px] pb-[30px] "
              to={`/product/product-detail/${item.id}`}
              key={item.id}
            >
              <img src={item.img} alt="img" />
              <p className="font-[500px] text-[18px] text-[#317AF5] mb-[7px]">
                {item.price}
              </p>
              <p className="font-[539px] text-[14px] mb-[15px]">{item.title}</p>
              <p className="font-[400px] text-[14px]  text-[#6C757D] mb-[14px]">
                {item.text}
              </p>
              <div className="flex items-center">
                <button className="pt-[10px] w-[130px]  pb-[10px] pl-[10px] pr-[10px] rounded-[10px] text-center bg-[#0D63F3] text-white">
                  {item.button}
                </button>
              </div>
            </Link>
          ))}
        </div>
        <p className=" text-center font-[500px] text-[18px] pt-[14px] pb-[14px] bg-white mb-[54px] cursor-pointer rounded-[10px] mt-[37px]">
          Ko’proq ko’rish
        </p>
      </section>
       <section className="container pb-[60px]">
        <Brend />
       </section>
       <section className="container pb-[60px] "> 
        <BunnorBotom />
      </section>
      <section className="container pb-[70px] ">
        <Shop />
      </section>
    </div>
  );
};
