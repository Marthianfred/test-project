import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg my-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Your Daily Needs, Delivered
        </h1>
        <p className="mt-6 text-xl">
          From groceries to essentials, we've got you covered. Fast delivery, great prices, and quality products.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}