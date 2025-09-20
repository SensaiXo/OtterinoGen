import { useLanguage } from "@/contexts/LanguageContext";

const ProcessOptimization = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{t('services.service2.title')}</h1>
      <p className="text-lg text-gray-600 mb-8">Detailed page for Finance Process Optimization.</p>
      {/* More content will be added here */}
    </div>
  );
};

export default ProcessOptimization;
