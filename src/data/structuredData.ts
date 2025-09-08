
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Circle K Energy",
  "alternateName": "Circle K Energy Trading SA SA Oddział w Polsce",
  "url": "https://bl-heizoel.de",
  "logo": "/lovable-uploads/a73d830e-5c2b-42d7-8591-d05d0175d06d.png",
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
  "name": "Circle K Energy",
  "image": "/lovable-uploads/a73d830e-5c2b-42d7-8591-d05d0175d06d.png",
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
