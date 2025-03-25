import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
