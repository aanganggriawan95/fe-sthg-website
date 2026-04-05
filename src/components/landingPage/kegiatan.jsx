"use client";
import JudulComponent from "@/items/judulPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "@/items/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "../selecton/cardBerita";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";

export function KegiatanSTHG() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getKegiatan`,
        );
        setKegiatan(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("Kegiatan", kegiatan);
  return (
    <div className="w-full px-6 md:px-16 lg:px-28 border-b border-gray-200 pb-24">
      {/* Title */}
      <div className="flex justify-center w-full items-center py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Kegiatan STHG
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Kegiatan Sekolah Tinggi Hukum Galunggung
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-black mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kegiatan.slice(0, 3).map((item) => (
          <div
            key={item.id_kegiatan}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.foto}
                alt={item.judul}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {item.judul}
                </h3>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {item.deskripsi_kegiatan}
                </p>
              </div>

              {/* Button */}
              <a
                href={`/detail-kegiatan?id=${item.id_kegiatan}`}
                className="mt-4 inline-block text-sm font-medium text-red-600 hover:text-red-800 transition"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button bawah */}

      <div className="flex justify-center mt-14">
        <a
          href="/kegiatan"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Kegiatan Lainnya
          <ChevronRight
            size={18}
            className="w-4 h-4 group-hover:translate-x-1 transition"
          />
        </a>
      </div>
    </div>
  );
}
