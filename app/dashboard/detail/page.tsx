"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ProductDetailPage = () => {
  const router = useRouter();

  const product = {
    name: "Chicken Pen",
    price: "Rp 86.475",
    image: "/images/chicken-pen.png",
    description:
      "Chicken Pen yang lucu yang akan membantu Anda melewati pekerjaan atau hari sekolah Anda! Pena ini akan menjadi teman Anda dan berteriak bersama Anda.",
    details: "Termasuk satu pena ayam yang berteriak.",
  };

  return (
    <div className="min-h-screen bg-[#fbe122] text-black font-sans">

      <div className="bg-[#d72323] text-white px-6 py-4 flex justify-between items-center rounded-b-lg shadow-md">
        <div className="font-bold text-lg">LOLMART</div>
        <div className="space-x-6 text-sm font-semibold">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">CATEGORY</a>
          <a href="#" className="hover:underline">ABOUT</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col items-center">
          <div className="w-72 h-72 border-4 border-[#d72323] rounded-lg shadow-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-full p-2"
            />
          </div>
          <div className="text-xs text-gray-700 mt-2">Gambar produk</div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm text-[#d72323] font-semibold hover:underline"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Kembali
          </button>

          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-bold text-[#d72323]">{product.price}</p>
          <p className="text-sm text-gray-700">
            Pengiriman dihitung saat pembayaran.
          </p>

          <a href="#" className="text-blue-700 underline">
            Lihat informasi toko
          </a>

          <div className="mt-4 bg-white p-4 rounded-lg border border-[#d72323] shadow-sm">
            <h2 className="text-md font-semibold text-[#d72323] mb-2">Ingin beli lewat Admin?</h2>
            <p className="text-sm text-gray-800">
              Hubungi kami melalui WhatsApp atau DM Instagram untuk pemesanan langsung:
            </p>
            <ul className="text-sm mt-2 space-y-1 text-blue-800">
              <li>📱 WhatsApp: <a href="https://wa.me/6281267672379" className="underline">0812-6767-2379</a></li>
              <li>📸 Instagram: <a href="https://instagram.com/lolmartidn" className="underline">@lolmartidn</a></li>
            </ul>
          </div>

          <p className="mt-6 text-sm font-medium text-gray-900">{product.description}</p>
          <p className="text-sm">{product.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
