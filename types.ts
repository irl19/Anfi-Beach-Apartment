
export type Language = 'es' | 'en' | 'no';

export interface Review {
  name: string;
  country: string;
  text: string;
  source: 'Airbnb' | 'Booking' | 'Google';
  rating: number;
  date: string;
  avatar: string;
}

export interface TranslationStrings {
  nav: {
    gallery: string;
    contact: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    cta_availability: string;
    cta_consult: string;
    cta_book: string;
  };
  trustBanner: {
    best_price: string;
    cancellation: string;
    flexible_payment: string;
    exclusive_advantages: string;
    secure_payment: string;
  };
  highlights: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  enjoyDaily: {
    title: string;
    items: {
      title: string;
      desc: string;
      image: string;
    }[];
  };
  benefits: {
    title: string;
    items: string[];
    disclaimer: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    items: Review[];
  };
  distribution: {
    title: string;
    items: string[];
    images: string[];
  };
  rooftop: {
    title: string;
    desc: string;
    bullets: string[];
  };
  surroundings: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  location: {
    title: string;
    desc: string;
    distances: {
      place: string;
      time: string;
    }[];
  };
  availability: {
    title: string;
    legend_available: string;
    legend_booked: string;
    loading: string;
    minStay: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    dates: string;
    check_in: string;
    check_out: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  faqs: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    rights: string;
    legal: string;
    privacy: string;
    contact: string;
    nav: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: {
      apartment: string;
      living: string;
      room1: string;
      room2: string;
      kitchen: string;
      dining: string;
      azotea: string;
      bathroom: string;
      pools: string;
      surroundings: string;
    };
    backToHome: string;
  };
}
