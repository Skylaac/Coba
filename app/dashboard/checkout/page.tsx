"use client";

import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [shippingCost] = useState(15000); // example flat shipping fee
  const [taxRate] = useState(0.05);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const formatRupiah = (number: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;

  return (
    <main className="min-h-screen bg-white text-gray-700 font-sans py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-900">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Keranjang kosong</p>
        ) : (
          <section className="flex flex-col md:flex-row md:space-x-12">
            {/* Cart Items List */}
            <div className="md:flex-1 space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Produk Anda</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-lg flex-shrink-0"
                    />
                    <div className="flex flex-col flex-grow min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Harga: <span className="font-medium">{formatRupiah(item.price)}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Jumlah: <span className="font-medium">{item.quantity}</span>
                      </p>
                      <p className="mt-1 font-semibold text-[#d72323] text-lg">
                        {formatRupiah(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Summary */}
            <div className="md:w-80 mt-10 md:mt-0 bg-gray-50 p-6 rounded-2xl shadow-md self-start">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Rincian Pembayaran</h2>
              <div className="space-y-4 text-gray-800">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>Pajak ({Math.round(taxRate * 100)}%)</span>
                  <span>{formatRupiah(tax)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>Ongkos Kirim</span>
                  <span>{formatRupiah(shippingCost)}</span>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between text-xl font-extrabold text-gray-900">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="paymentMethod"
                  className="block mb-2 font-medium text-gray-900"
                >
                  Metode Pembayaran
                </label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d72323] focus:border-[#d72323]"
                >
                  <option value="credit_card">Kartu Kredit</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Transfer Bank</option>
                  <option value="ovo">OVO</option>
                  <option value="dana">Dana</option>
                  <option value="cash_on_delivery">Bayar di Tempat</option>
                </select>
              </div>

              <button
                type="button"
                className="mt-10 w-full bg-[#d72323] text-white py-3 rounded-full font-bold hover:bg-[#b41b1b] transition-colors"
                onClick={() => alert(`Pembayaran dengan metode ${paymentMethod} belum diimplementasikan.`)}
              >
                Bayar Sekarang
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;

