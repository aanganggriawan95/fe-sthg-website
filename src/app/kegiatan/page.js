"use client";
import { CardPlacehoderSkeleton } from "@/components/selecton/cardBerita";
import Jumbotron from "@/items/jumbotron";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Berita = () => {
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

  return (
    <>
      <Jumbotron judul="Berita STHG" />
      <div className="flex justify-center w-full items-center py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Kegiatan Sekolah Tinggi Hukum Galunggung
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            All Kegitan STHG
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-black mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
      <div className="w-full relative  py-10 px-4 md:px-8 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-16">
        {kegiatan.length === 0 && <CardPlacehoderSkeleton />}

        {kegiatan.map((item, key) => (
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
    </>
  );
};

export default Berita;
