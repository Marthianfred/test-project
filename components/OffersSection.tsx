import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';

const offers = [
  { title: "50% de descuento en frutas", image: "/images/fruit-offer.jpg" },
  { title: "Envío gratis en pedidos +$50", image: "/images/free-delivery.jpg" },
  { title: "2x1 en productos de limpieza", image: "/images/cleaning-offer.jpg" },
];

export default function OffersSection() {
  return (
    <section className="my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Ofertas Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src={offer.image}
                alt={offer.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <Button className="w-full">Ver oferta</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}