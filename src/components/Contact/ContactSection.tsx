'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { getContact } from '@/data';

const CONTACT_STYLE = {
  whatsapp: { icon: Phone, color: 'hover:text-green-400' },
  email: { icon: Mail, color: 'hover:text-red-400' },
  linkedin: { icon: Linkedin, color: 'hover:text-blue-400' },
  github: { icon: Github, color: 'hover:text-gray-300' },
} as const;

const contactLinks = (Object.keys(CONTACT_STYLE) as (keyof typeof CONTACT_STYLE)[]).map((id) => {
  const contact = getContact(id);
  return { ...CONTACT_STYLE[id], label: contact.label, value: contact.display, href: contact.url };
});

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou aberto a novas oportunidades, projetos e trocas sobre tecnologia e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6 transition-all duration-300 group-hover:border-accent-orange group-hover:shadow-lg group-hover:shadow-accent-orange/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-dark-header-btn rounded-lg">
                      <Icon className={`text-accent-orange transition-colors ${link.color}`} size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{link.label}</p>
                      <p className="text-dark-header-text font-semibold group-hover:text-accent-orange transition-colors">
                        {link.value}
                      </p>
                    </div>
                    <ExternalLink className="ml-auto text-gray-400 group-hover:text-accent-orange transition-colors opacity-0 group-hover:opacity-100" size={20} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => {
              window.open(getContact('whatsapp').url, '_blank');
            }}
          >
            Iniciar Conversa no WhatsApp
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            Respondo em até 24 horas! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};
