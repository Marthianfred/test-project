import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';

export default function DownloadApp() {
  return (
    <section className="my-16 bg-blue-600 text-white py-12 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
            <p className="text-xl mb-6">
              Get the best shopping experience with our mobile app. Fast, convenient, and packed with exclusive offers!
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="lg">
                App Store
              </Button>
              <Button variant="secondary" size="lg">
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <ImageWithFallback
              src="/images/app-mockup.jpg"
              alt="6amMart Mobile App"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}