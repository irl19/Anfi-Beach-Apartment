import { TranslationStrings } from './types';

export const translations: Record<string, TranslationStrings> = {
  es: {
    nav: {
      gallery: "Galería",
      contact: "Contacto"
    },
    hero: {
      h1: "La playa está cerca.\nLo difícil va a ser querer salir de la azotea.",
      subtitle: "Un rincón de paz en Anfi del Mar, donde el tiempo se detiene y los atardeceres son infinitos.",
      cta_availability: "Ver disponibilidad",
      cta_consult: "Consultar",
      cta_book: "Reservar ahora"
    },
    trustBanner: {
      best_price: "MEJOR PRECIO GARANTIZADO",
      cancellation: "CANCELACIÓN GRATUITA",
      flexible_payment: "PAGO FLEXIBLE",
      exclusive_advantages: "VENTAJAS EXCLUSIVAS",
      secure_payment: "PAGO 100% SEGURO"
    },
    highlights: {
      title: "Lo que nos hace únicos",
      items: [
        { title: "Azotea Privada", desc: "Un espacio de 40m² para desconectar bajo el cielo canario." },
        { title: "Playa a 5 minutos", desc: "La arena blanca y aguas turquesas de Anfi, a un paseo." },
        { title: "Atardeceres Mágicos", desc: "Vistas directas al océano para despedir el día." },
        { title: "Sol todo el año", desc: "El mejor clima del mundo en Mogán." }
      ]
    },
    enjoyDaily: {
      title: "Tres cosas que vas a disfrutar cada día.",
      items: [
        {
          title: "Sol",
          desc: "Luz natural desde que amanece. Vitamina D garantizada en tu terraza privada todo el año.",
          image: "sol.jpg"
        },
        {
          title: "El Mar",
          desc: "La calma del océano a solo unos pasos. El sonido de las olas como banda sonora.",
          image: "mar.webp"
        },
        {
          title: "Atardeceres",
          desc: "El espectáculo diario. Colores que cambian el cielo mientras disfrutas de una copa.",
          image: "atardecer.jpg"
        }
      ]
    },
    benefits: {
      title: "Reserva y obtén las mejores condiciones",
      items: ["Early Check-in", "Late Check-out", "Mejor Precio garantizado", "Amenities", "24/7 Soporte"],
      disclaimer: "*sujeto a condiciones de reserva"
    },
    reviews: {
      title: "Lo que más repiten nuestros huéspedes",
      subtitle: "Vistas, tranquilidad y la playa a un paseo. Estas son algunas opiniones reales.",
      items: [
        { name: "Elin", country: "Noruega", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop", text: "Muy bien" },
        { name: "Pernilla", country: "Suecia", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop", text: "Apartamento bien diseñado con todos los espacios que necesitas y una terraza en la azotea con bonitas vistas. Limpio y fresco también. Situado en un lugar un poco privado/aislado, pero a poca distancia de todo." },
        { name: "Zuzana", country: "Reino Unido", source: "Airbnb", rating: 5, date: "Oct. 2025", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop", text: "Bonita casa con piscinas a las que ir." },
        { name: "Yanina-Lucia", country: "Alemania", source: "Airbnb", rating: 5, date: "Sep. 2025", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop", text: "Nos sentimos cómodos de inmediato y teníamos espacio más que suficiente para los tres. Las vistas desde la terraza de la azotea son preciosas durante el día y la noche. Hay toallas de baño para la playa disponibles." },
        { name: "Henrik", country: "Dinamarca", source: "Airbnb", rating: 5, date: "Agosto 2025", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop", text: "Estancia fantástica. La ubicación es perfecta para relajarse y el apartamento tiene todo lo necesario. La terraza es increíble." }
      ]
    },
    distribution: {
      title: "Tu hogar en Gran Canaria",
      items: [
        "Capacidad hasta 5 personas",
        "2 Dormitorios luminosos",
        "Sofá cama doble",
        "Smart TV",
        "Wi-Fi fibra",
        "Toallas para playa"
      ],
      images: [
        "/bedroom2-real.png",
        "/property-2.png",
        "/property-3.png",
        "/property-4.png",
        "/property-5.png"
      ]
    },
    rooftop: {
      title: "La joya de la corona: La Azotea",
      desc: "Diseñada para vivir el exterior. Desde el café del amanecer hasta la última copa bajo las estrellas, este será tu lugar favorito.",
      bullets: [
        "Sofás chill-out de diseño",
        "Hamacas premium para baños de sol",
        "Sombrilla regulable",
        "Vistas 360º al mar y montaña"
      ]
    },
    surroundings: {
      title: "Alrededor, todo es fácil",
      subtitle: "Mar tranquilo, paseos al sol y una zona pensada para descansar.",
      items: [
        { title: "Baño en Anfi", desc: "Empieza el día con agua calmada y arena clara. Ideal para nadar o caminar por el paseo sin gente." },
        { title: "Todo a mano, sin coche", desc: "Restaurantes, pequeños comercios y lo esencial cerca. Vacaciones sin logística: salir, volver, ducharte y seguir." },
        { title: "Atardecer en la azotea", desc: "Cuando baja el sol, el mejor plan es arriba. Hamaca, sofá y mesa listos para cenar con vistas y brisa atlántica." }
      ]
    },
    location: {
      title: "Ubicación Privilegiada",
      desc: "Ubicados en el corazón de Anfi del Mar, disfrutarás de la tranquilidad de una zona residencial con acceso inmediato a lo mejor de la isla.",
      distances: [
        { place: "Playa de Anfi", time: "4 min caminando" },
        { place: "Supermercado", time: "5 min caminando" },
        { place: "Puerto de Mogán", time: "15 min en coche" },
        { place: "Aeropuerto", time: "30 min en coche" }
      ]
    },
    availability: {
      title: "Disponibilidad",
      legend_available: "Disponible",
      legend_booked: "Ocupado",
      loading: "Cargando calendario...",
      minStay: "Estancia mínima 4 noches"
    },
    contact: {
      title: "Reserva tu estancia",
      name: "Nombre completo",
      email: "Correo electrónico",
      dates: "Fechas deseadas",
      check_in: "Fecha de entrada",
      check_out: "Fecha de salida",
      message: "Comentario o consulta",
      submit: "Enviar mensaje",
      success: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
      error: "Error al enviar. Inténtalo de nuevo."
    },
    faqs: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Cuál es el horario de Check-in y Check-out?", a: "La entrada es a partir de las 15:00 y la salida debe realizarse antes de las 11:00." },
        { q: "¿Se permiten mascotas?", a: "No se permiten mascotas en el apartamento para garantizar la higiene y comodidad de todos nuestros huéspedes." },
        { q: "¿Hay parking disponible?", a: "Hay zonas de aparcamiento público gratuito cerca del apartamento." },
        { q: "¿Incluye sábanas y toallas?", a: "Sí, proporcionamos ropa de cama y toallas de baño de alta calidad para todos los huéspedes." }
      ]
    },
    footer: {
      rights: "© 2026 Anfi Beach Apartment. Todos los derechos reservados.",
      nav: ["Inicio", "Galería", "Disponibilidad", "Contacto"],
      legal: "Aviso Legal",
      privacy: "Privacidad",
      contact: "Contacto: reservas@anfibeach.com"
    },
    gallery: {
      title: "Galería de Fotos",
      subtitle: "Explora cada detalle de Anfi Beach Apartment y sus alrededores.",
      categories: {
        apartment: "Apartamento",
        living: "Salón",
        room1: "Habitación 1",
        room2: "Habitación 2",
        kitchen: "Cocina",
        dining: "Comedor",
        azotea: "Azotea",
        bathroom: "Baño",
        pools: "Piscinas",
        surroundings: "Alrededores"
      },
      backToHome: "Volver al inicio"
    }
  },
  en: {
    nav: {
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      h1: "The beach is close.\nThe hard part will be wanting to leave the rooftop.",
      subtitle: "A peaceful corner in Anfi del Mar, where time stands still and sunsets are infinite.",
      cta_availability: "Check Availability",
      cta_consult: "Inquire",
      cta_book: "Book Now"
    },
    trustBanner: {
      best_price: "BEST PRICE GUARANTEED",
      cancellation: "FREE CANCELLATION",
      flexible_payment: "FLEXIBLE PAYMENT",
      exclusive_advantages: "EXCLUSIVE BENEFITS",
      secure_payment: "100% SECURE PAYMENT"
    },
    highlights: {
      title: "What makes us unique",
      items: [
        { title: "Private Rooftop", desc: "40sqm space to disconnect under the Canarian sky." },
        { title: "5 Min Walk to Beach", desc: "White sand and turquoise waters just steps away." },
        { title: "Magic Sunsets", desc: "Direct ocean views to end the day in style." },
        { title: "Year-round Sun", desc: "The best climate in the world in Mogán." }
      ]
    },
    enjoyDaily: {
      title: "Three things you'll enjoy every day.",
      items: [
        {
          title: "Sun",
          desc: "Natural light from dawn. Vitamin D guaranteed on your private terrace all year round.",
          image: "sol.jpg"
        },
        {
          title: "The Sea",
          desc: "Ocean calm just steps away. The sound of waves as your soundtrack.",
          image: "mar.webp"
        },
        {
          title: "Sunsets",
          desc: "A daily spectacle. Colors changing the sky while you enjoy a glass of wine.",
          image: "atardecer.jpg"
        }
      ]
    },
    benefits: {
      title: "Book direct for the best conditions",
      items: ["Early Check-in", "Late Check-out", "Best Price Guaranteed", "Luxury Amenities", "24/7 Support"],
      disclaimer: "*subject to booking conditions"
    },
    reviews: {
      title: "What our guests say most",
      subtitle: "Views, tranquility and the beach a stroll away. These are real opinions.",
      items: [
        { name: "Elin", country: "Norway", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop", text: "Very good" },
        { name: "Pernilla", country: "Sweden", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop", text: "Well-designed apartment with all the spaces you need and a rooftop terrace with beautiful views. Clean and fresh too. Located in a slightly private/isolated spot, but within walking distance of everything." },
        { name: "Zuzana", country: "UK", source: "Airbnb", rating: 5, date: "Oct. 2025", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop", text: "Nice house with swimming pools to go to." },
        { name: "Yanina-Lucia", country: "Germany", source: "Airbnb", rating: 5, date: "Sep. 2025", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop", text: "We felt comfortable immediately and had more than enough space for the three of us. The views from the rooftop terrace are beautiful during the day and night. There are beach towels available." },
        { name: "Henrik", country: "Denmark", source: "Airbnb", rating: 5, date: "Aug. 2025", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop", text: "Fantastic stay. The location is perfect for relaxing and the apartment has everything you need." }
      ]
    },
    distribution: {
      title: "Your home in Gran Canaria",
      items: [
        "Up to 5 guests",
        "2 Bright Bedrooms",
        "Double sofa bed",
        "Smart TV",
        "Fiber Wi-Fi",
        "Beach towels"
      ],
      images: [
        "/bedroom2-real.png",
        "/property-2.png",
        "/property-3.png",
        "/property-4.png",
        "/property-5.png"
      ]
    },
    rooftop: {
      title: "The Jewel: The Rooftop",
      desc: "Designed for outdoor living. From sunrise coffee to the last drink under the stars, this will be your favorite spot.",
      bullets: [
        "Designer chill-out sofas",
        "Premium hammocks for sunbathing",
        "Adjustable sunshade",
        "360º Sea and mountain views"
      ]
    },
    surroundings: {
      title: "Everything is easy here",
      subtitle: "Calm sea, sunny walks and a place designed for rest.",
      items: [
        { title: "Anfi Swim", desc: "Start the day with calm water and clear sand. Perfect for swimming or walking the promenade." },
        { title: "Everything at hand", desc: "Restaurants, small shops and essentials nearby. No car needed for your daily life." },
        { title: "Rooftop Sunsets", desc: "When the sun goes down, the best plan is upstairs. Hammocks and sofas ready for views." }
      ]
    },
    location: {
      title: "Prime Location",
      desc: "Located in the heart of Anfi del Mar, enjoy the peace of a residential area with immediate access to the best of the island.",
      distances: [
        { place: "Anfi Beach", time: "4 min walk" },
        { place: "Supermarket", time: "5 min walk" },
        { place: "Puerto de Mogán", time: "15 min drive" },
        { place: "Airport", time: "30 min drive" }
      ]
    },
    availability: {
      title: "Availability",
      legend_available: "Available",
      legend_booked: "Booked",
      loading: "Loading calendar...",
      minStay: "Minimum stay 4 nights"
    },
    contact: {
      title: "Book Your Stay",
      name: "Full Name",
      email: "Email Address",
      dates: "Preferred Dates",
      check_in: "Check-in Date",
      check_out: "Check-out Date",
      message: "Comment or question",
      submit: "Send message",
      success: "Message sent! We will contact you shortly.",
      error: "Error sending message. Please try again."
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What are the Check-in and Check-out times?", a: "Check-in is from 3:00 PM and check-out must be before 11:00 AM." },
        { q: "Are pets allowed?", a: "No, pets are not allowed in the apartment to ensure the hygiene and comfort of all our guests." },
        { q: "Is there parking?", a: "There are free public parking areas near the apartment." },
        { q: "Are linens and towels included?", a: "Yes, we provide high-quality linens and towels for all guests." }
      ]
    },
    footer: {
      rights: "© 2026 Anfi Beach Apartment. All rights reserved.",
      nav: ["Home", "Gallery", "Availability", "Contact"],
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      contact: "Contact: booking@anfibeach.com"
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Explore every detail of Anfi Beach Apartment and its surroundings.",
      categories: {
        apartment: "Apartment",
        living: "Living Room",
        room1: "Bedroom 1",
        room2: "Bedroom 2",
        kitchen: "Kitchen",
        dining: "Dining Room",
        azotea: "Rooftop",
        bathroom: "Bathroom",
        pools: "Pools",
        surroundings: "Surroundings"
      },
      backToHome: "Back to Home"
    }
  },
  no: {
    nav: {
      gallery: "Galleri",
      contact: "Kontakt"
    },
    hero: {
      h1: "Stranden er rett ved.\nDet blir vanskelig å rive seg løs fra takterrassen.",
      subtitle: "En fredelig perle i Anfi del Mar, der tiden står stille og solnedgangene er uendelige.",
      cta_availability: "Sjekk tilgjengelighet",
      cta_consult: "Spør oss",
      cta_book: "Bestill nå"
    },
    trustBanner: {
      best_price: "BESTE PRISGARANTI",
      cancellation: "GRATIS AVBESTILLING",
      flexible_payment: "FLEKSIBEL BETALING",
      exclusive_advantages: "EKSKLUSIVE FORDELER",
      secure_payment: "100% SIKKER BETALING"
    },
    highlights: {
      title: "Hvorfor velge oss?",
      items: [
        { title: "Privat takterrasse", desc: "40 m² område for total avslapning under den kanariske himmelen." },
        { title: "5 min gange til strand", desc: "Hvit korallsand og krystallklart vann like ved." },
        { title: "Magiske solnedganger", desc: "Direkte havutsikt for en perfekt avslutning på dagen." },
        { title: "Sol hele året", desc: "Verdens beste klima i Mogán." }
      ]
    },
    enjoyDaily: {
      title: "Tre ting du vil nyte hver dag.",
      items: [
        {
          title: "Sol",
          desc: "Naturlig lys fra daggry. Vitamin D er garantert på din private terrasse hele året.",
          image: "sol.jpg"
        },
        {
          title: "Havet",
          desc: "Havets ro bare noen skritt unna. Lyden av bølger blir din daglige bakgrunnsmusikk.",
          image: "mar.webp"
        },
        {
          title: "Solnedganger",
          desc: "Et daglig skue. Farger som forvandler himmelen mens du nyter et glass vin.",
          image: "atardecer.jpg"
        }
      ]
    },
    benefits: {
      title: "Bestill direkte og få de beste betingelsene",
      items: ["Tidlig innsjekking", "Sen utsjekking", "Beste prisgaranti", "Luksusfasiliteter", "24/7 Kundestøtte"],
      disclaimer: "*avhengig av tilgjengelighet"
    },
    reviews: {
      title: "Hva gjestene våre sier oftest",
      subtitle: "Utsikt, ro og stranden en kort spasertur unna. Dette er ekte tilbakemeldinger.",
      items: [
        { name: "Elin", country: "Norge", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop", text: "Veldig bra" },
        { name: "Pernilla", country: "Sverige", source: "Airbnb", rating: 5, date: "Nov. 2025", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop", text: "Veldesignet leilighet med alt du trenger og en takterrasse med nydelig utsikt. Rent og pent også. Beliggende på et litt privat/avskjermet sted, men i gangavstand til alt." },
        { name: "Zuzana", country: "Storbritannia", source: "Airbnb", rating: 5, date: "Okt. 2025", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop", text: "Fint hus med svømmebassenger å dra til." },
        { name: "Yanina-Lucia", country: "Tyskland", source: "Airbnb", rating: 5, date: "Sep. 2025", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop", text: "Vi følte oss hjemme med en gang og hadde mer enn nok plass til alle tre. Utsikten fra takterrassen er nydelig både dag og natt. Det er strandhåndklær tilgjengelig." },
        { name: "Henrik", country: "Danmark", source: "Airbnb", rating: 5, date: "Aug. 2025", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop", text: "Fantastisk opphold. Beliggenheten er perfekt for avslapning." }
      ]
    },
    distribution: {
      title: "Ditt hjem på Gran Canaria",
      items: [
        "Plass til opptil 5 personer",
        "2 lyse soverom",
        "Dobbel sovesofa",
        "Smart-TV",
        "Raskt fiber-internett",
        "Strandhåndklær inkludert"
      ],
      images: [
        "/bedroom2-real.png",
        "/property-2.png",
        "/property-3.png",
        "/property-4.png",
        "/property-5.png"
      ]
    },
    rooftop: {
      title: "Juvelen: Takterrassen",
      desc: "Designet for utendørsliv. Fra morgenkaffen til den siste drinken under stjernene – dette vil bli ditt favorittsted.",
      bullets: [
        "Designer-loungemøbler",
        "Premium solsenger for soling",
        "Justerbar parasoll",
        "360º utsikt over hav og fjell"
      ]
    },
    surroundings: {
      title: "Alt er enkelt her",
      subtitle: "Rolig hav, solfylte turer og et sted skapt for hvile.",
      items: [
        { title: "Bading på Anfi", desc: "Start dagen med rolig vann og hvit sand. Perfekt for svømming eller en tur langs strandpromenaden." },
        { title: "Alt i nærheten", desc: "Restauranter, butikker og nødvendigheter like ved. En bilfri ferie er fullt mulig her." },
        { title: "Solnedgang på taket", desc: "Når solen går ned, er takterrassen det beste stedet å være. Solsenger og sofaer står klare for deg." }
      ]
    },
    location: {
      title: "Perfekt beliggenhet",
      desc: "Ligger i hjertet av Anfi del Mar. Nyt roen i et boligområde med umiddelbar tilgang til det beste øya har å by på.",
      distances: [
        { place: "Anfi-stranden", time: "4 min gange" },
        { place: "Supermarked", time: "5 min gange" },
        { place: "Puerto de Mogán", time: "15 min kjøring" },
        { place: "Flyplassen", time: "30 min kjøring" }
      ]
    },
    availability: {
      title: "Tilgjengelighet",
      legend_available: "Ledig",
      legend_booked: "Opptatt",
      loading: "Laster kalender...",
      minStay: "Minimumsopphold 4 netter"
    },
    contact: {
      title: "Bestill ditt opphold",
      name: "Fullt navn",
      email: "E-postadresse",
      dates: "Ønskede datoer",
      check_in: "Innsjekking",
      check_out: "Utsjekking",
      message: "Kommentar eller spørsmål",
      submit: "Send melding",
      success: "Melding sendt! Vi kontakter deg snart.",
      error: "Feil ved sending. Vennligst prøv igjen."
    },
    faqs: {
      title: "Ofte stilte spørsmål",
      items: [
        { q: "Når er innsjekking og utsjekking?", a: "Innsjekking er fra kl. 15:00 og utsjekking må skje før kl. 11:00." },
        { q: "Er kjæledyr tillatt?", a: "Nei, kjæledyr er ikke tillatt i leiligheten for å sikre hygiene og komfort for alle våre gjester." },
        { q: "Er det parkering?", a: "Det er gratis offentlige parkeringsområder i nærheten av leiligheten." },
        { q: "Er sengetøy og håndklær inkludert?", a: "Ja, vi tilbyr sengetøy og håndklær av høy kvalitet till alle gjester." }
      ]
    },
    footer: {
      rights: "© 2026 Anfi Beach Apartment. Med enerett.",
      nav: ["Hjem", "Galleri", "Tilgjengelighet", "Kontakt"],
      legal: "Juridisk informasjon",
      privacy: "Personvern",
      contact: "Kontakt: booking@anfibeach.com"
    },
    gallery: {
      title: "Bildegalleri",
      subtitle: "Utforsk hver detalj av Anfi Beach Apartment og omgivelsene.",
      categories: {
        apartment: "Leilighet",
        living: "Stue",
        room1: "Soverom 1",
        room2: "Soverom 2",
        kitchen: "Kjøkken",
        dining: "Spisestue",
        azotea: "Takterrasse",
        bathroom: "Baderom",
        pools: "Bassenger",
        surroundings: "Omgivelser"
      },
      backToHome: "Tilbake til forsiden"
    }
  }
};