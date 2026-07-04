const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HotelFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;