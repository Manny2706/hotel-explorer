import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";

import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchHotelById } from "../features/hotels/hotelSlice";


const HotelDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { selectedHotel, loading, error } = useAppSelector(
    (state) => state.hotels
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchHotelById(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
          <p className="text-lg font-medium text-slate-500">
            Loading hotel...
          </p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
          <p className="text-lg font-medium text-red-500">
            {error}
          </p>
        </div>
      </Layout>
    );
  }

  if (!selectedHotel) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
          <p className="text-lg font-medium">
            Hotel not found.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-12">

        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-slate-100"
        >
          <FaArrowLeft />
          Back to Hotels
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>

            <img
              src={selectedHotel.thumbnail}
              alt={selectedHotel.name}
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />

          </div>

          {/* Right */}

          <div className="flex flex-col">

            <div className="flex items-start justify-between gap-6">

              <h1 className="text-5xl font-bold text-slate-900">
                {selectedHotel.name}
              </h1>

              <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 font-semibold">

                <FaStar className="text-yellow-500" />

                {selectedHotel.rating}

              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-lg text-slate-500">

              <FaLocationDot className="text-blue-600" />

              {selectedHotel.location}

            </div>

            <div className="mt-10">

              <h2 className="text-5xl font-bold text-blue-600">

                ₹
                {Number(selectedHotel.price).toLocaleString("en-IN")}

              </h2>

              <p className="mt-1 text-slate-500">
                per night
              </p>

            </div>

            <div className="mt-10">

              <h3 className="mb-4 text-2xl font-semibold">
                About this hotel
              </h3>

              <p className="leading-8 text-slate-600">
                {selectedHotel.description}
              </p>

            </div>

          </div>

        </div>

        {/* Gallery */}

        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Photo Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {selectedHotel.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Hotel ${index + 1}`}
                loading="lazy"
                className="h-60 w-full rounded-2xl object-cover transition duration-300 hover:scale-105 hover:shadow-xl"
              />
            ))}

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default HotelDetails;