import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import Link from 'next/link';

const categories = [
  { name: 'Groceries', image: '/images/groceries.jpg' },
  { name: 'Pharmacy', image: '/images/pharmacy.jpg' },
  { name: 'Food', image: '/images/food.jpg' },
  { name: 'Electronics', image: '/images/electronics.jpg' },
];

export default function FeaturedCategories() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href="#" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}