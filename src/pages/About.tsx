import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import { Building2, Users, Target, Award } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('aboutPage.hero.title', 'About Us')}
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {t('aboutPage.hero.subtitle', 'Learn more about our company and mission')}
              </p>
            </div>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('aboutPage.company.title', 'Our Company')}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {t('aboutPage.company.description', 'We are a leading company dedicated to excellence and innovation in our field.')}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {t('aboutPage.stats.experience', 'Years of Experience')}
                      </h3>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {t('aboutPage.stats.team', 'Expert Team')}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('aboutPage.mission.title', 'Our Mission')}
                  </h3>
                  <p className="text-gray-600">
                    {t('aboutPage.mission.description', 'To provide exceptional services and solutions that exceed our clients\' expectations while maintaining the highest standards of quality and professionalism.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                {t('aboutPage.values.title', 'Our Values')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('aboutPage.values.excellence.title', 'Excellence')}
                  </h3>
                  <p className="text-gray-600">
                    {t('aboutPage.values.excellence.description', 'We strive for excellence in everything we do.')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('aboutPage.values.teamwork.title', 'Teamwork')}
                  </h3>
                  <p className="text-gray-600">
                    {t('aboutPage.values.teamwork.description', 'Collaboration and teamwork drive our success.')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('aboutPage.values.quality.title', 'Quality')}
                  </h3>
                  <p className="text-gray-600">
                    {t('aboutPage.values.quality.description', 'Quality is at the heart of our operations.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}