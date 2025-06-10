import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    product: "chicken pen",
    rating: 5,
    review:
      "This product is amazing! The quality is very good and matches the description. Fast delivery, neat packing, and the seller is very responsive. Will definitely buy again here!!",
    image: "/images/chicken-pen.png",
  },
  {
    product: "sour pickle balls",
    rating: 4,
    review:
      "The goods are as expected, the quality is okay, and the price is quite affordable. It's just that the delivery is fast. Hopefully in the future it will be faster!",
    image: "/images/sour-pickle.png",
  },
  {
    product: "DOG POOP",
    rating: 5,
    review:
      "This product is amazing! The quality is very good and according to the description. Fast delivery, neat packing, and the seller is very responsive. Will definitely buy again here!",
    image: "/images/dog-poop.png",
  },
  {
    product: "astronaut",
    rating: 2,
    review:
      "The goods are as expected, the quality is okay, and the price is quite affordable. It's just that the delivery is a bit long. Hopefully in the future it will be faster!",
    image: "/images/astronaut.png",
  },
  {
    product: "octopus finger",
    rating: 4,
    review:
      "The quality is very good and in accordance with the description. Fast delivery, neat packing, and the seller is very responsive. Will definitely buy again here!",
    image: "/images/octopus.png",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="text-black font-bold mb-1">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-yellow-300 rounded-3xl p-4 shadow-md flex flex-col items-start">
      <img
        src={review.image}
        alt={review.product}
        className="w-24 h-24 object-contain mb-2"
      />
      <p className="font-bold text-black">Products : {review.product}</p>
      <p className="font-bold text-black">Rating : <StarRating rating={review.rating} /></p>
      <p className="text-sm font-semibold text-black">
        Review : “{review.review}”
      </p>
    </div>
  );
};

const ReviewPage = () => {
  return (
    <div className="min-h-screen bg-orange-500 p-4 text-white font-sans">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button className="text-white">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-4xl font-bold mx-auto">REVIEW</h1>
        <div className="w-6" /> {/* Spacer */}
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        {reviews.map((r, index) => (
          <ReviewCard key={index} review={r} />
        ))}
      </div>

      {/* Next Page Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-yellow-400 text-black font-bold rounded-xl px-5 py-2 flex items-center gap-2">
          NEXT PAGE <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;