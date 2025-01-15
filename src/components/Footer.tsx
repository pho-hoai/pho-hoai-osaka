export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Gourmet Haven</h3>
            <p className="mt-2">Culinary excellence since 1985</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-green-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-300">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Gourmet Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
