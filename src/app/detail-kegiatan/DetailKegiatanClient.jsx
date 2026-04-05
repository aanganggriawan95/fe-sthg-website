"use client";
import { IconButtonCustomStyles } from "@/components/landingPage/Berita/IconBTN";
import { useEffect, useState } from "react";
import axios from "axios";

import { useSearchParams } from "next/navigation";
import BeritaSTHG from "@/components/landingPage/Berita/Berita";

const DetailKegiatanClient = () => {
  const [detail, setDetail] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/detailKegiatan`,
          {
            id_kegiatan: id,
          },
        );

        setDetail(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetail();
  }, [id]);
  console.log(id);

  const formatDate = (dateString) => {
    return dateString.split("T")[0];
  };

  return (
    <>
      <div className="w-full py-24 md:py-40 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <IconButtonCustomStyles />

          {/* Breadcrumb */}
          <nav className="flex py-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2 text-sm text-gray-500">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-1 hover:text-indigo-600 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>

              <li>/</li>

              <li>
                <span className="hover:text-indigo-600 transition cursor-pointer">
                  Kegiatan
                </span>
              </li>

              <li>/</li>

              <li className="text-gray-800 font-medium">Detail Kegiatan</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
            {detail.judul}
          </h1>

          {/* Date */}
          <p className="mt-3 text-sm text-gray-500">
            {new Date(detail.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          {/* Image */}
          <div className="mt-8 overflow-hidden rounded-xl shadow-md group">
            <img
              src={detail.foto}
              alt={detail.judul}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="mt-8">
            <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-base">
              {detail.deskripsi_kegiatan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailKegiatanClient;
