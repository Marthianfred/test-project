import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              6amMart is your one-stop shop for all your daily needs. We deliver quality products right to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Categories</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Popular Items</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm text-gray-600">
              123 Main Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@6ammart.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 6amMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}