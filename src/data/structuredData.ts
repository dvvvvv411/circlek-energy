
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blueline",
  "alternateName": "BL Trade GmbH",
  "url": "https://bl-heizoel.de",
  "logo": "/lovable-uploads/5f37edc5-73d7-450c-9343-d983bbd4bac4.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-30-23258380",
    "contactType": "customer service",
    "email": "info@bl-heizoel.de",
    "availableLanguage": "Polish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Düsseldorfer Str. 10",
    "addressLocality": "Berlin",
    "postalCode": "10719",
    "addressCountry": "DE"
  },
  "foundingDate": "2023",
  "numberOfEmployees": "10-50",
  "description": "Premium olej opałowy od 2,97 zł za litr z bezpłatną dostawą od 2.000L w całej Polsce.",
  "areaServed": {
    "@type": "Country",
    "name": "Poland"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Olej Opałowy",
      "description": "Premium olej opałowy dla klientów prywatnych i biznesowych"
    },
    "price": "2.97",
    "priceCurrency": "PLN",
    "availability": "https://schema.org/InStock"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blueline",
  "image": "/lovable-uploads/5f37edc5-73d7-450c-9343-d983bbd4bac4.png",
  "@id": "https://bl-heizoel.de",
  "url": "https://bl-heizoel.de",
  "telephone": "+49-30-23258380",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Düsseldorfer Str. 10",
    "addressLocality": "Berlin",
    "postalCode": "10719",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.499,
    "longitude": 13.330
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
