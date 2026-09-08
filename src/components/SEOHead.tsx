import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { getEquivalentRoute } from '../data/routeMappings';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: any;
  noindex?: boolean;
}

export function SEOHead({ 
  title = 'Prime Products', 
  description = 'Soluções técnicas em instrumentação, gases e engenharia aplicada.',
  image = '/images/social-share.png',
  type = 'website',
  schema,
  noindex = false
}: SEOHeadProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  // Domain configuration
  const domain = 'https://www.primeproducts.ind.br';

  // Hreflang resolution
  const ptPath = getEquivalentRoute(currentPath, 'pt');
  const esPath = getEquivalentRoute(currentPath, 'es');
  const enPath = getEquivalentRoute(currentPath, 'en');
  
  // HTML lang mapping
  const htmlLang = language === 'pt' ? 'pt-BR' : language;

  // Regional paths handling
  const isParaguay = currentPath.startsWith('/es-py');
  
  // Build full URLs
  const canonicalUrl = domain + currentPath;
  const defaultUrl = domain + ptPath;

  const fullImage = image.startsWith('http') ? image : domain + image;

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical & Hreflang */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
      <link rel="alternate" hrefLang="pt-BR" href={domain + ptPath} />
      <link rel="alternate" hrefLang="es" href={domain + esPath} />
      <link rel="alternate" hrefLang="en" href={domain + enPath} />
      
      {isParaguay && (
        <link rel="alternate" hrefLang="es-PY" href={canonicalUrl} />
      )}
      
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Prime Products" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* NoIndex */}
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
