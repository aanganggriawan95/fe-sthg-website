"use client";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import useLanguageStore from "@/store/useLanguageStore";

export function Pengmuman() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  const { language } = useLanguageStore();

  const texts = {
    id: {
      greeting: "Halo, selamat datang di aplikasi kami!",
      description: "Silakan pilih bahasa yang Anda inginkan.",
    },
    en: {
      greeting: "Hello, welcome to our application!",
      description: "Please select the language you prefer.",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/cms/getPengumuman`);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
          Pengumuman Informasi
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Informasi terbaru seputar kegiatan dan perkembangan kampus
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-black mx-auto mt-4 rounded-full"></div>
      </div>

      <Carousel
        className="h-[400px] bg-yellow-400 rounded-none md:h-[550px]  overflow-hidden"
        autoplay
        loop
        interval={4000}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-neutral-900 to-red-700 text-white p-2 rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-neutral-900 to-red-700 text-white p-2 rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        )}
      >
        {data.map((item) => (
          <div className="px-0 md:px-18 lg:px-28">
            <section
              key={item.id}
              className="relative   h-[400px] md:h-[550px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${item.foto}?v=${item.id})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}

              {/* Content */}
              {/* <div className="relative z-10 text-center text-white px-6 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold">{item.judul}</h2>

              <p className="mt-3 text-sm md:text-base text-gray-200 line-clamp-2">
                {item.deskripsi}
              </p>

              {item.link && (
                <a
                  href={`https://${item.link}`}
                  target="_blank"
                  className="inline-block mt-5 px-6 py-2 rounded-full bg-red-600 hover:bg-black transition text-sm font-medium"
                >
                  Selengkapnya →
                </a>
              )}
            </div> */}
            </section>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
