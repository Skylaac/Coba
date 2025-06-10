import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "PRANK TOOLS", img: "/images/prank-tools.png" },
  { name: "BOOK", img: "/images/book.png" },
  { name: "TOY", img: "/images/toy.png" },
  { name: "BAG", img: "/images/bag.png" },
  { name: "FOOD", img: "/images/food.png" },
];

const products = [
  { name: "BUTTS ON THINGS GAME", price: 216876, rating: 4, img: "/images/butts-game.png" },
  { name: "GAME SUSHI GO!", price: 124567, rating: 5, img: "/images/sushi-go.png" },
  { name: "GAME BUILDZI", price: 109999, rating: 4, img: "/images/buildzi.png" },
  { name: "HITLER’S SECRET GAME", price: 115678, rating: 4, img: "/images/hitler-secret.png" },
  { name: "GAME GORILLA POUND", price: 157985, rating: 4, img: "/images/gorilla-pound.png" },
  { name: "ABDUCTION: BASIC GAME", price: 231456, rating: 4, img: "/images/abduction.png" },
  { name: "ULTIMATE WEREWOLF: REVISED EDITION", price: 355764, rating: 5, img: "/images/werewolf.png" },
  { name: "NIGHTMARE BEFORE CHRISTMAS", price: 452854, rating: 4, img: "/images/nightmare.png" },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="text-black">{"★ ".repeat(count).trim()}</div>
);

export default function LolmartProductPage() {
  return (
    <div className="bg-yellow-400 min-h-screen p-4 font-bold text-black">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-yellow-300 rounded-full">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="text-xl">LOLMART</span>
        </div>
        <nav className="flex gap-6 text-xl">
          <a href="#" className="text-black">HOME</a>
          <a href="#" className="text-red-600">PRODUCT</a>
          <a href="#" className="text-black">ABOUT</a>
          <a href="#" className="text-black">CONTACT</a>
        </nav>
        <div className="flex gap-4">
          <span className="text-xl">🔍</span>
          <span className="text-xl">🛒</span>
          <span className="text-xl">👤</span>
        </div>
      </div>

      {/* Category */}
      <h2 className="text-2xl mt-8 mb-4">CATEGORY</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-yellow-300 rounded-3xl p-4 flex flex-col items-center w-36">
            <img src={cat.img} alt={cat.name} className="w-20 h-20 rounded-full" />
            <span className="mt-2 text-center">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <h2 className="text-2xl mt-8 mb-4">OUR PRODUCT</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((prod, idx) => (
          <Card key={idx} className="bg-yellow-300 text-center">
            <CardContent className="p-4 flex flex-col items-center">
              <img src={prod.img} alt={prod.name} className="w-20 h-20 rounded-full mb-2" />
              <h3 className="text-sm font-bold mb-1">{prod.name}</h3>
              <StarRating count={prod.rating} />
              <div className="mt-2">Rp {prod.price.toLocaleString("id-ID")}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
