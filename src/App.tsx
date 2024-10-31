import React from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import WhyMegnoc from './components/WhyMegnoc';
import SuccessStories from './components/SuccessStories';
import FutureVision from './components/FutureVision';
import Support from './components/Support';
import { Network, Users, BarChart3, Facebook, Twitter, Linkedin, Mail, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Network className="w-12 h-12 text-blue-500" />,
    title: "Ağ Yönetimi",
    description: "Gelişmiş analitik araçlarla gerçek zamanlı ağ izleme ve optimizasyon çözümleri."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Müşteri İlişkileri",
    description: "Entegre CRM çözümleriyle müşteri deneyimini iyileştirin ve hizmet kalitenizi artırın."
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
    title: "Faturalama ve Analiz",
    description: "Otomatik faturalama sistemleri ve gelişmiş veri analitiği ile gelir akışınızı optimize edin."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero3D />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyMegnoc />
      <SuccessStories />
      <FutureVision />
      <Support />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">MEGNOC</span>
              </div>
              <p className="text-gray-400">
                2020'den beri ISP'lere yenilikçi yazılım çözümleri sunuyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Çözümler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Müşteriler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Bülten</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 MEGNOC. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;