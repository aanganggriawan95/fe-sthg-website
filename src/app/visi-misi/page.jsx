"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "@/items/jumbotron";

export default function VisiMisi() {
  const [data, setData] = useState([]);

  const dataTabs = [
    {
      label: "Visi",
      value: "html",
      desc: data[0]?.visi,
    },
    {
      label: "Misi",
      value: "react",
      desc: data[0]?.misi,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/api/cms/getVisiMisi",
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail visi dan misi:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Jumbotron judul="Visi dan Misi" />

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-16 py-12">
        <div className=" rounded-2xl  p-6 md:p-10">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
              {data[0]?.judul || "Visi dan Misi"}
            </h2>

            <div className="w-16 h-1 bg-red-600 mt-3 mb-5 rounded"></div>

            <p className="text-gray-600 leading-relaxed">
              Sekolah Tinggi Hukum Galunggung (STHG) Tasikmalaya memiliki visi
              dan misi yang jelas untuk menghasilkan lulusan yang berkompeten
              dan siap berkontribusi bagi masyarakat.
            </p>
          </div>

          {/* Grid Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Visi */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 transition duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">Visi</h3>

              <div className="w-12 h-1 bg-red-600 mt-2 mb-4 rounded"></div>

              <p className="text-gray-700 leading-relaxed">
                {data[0]?.visi || "Visi"}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 transition duration-300 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Misi</h3>

              <div className="w-12 h-1 bg-red-600 mt-2 mb-4 rounded"></div>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {data[0]?.misi || "Misi"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
