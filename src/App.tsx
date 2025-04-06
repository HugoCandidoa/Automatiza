import React from 'react';
import { Play, Settings, Check, ChevronRight, Star, Clock, Target, Zap } from 'lucide-react';

const packages = [
  {
    name: 'StartZap',
    price: 'R$497',
    description: 'WhatsApp Automatizado Básico',
    features: ['Menu automático', 'Respostas rápidas', 'Configuração em 48h'],
    highlight: false,
  },
  {
    name: 'Site Vendedor Rápido',
    price: 'R$997',
    description: 'Criação de Site + Captura Leads',
    features: ['Landing page otimizada', 'Formulário de captura', 'Design responsivo'],
    highlight: false,
  },
  {
    name: 'Funil Turbo',
    price: 'R$1497',
    description: 'Funil de Vendas Automatizado',
    features: ['Funil completo', 'Automação de e-mails', 'Remarketing automático'],
    highlight: true,
  },
  {
    name: 'AutoFull',
    price: 'R$2997',
    description: 'Tudo Integrado + Suporte VIP',
    features: ['Tudo dos outros planos', 'Suporte prioritário', 'Consultoria mensal'],
    highlight: false,
  },
];

const testimonials = [
  {
    name: 'Ana',
    business: 'Loja de Roupas',
    text: 'Nunca mais perdi cliente por falta de resposta!',
  },
  {
    name: 'Carlos',
    business: 'Restaurante',
    text: 'Em 1 semana meu faturamento aumentou só por organizar o WhatsApp.',
  },
];

const benefits = [
  {
    icon: Clock,
    text: 'Atendimento rápido 24h via WhatsApp',
  },
  {
    icon: Target,
    text: 'Site que gera clientes novos',
  },
  {
    icon: Zap,
    text: 'Funil de vendas funcionando sozinho',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#0055FF] text-white">
        <div className="container mx-auto px-4 py-16">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="relative">
                <Settings className="w-8 h-8 animate-spin-slow" />
                <Play className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              Automatiza+
            </div>
            <button className="bg-[#00FF7F] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Fale Conosco
            </button>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Sua empresa vendendo todos os dias, mesmo quando você não está online.
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Automatizamos seu negócio. Você foca no que importa.
            </p>
            <button className="bg-[#00FF7F] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
              Quero automatizar meu negócio
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <benefit.icon className="w-8 h-8 text-[#0055FF]" />
                <p className="text-lg font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Escolha o melhor plano para seu negócio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  pkg.highlight
                    ? 'bg-[#0055FF] text-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <p className={`mb-6 ${pkg.highlight ? 'text-gray-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold ${
                    pkg.highlight
                      ? 'bg-[#00FF7F] text-black'
                      : 'bg-[#0055FF] text-white'
                  }`}
                >
                  Contratar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#0055FF] text-[#0055FF]" />
                  ))}
                </div>
                <p className="text-xl mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.business}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0055FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Seu concorrente já está usando automação. E você?</h2>
          <button className="bg-[#00FF7F] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-bold mb-4">
            <div className="relative">
              <Settings className="w-6 h-6" />
              <Play className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            Automatiza+
          </div>
          <p className="text-gray-400">© 2024 Automatiza+. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;