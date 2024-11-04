import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[rgba(37,43,66,1)] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Main Links */}
        <div className="flex items-center space-x-8 mx-auto ">
          <h3 className="text-2xl font-Montserrat text-white">HorizonHub</h3>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="text-white">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: Login and Join Us */}
        <div className="flex items-center space-x-4 mx-auto">
          <Link href="/login" className="text-white">
            Login
          </Link>
          <Link href="/join" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
