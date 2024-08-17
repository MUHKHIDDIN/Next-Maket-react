import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400/20 to-red-400/20 pt-[60px] pb-[40px]">
      <div className="container flex mb-[40px] ">
        <ul className="w-[188px] pl-[15px]">
          <li className="mb-[30px]">
            <a
              className="font-[653px] text-[25px] text-[#060606] tracking-[0.02em] mb-[20px]"
              href="#"
            >
              Hujjatlar
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Umumiy shartlar
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Ofertalar arxivi
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Nizom
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Guvohnoma
            </a>
          </li>
        </ul>
        <ul className="w-[188px] pl-[15px]">
          <li className="mb-[20px]">
            <a
              className="font-[653px] text-[25px] text-[#060606] tracking-[0.02em] mb-[20px]"
              href="#"
            >
              Servis
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Do’konlar
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Biz haqimizda
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Hamkorlik uchun
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Qaytarish
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Promokodlar
            </a>
          </li>
        </ul>
        <ul className="w-[220px] ">
          <li className="mb-[20px]">
            <a
              className="font-[653px] text-[25px] text-[#060606] tracking-[0.02em] mb-[20px]"
              href="#"
            >
              Mahsulotlar.katalogi
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Katalog 1
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Katalog 1
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              Katalog 2
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Katalog 2
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Katalog 3
            </a>
          </li>
          <li className="mb-[20px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Katalog 3
            </a>
          </li>
        </ul>
        <ul className="w-[400px] pl-[220px]">
          <li className="mb-[20px]">
            <a
              className="font-[653px] text-[25px] text-[#060606] tracking-[0.02em] mb-[20px]"
              href="#"
            >
              Axbarot xizmati
            </a>
          </li>
          <li className="mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[20px] "
              href="#"
            >
              contact.@nextstore.uz
            </a>
          </li>
          <li className="w-[170px] mb-[20px]">
            <a
              className="font-[539px] text-[16px] text-[#1E1E1E] mb-[30px] "
              href="#"
            >
              +998 97 712 96 96 +998 95 503 09 09
            </a>
          </li>
          <li className="w-[290px] mb-[30px]">
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston
            </a>
          </li>
          <li>
            <a className="font-[539px] text-[16px] text-[#1E1E1E]  " href="#">
              <img className="w-[200px]" src="footer-icon.png" alt="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container ">
        <img className="mb-[38px]" src="footer-icon2.png" alt="icon" />
        <div className="flex items-cente gap-[740px]">
          <a href="#">2022 Nextstore.com</a>
          <a href="#">Powered by </a>
        </div>
      </div>
    </div>
  );
};
