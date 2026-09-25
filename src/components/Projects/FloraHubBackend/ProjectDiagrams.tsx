'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Scale, Boxes, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDiagrams() {
  const [activeDiagram, setActiveDiagram] = useState<'fluxo' | 'regras' | 'arquitetura'>('fluxo');

  const diagrams = [
    {
      id: 'fluxo',
      name: 'Fluxo da Análise',
      icon: Workflow,
      description:
        'O caminho de uma foto até a resposta: onde a IA entra e onde o backend decide',
      content: (
        <div className="space-y-6">
          {[
            {
              title: 'Request com a imagem',
              desc: 'POST /api/plantas/analisar recebe imageUrl (http/https ou data URI base64) e latitude/longitude opcionais',
              tag: 'Backend',
            },
            {
              title: 'Validação e montagem da mídia',
              desc: 'Bloqueio de hosts privados (proteção contra SSRF), limite de 10 MB, sem redirects e detecção do tipo pelos magic bytes (JPEG, PNG, GIF, WebP)',
              tag: 'Backend',
            },
            {
              title: 'Identificação multimodal',
              desc: 'ChatClient envia a imagem ao GPT-4o com temperatura 0.2; .entity(PlantIdentificationResult.class) devolve nome científico, gênero, espécie, saúde aparente e confiança',
              tag: 'GPT-4o',
            },
            {
              title: 'Perfil de cuidados da espécie',
              desc: 'Se a espécie é nova, uma segunda chamada gera luz, rega, faixas de umidade e temperatura; o resultado fica salvo e é reaproveitado nas próximas análises',
              tag: 'GPT-4o',
            },
            {
              title: 'Clima atual',
              desc: 'WeatherService consulta a OpenWeather pelas coordenadas (arredondadas) com cache de 30 minutos no PostgreSQL',
              tag: 'OpenWeather',
            },
            {
              title: 'Motor de regras',
              desc: 'Cada RegraRecomendacao compara cuidados ideais com o clima e emite NORMAL, ATENÇÃO ou CRÍTICO; o status geral é a pior gravidade encontrada',
              tag: 'Backend',
            },
            {
              title: 'Response',
              desc: 'AnaliseRespostaDTO reúne identificação, cuidados, ambiente, recomendações e um aviso quando algum dado externo falhar',
              tag: 'Backend',
            },
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center font-bold text-accent-orange">
                {idx + 1}
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold text-dark-header-text">{step.title}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded border ${
                      step.tag === 'GPT-4o'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : step.tag === 'OpenWeather'
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          : 'bg-accent-orange/10 text-accent-orange border-accent-orange/30'
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'regras',
      name: 'Regras de Negócio',
      icon: Scale,
      description:
        'Recomendações determinísticas: a IA fornece os dados da espécie, o Java decide o que recomendar',
      content: (
        <div className="space-y-4">
          {[
            {
              title: '💧 RegraRega',
              desc: 'Se está chovendo, dispensa a rega do dia. Se a espécie pede rega alta e a umidade do ar está abaixo de 40%, emite atenção.',
            },
            {
              title: '🌡️ RegraTemperatura',
              desc: 'Compara a temperatura atual com a faixa ideal da espécie e orienta proteção contra calor ou frio.',
            },
            {
              title: '💦 RegraUmidade',
              desc: 'Umidade abaixo do mínimo sugere borrifar ou umidificar; acima do máximo, ventilação para evitar fungos.',
            },
            {
              title: '🌬️ RegraVento',
              desc: 'A partir de 11 m/s recomenda abrigar plantas que estão ao ar livre.',
            },
            {
              title: '☀️ RegraUV',
              desc: 'Pronta para quando houver índice UV: alerta plantas de sombra ou luz indireta com UV igual ou acima de 6. O plano gratuito da OpenWeather não fornece esse dado.',
            },
          ].map((rule) => (
            <div key={rule.title} className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
              <h4 className="font-bold text-accent-orange mb-2">{rule.title}</h4>
              <p className="text-gray-300 text-sm">{rule.desc}</p>
            </div>
          ))}

          <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 mt-6">
            <p className="text-gray-300 text-sm">
              <span className="text-accent-orange font-bold">Strategy + injeção de lista:</span>{' '}
              cada regra é um <code>@Component</code> que implementa{' '}
              <code>RegraRecomendacao</code>, e o <code>RecomendacaoService</code> recebe{' '}
              <code>List&lt;RegraRecomendacao&gt;</code> do Spring. Adicionar uma regra nova não
              exige alterar nenhuma classe existente.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'arquitetura',
      name: 'Arquitetura',
      icon: Boxes,
      description: 'Pacotes organizados por funcionalidade, cada um com controller, service e repository',
      content: (
        <div className="space-y-4">
          <div className="bg-dark-bg/50 border border-accent-orange/30 rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🌿 plant/</h4>
            <p className="text-gray-300 text-sm">
              <code className="text-accent-orange">PlantIdentificationService</code>: validação da
              imagem, prompt de sistema de botânica e saída estruturada do GPT-4o. Também expõe{' '}
              <code className="text-accent-orange">/api/plants</code> para consultar o histórico
              de identificações.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">🪴 care/</h4>
            <p className="text-gray-300 text-sm">
              <code className="text-accent-orange">PlantaService</code> implementa{' '}
              <em>obter ou criar</em>: busca a espécie pelo nome científico e só chama a IA para
              gerar o perfil de cuidados quando ela ainda não existe no banco.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">⛅ weather/</h4>
            <p className="text-gray-300 text-sm">
              <code className="text-accent-orange">WeatherService</code> com{' '}
              <code className="text-accent-orange">RestClient</code>, timeouts de 5 s, cache por
              coordenada e uma exceção própria para degradar a resposta sem derrubar a análise.
            </p>
          </div>

          <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-4">
            <h4 className="font-bold text-accent-orange mb-2">📋 recommendation/</h4>
            <p className="text-gray-300 text-sm">
              <code className="text-accent-orange">AnalisarPlantaService</code> orquestra o fluxo
              em uma transação, aciona o motor de regras e persiste a análise com suas
              recomendações.
            </p>
          </div>

          <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-lg p-4 mt-6">
            <p className="text-gray-300 text-sm">
              <span className="text-accent-orange font-bold">Persistência versionada:</span> 7
              migrations Flyway no PostgreSQL (identificações, plantas e cuidados, condições
              ambientais, análises e recomendações), com <code>ddl-auto=validate</code> para o
              Hibernate nunca alterar o schema sozinho.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentDiagram = diagrams.find((d) => d.id === activeDiagram);
  const getCurrentIndex = () => diagrams.findIndex((d) => d.id === activeDiagram);

  const handleNext = () => {
    const nextIndex = (getCurrentIndex() + 1) % diagrams.length;
    setActiveDiagram(diagrams[nextIndex].id as typeof activeDiagram);
  };

  const handlePrev = () => {
    const prevIndex = (getCurrentIndex() - 1 + diagrams.length) % diagrams.length;
    setActiveDiagram(diagrams[prevIndex].id as typeof activeDiagram);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            <span className="text-accent-orange">Arquitetura</span> & Regras
          </h2>
          <p className="text-gray-400 text-lg">
            Request = imagem · backend = regras de negócio · response = gerada pelo GPT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {diagrams.map((diagram) => (
            <button
              key={diagram.id}
              onClick={() => setActiveDiagram(diagram.id as typeof activeDiagram)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeDiagram === diagram.id
                  ? 'bg-accent-orange text-black shadow-lg shadow-accent-orange/50'
                  : 'bg-dark-bg-secondary border border-dark-border text-gray-300 hover:border-accent-orange/50'
              }`}
            >
              <diagram.icon size={18} />
              {diagram.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeDiagram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-dark-header-text mb-2">{currentDiagram?.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{currentDiagram?.description}</p>
          {currentDiagram?.content}
        </motion.div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 bg-dark-bg border border-dark-border rounded-lg text-gray-300 hover:border-accent-orange hover:text-accent-orange transition-all duration-300"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <div className="flex gap-2">
            {diagrams.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === getCurrentIndex() ? 'bg-accent-orange w-8' : 'bg-dark-border w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-accent-orange rounded-lg text-black font-bold hover:shadow-lg hover:shadow-accent-orange/50 transition-all duration-300"
          >
            Próximo
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
