interface StructuredDataProps {
  readonly locale: string;
}

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = 'https://lecode.dev';

  const translations = {
    pt: {
      name: 'LeCode',
      description:
        'LeCode é uma empresa latino-americana especializada em outsourcing de profissionais de tecnologia e desenvolvimento de soluções end-to-end. Trabalhamos lado a lado com nossos clientes, alocando talentos altamente treinados preparados para colaborar em equipe, adaptar-se a diferentes culturas e entregar soluções eficientes e de alto desempenho.',
      knowsAbout: [
        'React',
        'JavaScript',
        'Node.js',
        'Next.js',
        'Electron',
        'Desenvolvimento Web',
        'Consultoria em Tecnologia',
        'Outsourcing de Profissionais',
      ],
      serviceDescription:
        'Alocação de talentos técnicos sob demanda, totalmente integrados à sua equipe, incluindo engenheiros de software, DevOps, gerentes de projeto, designers UX/UI e outros especialistas. Desenvolvimento completo de soluções digitais, desde a concepção de requisitos até a entrega final.',
    },
    en: {
      name: 'LeCode',
      description:
        'LeCode is a Latin American-based software partner specializing in outsourcing technology professionals and developing end-to-end solutions. We work hand-in-hand with our clients, allocating highly trained talent prepared to collaborate as a team, adapt to different cultures, and deliver efficient, high-performance solutions.',
      knowsAbout: [
        'React',
        'JavaScript',
        'Node.js',
        'Next.js',
        'Electron',
        'Web Development',
        'Technology Consulting',
        'Professional Outsourcing',
      ],
      serviceDescription:
        'Allocation of on-demand technical talent, fully integrated into your team, including software engineers, DevOps, project managers, UX/UI designers, and other specialists. Complete development of digital solutions, from requirements conception to final delivery.',
    },
    es: {
      name: 'LeCode',
      description:
        'LeCode es un socio de software con sede en América Latina especializado en externalización de profesionales de tecnología y desarrollo de soluciones end-to-end. Trabajamos mano a mano con nuestros clientes, asignando talento altamente capacitado preparado para colaborar en equipo, adaptarse a diferentes culturas y entregar soluciones eficientes y de alto rendimiento.',
      knowsAbout: [
        'React',
        'JavaScript',
        'Node.js',
        'Next.js',
        'Electron',
        'Desarrollo Web',
        'Consultoría Tecnológica',
        'Externalización de Profesionales',
      ],
      serviceDescription:
        'Asignación de talento técnico bajo demanda, totalmente integrado en su equipo, incluyendo ingenieros de software, DevOps, gerentes de proyecto, diseñadores UX/UI y otros especialistas. Desarrollo completo de soluciones digitales, desde la concepción de requisitos hasta la entrega final.',
    },
  };

  const t =
    (locale in translations
      ? translations[locale as keyof typeof translations]
      : null) ?? translations.en;

  const getAvailableLanguage = () => {
    if (locale === 'pt') return 'Portuguese';
    if (locale === 'es') return 'Spanish';
    return 'English';
  };

  const getAreaServed = () => {
    if (locale === 'pt') return 'Brasil';
    if (locale === 'es') return 'América Latina';
    return 'Worldwide';
  };

  const getInLanguage = () => {
    if (locale === 'pt') return 'pt-BR';
    if (locale === 'es') return 'es-ES';
    return 'en-US';
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t.name,
    description: t.description,
    url: baseUrl,
    logo: `${baseUrl}/lecode-logo.svg`,
    sameAs: [
      'https://www.linkedin.com/company/lecodedev/',
      'https://www.instagram.com/lecode_dev/',
      'https://github.com/lecode-dev',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'lecode@lecode.dev',
      availableLanguage: getAvailableLanguage(),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Nova Juramento 286',
      addressLocality: 'Montes Claros',
      addressRegion: 'Minas Gerais',
      postalCode: '39402-096',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: getAreaServed(),
    },
    knowsAbout: t.knowsAbout,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Montes Claros',
        addressRegion: 'Minas Gerais',
        addressCountry: 'BR',
      },
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t.name,
    url: baseUrl,
    alternateName: 'LeCode Enterprise',
    inLanguage: getInLanguage(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IT Services and IT Consulting',
    provider: {
      '@type': 'Organization',
      name: t.name,
    },
    areaServed: {
      '@type': 'Country',
      name: getAreaServed(),
    },
    description: t.serviceDescription,
    offers: {
      '@type': 'Offer',
      description: t.serviceDescription,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

