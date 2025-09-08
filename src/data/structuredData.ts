
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blueline",
  "alternateName": "Circle K Energy Trading SA SA Oddział w Polsce",
  "url": "https://bl-heizoel.de",
  "logo": "/lovable-uploads/5f37edc5-73d7-450c-9343-d983bbd4bac4.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@circlek-energy.pl",
    "availableLanguage": "Polish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Puławska 86",
    "addressLocality": "Warszawa",
    "postalCode": "02-603",
    "addressCountry": "PL"
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
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Puławska 86",
    "addressLocality": "Warszawa",
    "postalCode": "02-603",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.230,
    "longitude": 21.010
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
