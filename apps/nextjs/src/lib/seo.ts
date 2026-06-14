export const siteUrl = "https://sidestories.cz";

export const indexedRoutes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/about",
    priority: 0.8,
  },
] as const;

export const excludedRoutes = ["/podminky-akce"] as const;

export const organization = {
  name: "Side Stories",
  instagramUrl: "https://www.instagram.com/side.stories.cz",
};

export const event = {
  name: "Lost in Prague",
  description:
    "Průchod Prahou, plnění sidequestů, poznávání nových lidí a výstup z komfortní zóny.",
  image: `${siteUrl}/side-stories/landing-cta.webp`,
  registrationUrl: "https://luma.com/zizjgsc6",
  startDate: "2026-06-24T16:30:00+02:00",
  endDate: "2026-06-24T19:30:00+02:00",
  validFrom: "2026-06-12T00:00:00+02:00",
  price: "150",
  priceCurrency: "CZK",
  location: {
    name: "Pomník Josefa Mánesa",
    streetAddress: "Alšovo nábřeží",
    addressLocality: "Praha",
    addressCountry: "CZ",
    latitude: 50.0876,
    longitude: 14.4148,
  },
};

export const people = [
  {
    id: "tom",
    name: "Tom",
    role: "Ten, co vsechno dotahne do konce.",
    image: `${siteUrl}/side-stories/tom-bridge-web.jpg`,
  },
  {
    id: "kacka",
    name: "Kacka",
    role: "Holka pro kazdou srandu.",
    image: `${siteUrl}/side-stories/kacka-main.webp`,
  },
] as const;

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: organization.name,
    url: siteUrl,
    sameAs: [organization.instagramUrl],
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: organization.name,
    url: siteUrl,
    inLanguage: "cs-CZ",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function createEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}/#event`,
    name: event.name,
    description: event.description,
    image: [event.image],
    url: siteUrl,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: "cs-CZ",
    location: {
      "@type": "Place",
      name: event.location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.location.streetAddress,
        addressLocality: event.location.addressLocality,
        addressCountry: event.location.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: event.location.latitude,
        longitude: event.location.longitude,
      },
    },
    organizer: {
      "@id": `${siteUrl}/#organization`,
    },
    performer: people.map((person) => ({
      "@id": `${siteUrl}/about#${person.id}`,
    })),
    offers: {
      "@type": "Offer",
      url: event.registrationUrl,
      price: event.price,
      priceCurrency: event.priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: event.validFrom,
    },
  };
}

export function createPeopleJsonLd() {
  return people.map((person) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/about#${person.id}`,
    name: person.name,
    description: person.role,
    image: person.image,
    url: `${siteUrl}/about`,
    worksFor: {
      "@id": `${siteUrl}/#organization`,
    },
    memberOf: {
      "@id": `${siteUrl}/#organization`,
    },
  }));
}
