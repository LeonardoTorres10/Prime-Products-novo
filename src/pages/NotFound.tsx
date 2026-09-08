import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getEquivalentRoute } from '../data/routeMappings';
import { SEOHead } from '../components/SEOHead';

export function NotFound() {
  const { language, t } = useLanguage();

  const title = t('404_title', 'Página não encontrada');
  const desc = t('404_desc', 'O endereço solicitado não existe ou foi removido.');
  const btnText = t('404_btn', 'Voltar para o início');

  return (
    <>
      <SEOHead title={`${title} | Prime Products`} description={desc} noindex={true} />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center bg-white p-10 shadow-md border-t-4 border-primary rounded-sm">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion size={40} className="text-primary" />
          </div>
          <h1 className="text-3xl font-black text-secondary mb-4">{title}</h1>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm">{desc}</p>
          <Link
            to={getEquivalentRoute('/', language)}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 font-bold uppercase text-xs tracking-wider rounded-sm transition-all"
          >
            <ArrowLeft size={16} />
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
}
