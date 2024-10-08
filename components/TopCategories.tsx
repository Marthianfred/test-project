import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import Link from 'next/link';

const categories = [
  { name: "Comida Rápida", image: "/images/fastfood.jpg", items: 150 },
  { name: "Frutas y Verduras", image: "/images/fruits-vegetables.jpg", items: 200 },
  { name: "Carnes", image: "/images/meat.jpg", items: 100 },
  { name: "Bebidas", image: "/images/drinks.jpg", items: 180 },
];

export default function TopCategories() {
  return (
    <section className="my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Mejores Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href="#" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p>{category.items} items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}