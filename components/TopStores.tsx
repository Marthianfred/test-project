import { ImageWithFallback } from '@/components/ui/image-with-fallback';

const stores = [
  { name: "Supermercado XYZ", image: "/images/supermarket.jpg", rating: 4.8 },
  { name: "Farmacia ABC", image: "/images/pharmacy-store.jpg", rating: 4.7 },
  { name: "Tienda de Electrónicos 123", image: "/images/electronics-store.jpg", rating: 4.9 },
  { name: "Panadería Delicia", image: "/images/bakery.jpg", rating: 4.6 },
];

export default function TopStores() {
  return (
    <section className="my-16 bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Mejores Tiendas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stores.map((store) => (
            <div key={store.name} className="bg-white rounded-lg shadow-md p-4">
              <ImageWithFallback
                src={store.image}
                alt={store.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
              <p className="text-yellow-500">★ {store.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}