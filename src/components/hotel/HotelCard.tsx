import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";

import type { Hotel } from "../../types/hotel";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Rating */}

        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">

          <FaStar className="text-yellow-500" />

          <span className="font-semibold text-slate-800">
            {hotel.rating}
          </span>

        </div>

        {/* Price */}

        <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur">

          <p className="text-2xl font-bold text-blue-600">
            ₹{Number(hotel.price).toLocaleString("en-IN")}
          </p>

          <span className="text-xs text-slate-500">
            per night
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        <div>

          <h2 className="line-clamp-1 text-2xl font-bold text-slate-900">
            {hotel.name}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-slate-500">

            <FaLocationDot className="text-blue-600" />

            <span>{hotel.location}</span>

          </div>

        </div>

        <p className="line-clamp-3 leading-7 text-slate-600">
          {hotel.description}
        </p>

        <Link
          to={`/hotels/${hotel.id}`}
          className="flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        >
          <span>View Details</span>

          <FaArrowRight className="transition group-hover:translate-x-1" />
        </Link>

      </div>
    </motion.article>
  );
};

export default HotelCard;