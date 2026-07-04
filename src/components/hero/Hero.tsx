import { FaArrowRight, FaHotel, FaLocationDot, FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="mt-9 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur">

          <FaHotel className="text-blue-400" />

          <span className="text-sm font-medium text-slate-200">

            500+ Premium Hotels Across India

          </span>

        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">

          Discover Your

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">

            Perfect Luxury Stay

          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">

          Explore hand-picked hotels across India with advanced
          search, real-time pricing, verified ratings, and
          unforgettable experiences.

        </p>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#hotels"
            className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            Explore Hotels

            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">

            Learn More

          </button>

        </div>

        {/* Stats */}

        <div className="mt-24 grid w-full max-w-5xl gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-3">

          <div>

            <h2 className="text-4xl font-bold text-white">

              500+

            </h2>

            <p className="mt-2 text-slate-400">

              Premium Hotels

            </p>

          </div>

          <div>

            <div className="flex justify-center gap-2">

              <FaStar className="text-yellow-400" />

              <span className="text-4xl font-bold text-white">

                4.8

              </span>

            </div>

            <p className="mt-2 text-slate-400">

              Average Rating

            </p>

          </div>

          <div>

            <div className="flex justify-center gap-2">

              <FaLocationDot className="text-blue-400" />

              <span className="text-4xl font-bold text-white">

                12

              </span>

            </div>

            <p className="mt-2 text-slate-400">

              Major Cities

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;