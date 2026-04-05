"use client";
import { useEffect, useState } from "react";
import TabsAkreditasi from "./panel";
import Jumbotron from "@/items/jumbotron";
import axios from "axios";
const Akreditasi = () => {
  const [akreditasiS1Hukum, setAkreditasiS1Hukum] = useState([]);
  const [akreditasiS2Hukum, setAkreditasiS2Hukum] = useState([]);
  const [akreditasiKampus, setAkreditasiKampus] = useState([]);
  useEffect(() => {
    console.log("🔄 useEffect dijalankan...");
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getAkreditasiS1`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiS1Hukum(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    const fetchDataKampus = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getAkreditasiKampus`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiKampus(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    const fetchDataS2 = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getAkreditasiS2`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiS2Hukum(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchDataS2();
    fetchDataKampus();
    fetchData();
  }, []);
  return (
    <div className="font-sans bg-gray-50 min-h-screen pb-16">
      {/* Hero */}
      <Jumbotron judul="Akreditasi" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b rounded-xl mt-6">
          <nav className="px-4 py-4 text-sm text-gray-600">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-400">Profile</li>
              <li>/</li>
              <li className="text-gray-800 font-medium">Akreditasi</li>
            </ol>
          </nav>
        </div>

        {/* Deskripsi */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mt-8">
          <p className="text-gray-600 leading-relaxed text-justify">
            Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) merupakan
            lembaga resmi yang bertugas menilai mutu pendidikan tinggi di
            Indonesia. Melalui proses akreditasi, BAN-PT memastikan bahwa setiap
            program studi memenuhi standar kualitas yang ditetapkan sehingga
            masyarakat dapat memperoleh informasi yang akurat dan terpercaya
            mengenai mutu pendidikan.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              {/* Header */}
              <thead className="bg-gray-900 text-white text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Nama</th>
                  <th className="px-6 py-4">Akreditasi</th>
                  <th className="px-6 py-4">Dokumen</th>
                  <th className="px-6 py-4">Nomor SK</th>
                  <th className="px-6 py-4">Masa Berlaku</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y">
                {[
                  ...akreditasiKampus,
                  ...akreditasiS1Hukum,
                  ...akreditasiS2Hukum,
                ].map((akreditasi, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {akreditasi.institusi}
                    </td>

                    {/* Badge Akreditasi */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                        {akreditasi.akreditasi}
                      </span>
                    </td>

                    {/* Link */}
                    <td className="px-6 py-4">
                      <a
                        href={akreditasi.file}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Lihat
                      </a>
                    </td>

                    <td className="px-6 py-4">
                      {akreditasi.nomor_sk || akreditasi.no_sk}
                    </td>

                    <td className="px-6 py-4">{akreditasi.masa_berlaku}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akreditasi;
