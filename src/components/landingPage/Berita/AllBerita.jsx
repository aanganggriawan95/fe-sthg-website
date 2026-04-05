import { useEffect, useState } from "react";
import axios from "axios";
const AllBerita = () => {
  const [berita, setBerita] = useState([]);

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
  console.log(berita);
  return (
    <>
      <section className="bg-white text-black pt-32">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart your marketing
            </h2>

            <p className="mt-4 text-black-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {berita.map((item, key) => (
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
        </div>
      </section>
    </>
  );
};

export default AllBerita;
