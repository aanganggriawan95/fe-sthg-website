"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import { CardPlacehoderSkeleton } from "../selecton/cardBerita";
const CardSwiper = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/api/cms/getFasilitas",
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.length === 0 && <CardPlacehoderSkeleton />}
      {data.map((card) => (
        <div
          key={card.id}
          className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-56">
            <img
              src={card.foto}
              alt={card.nama}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition duration-300">
              {card.nama}
            </h3>

            <p className="text-gray-500 text-sm mt-2 line-clamp-3">
              {card.deskripsi}
            </p>

            {/* Spacer biar tinggi rata */}
            <div className="mt-auto pt-4">
              <p className="text-sm text-red-600 font-medium ">
                Fasilitas STHG
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSwiper;
