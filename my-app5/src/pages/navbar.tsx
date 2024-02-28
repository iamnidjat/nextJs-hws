import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contactUs">Contact Us</Link>
        </li>
        <li>
          <Link href="/cars">Cars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
