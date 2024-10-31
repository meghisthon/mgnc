import React from 'react';
import { Shield, Cpu, Users, Clock, Code2, LineChart } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Güvenilir Altyapı",
    description: "7/24 kesintisiz hizmet ve %99.9 uptime garantisi ile işletmenizin sürekliliğini sağlıyoruz."
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "Dijital Dönüşüm Uzmanlığı",
    description: "15+ yıllık sektör deneyimi ile işletmenizi geleceğe hazırlıyoruz."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "ISP Odaklı Çözümler",
    description: "İnternet servis sağlayıcılarının özel ihtiyaçlarına yönelik özelleştirilmiş yazılım çözümleri."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Hızlı Entegrasyon",
    description: "Minimum kesinti ile mevcut sistemlerinize sorunsuz entegrasyon sağlıyoruz."
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    title: "Modern Teknolojiler",
    description: "En son teknolojileri kullanarak geliştirdiğimiz çözümlerle rekabet avantajı sağlıyoruz."
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    title: "Ölçeklenebilir Sistemler",
    description: "İşletmenizin büyümesine paralel olarak ölçeklenebilen esnek altyapı çözümleri."
  }
];

export default function WhyMegnoc() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden MEGNOC?</h2>
          <p className="text-xl text-gray-600">
            Dijital dönüşüm yolculuğunuzda yanınızdayız
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}