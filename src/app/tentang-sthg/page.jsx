"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "@/items/jumbotron";
import Sambutan from "@/components/landingPage/Sambutan";
import Image from "next/image";

const Sejarah = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/api/cms/getSejarah",
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail sejarah:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Hero / Jumbotron */}
      <Jumbotron judul="Tentang STHG" />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <nav
          className="max-w-7xl mx-auto px-4 md:px-16 py-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li className="flex items-center">
              <a href="/" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>

            <li>/</li>

            <li>
              <span className="text-gray-400">Profile</span>
            </li>

            <li>/</li>

            <li>
              <span className="text-gray-800 font-medium">Tentang</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Sambutan */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 py-10">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <Sambutan />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 pb-16">
        <div className="space-y-12">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-md group">
                <Image
                  src={item.foto}
                  width={1000}
                  height={500}
                  alt={item.judul}
                  className="w-full h-64 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  {item.judul}
                </h2>

                {/* Accent line */}
                <div className="w-16 h-1 bg-blue-600 mt-3 mb-5 rounded"></div>

                <p className="text-gray-600 leading-relaxed text-justify">
                  {item.deskripsi_sejarah}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sejarah;
