import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';

const popularItems = [
  { name: 'Fresh Apples', price: 2.99, image: '/images/apples.jpg' },
  { name: 'Whole Grain Bread', price: 3.49, image: '/images/bread.jpg' },
  { name: 'Organic Milk', price: 4.99, image: '/images/milk.jpg' },
  { name: 'Free Range Eggs', price: 5.99, image: '/images/eggs.jpg' },
];

export default function PopularItems() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularItems.map((item) => (
          <div key={item.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}