import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="/placeholder.svg?height=30&width=120"
          height={30}
          width={120}
          alt="Mura"
        />
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-black hover:text-orange-500">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-orange-500">
            Membership
          </Link>
          <Link to="#" className="text-black hover:text-orange-500">
            About
          </Link>
          <Link to="#" className="text-black hover:text-orange-500">
            Blog
          </Link>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
