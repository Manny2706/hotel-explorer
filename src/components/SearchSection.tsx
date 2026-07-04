import { useEffect, useMemo, useState } from "react";
import {
  FaLocationDot,
  FaRotateLeft,
  FaMagnifyingGlass,
  FaStar,
} from "react-icons/fa6";
import { useDebounce } from "use-debounce";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  setQuery,
  resetQuery,
} from "../features/hotels/hotelSlice";

const SearchSection = () => {
  const locations = useMemo(
    () => [
      "Ahmedabad",
      "Bengaluru",
      "Chennai",
      "Delhi",
      "Goa",
      "Gurgaon",
      "Hyderabad",
      "Jaipur",
      "Kolkata",
      "Mumbai",
      "Noida",
      "Pune",
    ],
    []
  );

  const dispatch = useAppDispatch();

  const { query } = useAppSelector((state) => state.hotels);

  const [search, setSearch] = useState(query.search ?? "");

  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    dispatch(
      setQuery({
        search: debouncedSearch,
        skip: 0,
      })
    );
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    setSearch(query.search ?? "");
  }, [query.search]);

  return (
    <section className="sticky top-16 z-40 border-y bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-4 lg:grid-cols-12">

          {/* Search */}

          <div className="relative lg:col-span-5">
            <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hotels or cities..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Location */}

          <div className="relative lg:col-span-2">
            <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <select
              value={query.location ?? ""}
              onChange={(e) =>
                dispatch(
                  setQuery({
                    location: e.target.value,
                    skip: 0,
                  })
                )
              }
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Location</option>

              {locations.map((city) => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}

          <div className="relative lg:col-span-2">
            <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />

            <select
              value={query.rating_min ?? ""}
              onChange={(e) =>
                dispatch(
                  setQuery({
                    rating_min: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                    skip: 0,
                  })
                )
              }
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-11 pr-5 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Rating</option>
              <option value="5">5 ⭐</option>
              <option value="4">4 ⭐ & Above</option>
              <option value="3">3 ⭐ & Above</option>
            </select>
          </div>

          {/* Sort */}

          <div className="lg:col-span-2">
            <select
              value={query.ordering ?? ""}
              onChange={(e) =>
                dispatch(
                  setQuery({
                    ordering: e.target.value,
                    skip: 0,
                  })
                )
              }
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Sort By</option>

              <option value="price">Price ↑</option>
              <option value="-price">Price ↓</option>

              <option value="rating">Rating ↑</option>
              <option value="-rating">Rating ↓</option>
            </select>
          </div>

          {/* Reset */}

          <button
            onClick={() => {
              setSearch("");
              dispatch(resetQuery());
            }}
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            <FaRotateLeft />
            Reset
          </button>

        </div>
      </div>
    </section>
  );
};

export default SearchSection;