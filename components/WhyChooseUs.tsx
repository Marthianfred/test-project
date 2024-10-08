import { Truck, Clock, ThumbsUp, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Fast Delivery', description: 'Get your items delivered quickly and efficiently.' },
  { icon: Clock, title: '24/7 Service', description: "We're here for you around the clock." },
  { icon: ThumbsUp, title: 'Quality Products', description: 'We ensure only the best products reach you.' },
  { icon: ShieldCheck, title: 'Secure Payments', description: 'Your transactions are safe and secure with us.' },
];

export default function WhyChooseUs() {
  return (
    <section className="my-16 bg-gray-100 py-12 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}