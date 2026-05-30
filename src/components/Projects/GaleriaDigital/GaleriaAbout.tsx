'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function GaleriaAbout() {
  return (
    <section className="py-20 px-4 bg-dark-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Sobre Paulo Canuto</h2>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Arquiteto urbanista e artista plástico, Paulo Canuto possui mais de 50 anos dedicados à 
              investigação artística do ambiente urbano, suas dinâmicas e ocupantes.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Autodidata, sempre experimenta diversas técnicas de pintura e as aplica em suportes diferenciados, 
              desde os anos 80 utilizando a aerografia como uma das técnicas favoritas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              A atual mostra denominada <span className="text-accent-orange font-semibold">DiverCidade</span> traz um resumo das experiências vivenciadas ao longo desses anos, 
              no qual os temas e imagens estão entrelaçados por um fio cujo foco é a diversidade urbana.
            </p>
          </div>

          <div className="bg-dark-bg p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Localização & Contato</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent-orange mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">Salvador, Bahia - Brasil</p>
                  <p className="text-gray-400">Exposição DiverCidade</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-accent-orange mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a
                    href="https://wa.me/5571999588950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    +55 71 99983-7602
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-accent-orange mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:contato@paulocanuto.com"
                    className="text-accent-orange hover:text-orange-300"
                  >
                    paulorcanuto@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://wa.me/5571999588950?text=Olá%20Paulo,%20tenho%20interesse%20em%20suas%20obras"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-700 transition text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Conversar no WhatsApp
            </motion.a>

            <motion.a
              href="https://instagram.com/paulocanuto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-orange text-white py-4 px-8 rounded-lg font-semibold hover:bg-orange-600 transition text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📸 Seguir no Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
