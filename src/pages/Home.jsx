import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/ProductSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 1200);
}, []);

  const products = [
    { id: 1, name: "Campa Cola 200ml", price: 40, image: "/1.jpg" },
    { id: 2, name: "Campa Lemon 200ml", price: 35, image: "/2.jpg" },
    { id: 3, name: "Campa Orange 200ml", price: 35, image: "/1.jpg" },
    { id: 4, name: "Campa Cola 500ml", price: 60, image: "/2.jpg" },
  ];

  return (
    <>
      {/* ================= SLIDER ================= */}
      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="w-full"
        >
          <SwiperSlide>
            <div className="relative w-full">
             
              <img
                src="/1.jpg"
                alt="Banner"
                loading="lazy"
                className="w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white animate-fade-up">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                    NAYE INDIA KA <br />
                    <span className="text-yellow-300">
                      APNA THANDA
                    </span>
                  </h1>

                  <p className="mt-4 max-w-md text-white/90">
                    Trusted distributor of quality beverages.
                  </p>

                 
                  <Link
                    to="/products"
                    className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full">
              <img
                src="/2.jpg"
                alt="Banner"
                loading="lazy"
                className="w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white animate-fade-up">
                  <h1 className="text-3xl md:text-5xl font-extrabold">
                    GRAB. REFRESH. GO.
                  </h1>

                  <p className="mt-4 max-w-md">
                    Refresh with great Indian taste.
                  </p>

                  <Link
                    to="/products"
                    className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* <h2 className="text-3xl font-bold mb-8">
          Featured Drinks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {loading
    ? Array.from({ length: 4 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))
    : products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
</div>
      </section>
    </>
  );
}
