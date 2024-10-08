"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LocationDetector() {
  const [location, setLocation] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation(t('location_error'));
        }
      );
    } else {
      setLocation(t('geolocation_not_supported'));
    }
  }, [t]);

  const reverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocation(data.results[0].formatted_address);
      } else {
        setLocation(t('location_not_found'));
      }
    } catch (error) {
      console.error("Error reverse geocoding:", error);
      setLocation(t('geocoding_error'));
    }
  };

  return (
    <Button variant="ghost" className="text-sm">
      <MapPin className="mr-2 h-4 w-4" />
      {location || t('detecting_location')}
    </Button>
  );
}