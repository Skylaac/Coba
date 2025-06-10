"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "Transfer Bank",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      alert("Mohon lengkapi semua data!");
      return;
    }
    alert("Pembayaran berhasil! Terima kasih telah berbelanja.");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#fff000] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border-2 border-[#d72323]">
        <h2 className="text-2xl font-bold mb-6 text-[#d72323]">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d72323]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Alamat Pengiriman</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d72323]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d72323]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Metode Pembayaran</label>
            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d72323]"
            >
              <option>Transfer Bank</option>
              <option>OVO</option>
              <option>GoPay</option>
              <option>ShopeePay</option>
              <option>COD (Bayar di Tempat)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#d72323] text-white py-2 rounded-lg hover:brightness-110"
          >
            Bayar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
