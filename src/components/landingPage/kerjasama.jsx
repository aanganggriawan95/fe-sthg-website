"use client";
import axios from "axios";
import JudulComponent from "@/items/judulPage";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Kerjasama = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getData = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/cms/getKerjasamaSTHG",
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);
  return (
    <div className="w-full bg-gray-50 px-4 md:px-16 py-14">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Kerjasama Kami
        </h1>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-3 rounded"></div>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div
          className="
        grid gap-8
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        justify-center
        items-center
      "
        >
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              {/* Logo bulat */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden transition duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <Image
                  width={1000}
                  height={1000}
                  unoptimized
                  src={`${item.foto_or_logo}?v=${item.id}`}
                  alt={item.judul}
                  className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Nama */}
              <span className="mt-4 text-sm font-medium text-gray-700 group-hover:text-red-600 transition">
                {item.judul}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kerjasama;
