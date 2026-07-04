import { useAppSelector } from "../../app/hooks";
import HotelCard from "./HotelCard";

const HotelGrid = () => {
  const { hotels, loading, error } = useAppSelector(
    (state) => state.hotels
  );

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-lg font-medium text-slate-500">
          Loading hotels...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  if (!hotels.length) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center text-slate-500">
          No hotels found.
        </p>
      </section>
    );
  }

  return (
    <section
      id="hotels"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-bold text-slate-900">
            Explore Hotels
          </h2>

          <p className="mt-2 text-slate-500">
            {hotels.length} hotels available
          </p>

        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))}
      </div>
    </section>
  );
};

export default HotelGrid;