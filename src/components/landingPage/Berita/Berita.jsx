"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "@/components/selecton/cardBerita";
import { data } from "autoprefixer";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";

const BeritaSTHG = () => {
  const [berita, setBerita] = useState([]);
  const [beritaSet, setBeritaSet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getBerita`,
        );
        setBerita(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log("Berita", berita);

  return (
    <div className="w-full relative px-6 md:px-16 lg:px-28 mx-auto bg-white border-b pb-24">
      {/* Header */}
      <div className="text-center py-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
          Berita STHG
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Informasi terbaru seputar kegiatan dan perkembangan kampus
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-black mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {berita.length === 0 && <CardPlacehoderSkeleton />}

        {berita.slice(0, 3).map((item, key) => (
          <div
            key={item.id_berita}
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
                  {item.deskripsi}
                </p>
              </div>

              {/* Button */}
              <a
                href={`/detail-berita?slug=${item.slug}`}
                className="mt-4 inline-block text-sm font-medium text-red-600 hover:text-red-800 transition"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-14">
        <a
          href="/berita"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Berita Lainnya
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </div>
  );
};

export default BeritaSTHG;
