import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2">
      <div className="flex items-center">
        <Link href='/'>
          <img className="w-8 h-8 mr-2" src="/pixelated_sam.png" alt="Logo" />
        </Link>
        <span className="font-semibold text-lg text-gray-100">Samuel Cox</span>
      </div>
      <ul className="flex items-center space-x-4 text-gray-100">
      <li className="h-full">
          <Link href="/contact">
            <p className="hover:text-blue-500 transition-colors duration-300 py-4 px-2 hover:bg-gray-200">Contact</p>
          </Link>
        </li>
        <li className="h-full">
          <Link href="/about">
            <p className="hover:text-blue-500 transition-colors duration-300 py-4 px-2 hover:bg-gray-200">About</p>
          </Link>
        </li>
        <li className="h-full">
          <Link href="/projects">
            <p className="hover:text-blue-500 transition-colors duration-300 py-4 px-2 hover:bg-gray-200">Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;