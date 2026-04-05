"use client";
import { IconButtonCustomStyles } from "@/components/landingPage/Berita/IconBTN";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";

import { useSearchParams } from "next/navigation";

const DetailBeritaClient = () => {
  const [detail, setDetail] = useState([]);
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  console.log(slug);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/detailBerita/${slug}`,
        );
        setDetail(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetail();
  }, []);
  console.log(detail);

  return (
    <>
      <Suspense
        fallback={
          <div className="px-6 md:px-16 py-24 animate-pulse">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="h-4 w-40 bg-gray-200 rounded"></div>
              <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="w-full h-64 bg-gray-200 rounded-xl"></div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        }
      >
        <div className="w-full bg-gray-50 py-24 md:py-40 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <IconButtonCustomStyles />

            {/* Breadcrumb */}
            <nav className="flex py-6 text-sm text-gray-500">
              <a href="/" className="hover:text-red-600 transition">
                Home
              </a>
              <span className="mx-2">/</span>
              <a href="/berita" className="hover:text-red-600 transition">
                Berita
              </a>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Detail</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {detail.judul}
            </h1>

            {/* Meta */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span>
                {new Date(detail.tanggal_berita).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Image */}
            <div className="mt-8 overflow-hidden rounded-xl shadow-md group">
              <img
                src={detail.foto}
                alt={detail.judul}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-base">
                {detail.deskripsi}
              </p>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default DetailBeritaClient;
