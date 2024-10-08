import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function StoreSearch() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Encuentra tu tienda favorita</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Input 
            type="text" 
            placeholder="Buscar tiendas..." 
            className="w-full sm:w-96 bg-white text-black"
          />
          <Button className="w-full sm:w-auto bg-yellow-400 text-blue-600 hover:bg-yellow-300">
            <Search className="mr-2 h-4 w-4" /> Buscar
          </Button>
        </div>
      </div>
    </section>
  );
}