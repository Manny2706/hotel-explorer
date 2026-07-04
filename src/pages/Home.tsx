import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchHotels, setQuery } from "../features/hotels/hotelSlice";
import SearchSection from "../components/SearchSection";
import HotelGrid from "../components/hotel/HotelGrid";
import Pagination from "../components/hotel/Pagination";

const Home = () => {
  const dispatch = useAppDispatch();

  const { query, total } = useAppSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels(query));
  }, [dispatch, query]);

  const currentPage =
    Math.floor((query.skip ?? 0) / (query.limit ?? 12)) + 1;

  const totalPages = Math.max(
    1,
    Math.ceil(total / (query.limit ?? 12))
  );

  const handlePrevious = () => {
    if (currentPage === 1) return;

    dispatch(
      setQuery({
        skip: (query.skip ?? 0) - (query.limit ?? 12),
      })
    );
  };

  const handleNext = () => {
    if (currentPage === totalPages) return;

    dispatch(
      setQuery({
        skip: (query.skip ?? 0) + (query.limit ?? 12),
      })
    );
  };

  return (
    <Layout>
      <Hero />

      <SearchSection />

      <HotelGrid />

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </Layout>
  );
};

export default Home;