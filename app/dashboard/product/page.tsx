"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ProductPage = () => {
  const categories = ["All", "Board Game", "Card Game", "Dice Game", "Party Game"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  const formatRupiah = (number: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const products = [
    {
      name: "Butts on Things Game",
      price: 216876,
      image: "/images/butts-on-things.png",
      category: "Party Game",
    },
    {
      name: "Game Sushi Go!",
      price: 124567,
      image: "/images/sushi-go.png",
      category: "Card Game",
    },
    {
      name: "Game Buildzi",
      price: 109999,
      image: "/images/buildzi.png",
      category: "Dice Game",
    },
    {
      name: "Hitler’s Secret Game",
      price: 115678,
      image: "/images/hitler-secret.png",
      category: "Party Game",
    },
    {
      name: "Game Gorilla Pound",
      price: 157985,
      image: "/images/gorilla-pound.png",
      category: "Dice Game",
    },
    {
      name: "Ultimate Werewolf: Revised Edition",
      price: 355764,
      image: "/images/ultimate-werewolf.png",
      category: "Board Game",
    },
    {
      name: "Abduction: Basic Game",
      price: 231456,
      image: "/images/abduction.png",
      category: "Board Game",
    },
    {
      name: "Nightmare Before Christmas",
      price: 452854,
      image: "/images/nightmare-before.png",
      category: "Card Game",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: any) => {
    const index = cartItems.findIndex((item) => item.name === product.name);
    if (index >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const totalHarga = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    router.push("/dashboard/checkout");
  };

  return (
    <div className="min-h-screen bg-[#fff000] text-black px-6 py-10 font-sans relative">
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative bg-white p-2 rounded-full border border-[#d72323] shadow-md"
        >
          <ShoppingCartIcon className="w-6 h-6 text-[#d72323]" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#d72323] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {showCart && (
        <div className="absolute top-16 right-6 bg-white shadow-lg border border-[#d72323] rounded-lg w-80 max-h-[80vh] overflow-auto z-40">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h3 className="font-bold text-[#d72323]">Shopping Cart</h3>
            <button onClick={() => setShowCart(false)}>
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {cartItems.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">Keranjang kosong</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {formatRupiah(item.price)} × {item.quantity}
                        </p>
                        <p className="text-sm text-[#d72323] font-semibold">
                          {formatRupiah(item.price * item.quantity)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-gray-400 hover:text-red-500"
                        title="Hapus dari keranjang"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-t border-gray-300 space-y-2">
                <div className="flex justify-between font-bold text-sm">
                  <span>Total:</span>
                  <span className="text-[#d72323]">{formatRupiah(totalHarga)}</span>
                </div>
                <button
                  onClick={() => setCartItems([])}
                  className="w-full bg-red-500 text-white text-sm py-2 rounded hover:bg-red-600"
                >
                  Hapus Semua
                </button>
                <button
                  onClick={goToCheckout}
                  className="w-full bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <div className="mb-6 mt-4">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full max-w-md px-4 py-2 rounded-full border border-[#d72323] focus:outline-none focus:ring-2 focus:ring-[#d72323] placeholder:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
              ${selectedCategory === category
                ? "bg-[#d72323] text-white"
                : "bg-white text-[#d72323] border border-[#d72323]"
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <h1 className="text-3xl font-extrabold mb-6">OUR PRODUCT</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center border-2 border-[#d72323]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-contain mb-3"
              />
              <h2 className="text-center font-bold text-sm leading-tight">
                {product.name}
              </h2>
              <p className="mt-1 text-md text-[#d72323] font-bold">{formatRupiah(product.price)}</p>
              <div className="flex mt-2 space-x-1 text-[#000] text-sm mb-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto px-4 py-1 bg-[#d72323] text-white text-sm rounded-full hover:brightness-110"
              >
                Shop
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-gray-700 mt-8">
          Tidak ada produk yang ditemukan.
        </p>
      )}
    </div>
  );
};

export default ProductPage;