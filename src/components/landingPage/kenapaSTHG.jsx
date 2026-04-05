"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const MengapaSTHG = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/api/cms/getKenapaSTHG",
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <section className="bg-[#01012e]">
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
          <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div className="max-w-prose text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Kenapa Memilih
                <strong className="text-red-600"> STHG </strong>
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                Sekolah Tinggi Hukum Garut (STHG) Tasikmalaya merupakan pilihan
                tepat bagi calon mahasiswa yang ingin mendalami ilmu hukum
                secara profesional dan berintegritas.
              </p>

              <div className="mt-4 flex gap-4 sm:mt-6">
                <a
                  className="inline-block rounded  bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
                  href="https://simaba.sthg.ac.id/"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>

            <Image
              src={`/gambar/newLogo.png`}
              width={1000}
              height={1000}
              alt={"Logo STHG"}
              viewBox="0 0 1024 768"
              className="mx-auto hidden max-w-md text-gray-900 md:block"
            ></Image>
          </div>
        </section>
      </section>
    </>
  );
};

export default MengapaSTHG;
