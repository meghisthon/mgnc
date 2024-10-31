import React from 'react';
import { MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "MEGNOC'un kurulum süreci ne kadar sürer?",
    answer: "Sistem büyüklüğüne bağlı olarak 2-4 hafta içerisinde kurulum tamamlanır ve sistemleriniz çalışır duruma gelir."
  },
  {
    question: "7/24 destek hizmeti sunuyor musunuz?",
    answer: "Evet, teknik destek ekibimiz 7/24 hizmetinizdedir. Acil durumlar için öncelikli destek hattımız mevcuttur."
  },
  {
    question: "Mevcut sistemlerle entegrasyon sağlanabiliyor mu?",
    answer: "Evet, MEGNOC çözümleri mevcut sistemlerinizle tam uyumlu çalışacak şekilde entegre edilebilmektedir."
  }
];

export default function Support() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destek ve İletişim
          </h2>
          <p className="text-xl text-gray-600">
            Size yardımcı olmak için buradayız
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Sık Sorulan Sorular</h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Bize Ulaşın</h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-gray-600">+90 (212) 555 0000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">E-posta</h4>
                    <p className="text-gray-600">destek@megnoc.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">Canlı Destek</h4>
                    <p className="text-gray-600">7/24 Online Destek</p>
                  </div>
                </div>
              </div>

              <button className="w-full btn btn-primary mt-8">
                Destek Talebi Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}