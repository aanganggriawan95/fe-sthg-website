"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10  bg-[#000] border-t-2 pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="mx-4 flex text-white flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8  flex items-center gap-2">
                  <img
                    src="/gambar/newLogo.png"
                    alt="logo"
                    className="w-[70px] dark:hidden"
                  />
                  <span className="text-4xl font-bold text-black">STHG</span>
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Sekolah Tinggi Hukum Galunggung
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/sthgofficial"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/sth_galunggung"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@sth_galunggung"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 00-2.11 2.12A31.05 31.05 0 000 12a31.05 31.05 0 00.502 5.814 2.997 2.997 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 002.11-2.12A31.05 31.05 0 0024 12a31.05 31.05 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@sth_galunggung"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.75 2h2.25a5.25 5.25 0 005.25 5.25v2.25a7.47 7.47 0 01-4.5-1.5v7.125a6.375 6.375 0 11-6.375-6.375c.375 0 .75.03 1.125.09v2.31a4.125 4.125 0 10 3.75 4.11V2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white dark:text-white">
                  Quick Link
                </h2>
                <ul>
                  <li>
                    <Link
                      href="https://simaba.sthg.ac.id/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      PMB
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pustaka.sthg.ac.id/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Perpustakaan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://siakadbjbs.sthg.ac.id/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Siakad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jurnal.sthg.ac.id/index.php/jurnal/index"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      E-jurnal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white dark:text-white">
                  Menu
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/visi-misi"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Visi Misi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tentang-sthg"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Tentang STHG
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fasilitas"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Fasilitas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/akreditasi"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-red-600 dark:text-body-color-dark dark:hover:text-red-600"
                    >
                      Akreditasi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color text-white dark:text-white">
              &copy; Copyright 2023, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
