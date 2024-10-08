import Hero from '@/components/Hero';
import StoreSearch from '@/components/StoreSearch';
import FeaturedCategories from '@/components/FeaturedCategories';
import OffersSection from '@/components/OffersSection';
import PopularItems from '@/components/PopularItems';
import TopStores from '@/components/TopStores';
import TopCategories from '@/components/TopCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import DownloadApp from '@/components/DownloadApp';

export default function Home() {
  return (
    <div>
      <Hero />
      <StoreSearch />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedCategories />
        <OffersSection />
        <PopularItems />
        <TopStores />
        <TopCategories />
        <WhyChooseUs />
        <DownloadApp />
      </div>
    </div>
  );
}