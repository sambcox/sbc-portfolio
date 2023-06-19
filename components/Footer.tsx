import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="social-links py-4 px-2 flex justify-center border-t">
      <div className='flex'>
        <Link href="https://github.com/sambcox" target="_blank" rel="noopener noreferrer">
          <p className="hover:text-blue-500 transition-colors duration-300 py-4 px-2 hover:bg-gray-200" rel="noopener noreferrer">GitHub</p>
        </Link>
        <Link href="https://www.linkedin.com/in/samuel-bingham-cox/" target="_blank" rel="noopener noreferrer">
          <p className="hover:text-blue-500 transition-colors duration-300 py-4 px-2 hover:bg-gray-200">LinkedIn</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;