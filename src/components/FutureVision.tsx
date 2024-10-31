import React from 'react';
import { Zap, Brain, Cloud, Shield } from 'lucide-react';

const technologies = [
  {
    icon: <Brain className="w-12 h-12 text-blue-500" />,
    title: "Yapay Zeka Entegrasyonu",
    description: "Gelişmiş AI algoritmaları ile ağ yönetimi ve müşteri hizmetlerinde otomasyon."
  },
  {
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    title: "Bulut Tabanlı Çözümler",
    description: "Ölçeklenebilir ve güvenli bulut altyapısı ile kesintisiz hizmet."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Gelişmiş Siber Güvenlik",
    description: "En son güvenlik protokolleri ile verilerinizin korunması."
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    title: "5G Hazır Altyapı",
    description: "Gelecek nesil ağ teknolojilerine uyumlu çözümler."
  }
];

export default function FutureVision() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Geleceğin Teknolojileri
          </h2>
          <p className="text-xl text-blue-200">
            MEGNOC ile dijital geleceğe hazır olun
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-6">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-blue-200">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn btn-primary">
            Teknoloji Çözümlerimizi Keşfedin
          </button>
        </div>
      </div>
    </section>
  );
}