"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import LocationDetector from '@/components/LocationDetector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  if (!mounted) return null;

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              6amMart
            </Link>
          </div>
          <LocationDetector />
          <div className="hidden md:flex items-center space-x-4">
            <Input type="text" placeholder={t('search_placeholder')} className="w-64" />
            <Button variant="ghost" onClick={toggleLanguage}>
              <Globe className="mr-2 h-4 w-4" />
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('cart')}
            </Button>
            <Button>{t('sign_in')}</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Input type="text" placeholder={t('search_placeholder')} className="w-full mb-2" />
            <Button variant="ghost" className="w-full justify-start" onClick={toggleLanguage}>
              <Globe className="mr-2 h-4 w-4" />
              {i18n.language === 'en' ? 'Español' : 'English'}
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {theme === 'dark' ? t('light_mode') : t('dark_mode')}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('cart')}
            </Button>
            <Button className="w-full">{t('sign_in')}</Button>
          </div>
        </div>
      )}
    </header>
  );
}