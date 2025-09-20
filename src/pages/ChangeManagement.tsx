import { useLanguage } from "@/contexts/LanguageContext";

const ChangeManagement = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{t('services.service3.title')}</h1>
      <p className="text-lg text-gray-600 mb-8">Detailed page for Project Guidance & Change Management.</p>
      {/* More content will be added here */}
    </div>
  );
};

export default ChangeManagement;
