'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, Users, Music, Lock } from 'lucide-react';

interface Appointment {
  time: string;
  student: string;
  instrument: string;
}

// Ano/mês fictícios usados apenas para montar a grade do calendário de demonstração
const YEAR = 2025;
const MONTH = 9; // Outubro (índice 0 = Janeiro)
const MONTH_LABEL = 'Outubro de 2025';
const TODAY_DAY = 15;

const WEEKDAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const appointmentsByDay: Record<number, Appointment[]> = {
  1: [{ time: '14:00', student: 'Beatriz Alves', instrument: 'Piano' }],
  2: [{ time: '17:00', student: 'João Pedro', instrument: 'Canto' }],
  3: [
    { time: '15:00', student: 'Carla Menezes', instrument: 'Violino' },
    { time: '16:30', student: 'Rafael Souza', instrument: 'Violão' },
    { time: '19:00', student: 'Ana Clara', instrument: 'Canto' },
  ],
  6: [
    { time: '16:00', student: 'Marina Silva', instrument: 'Violão' },
    { time: '17:30', student: 'Lucas Ferreira', instrument: 'Bateria' },
  ],
  8: [{ time: '14:00', student: 'Beatriz Alves', instrument: 'Piano' }],
  9: [{ time: '17:00', student: 'João Pedro', instrument: 'Canto' }],
  10: [
    { time: '15:00', student: 'Carla Menezes', instrument: 'Violino' },
    { time: '16:30', student: 'Rafael Souza', instrument: 'Violão' },
  ],
  13: [
    { time: '16:00', student: 'Marina Silva', instrument: 'Violão' },
    { time: '17:30', student: 'Lucas Ferreira', instrument: 'Bateria' },
  ],
  15: [{ time: '14:00', student: 'Beatriz Alves', instrument: 'Piano' }],
  16: [{ time: '17:00', student: 'João Pedro', instrument: 'Canto' }],
  17: [
    { time: '15:00', student: 'Carla Menezes', instrument: 'Violino' },
    { time: '16:30', student: 'Rafael Souza', instrument: 'Violão' },
    { time: '19:00', student: 'Ana Clara', instrument: 'Canto' },
  ],
  20: [
    { time: '16:00', student: 'Marina Silva', instrument: 'Violão' },
    { time: '17:30', student: 'Lucas Ferreira', instrument: 'Bateria' },
  ],
  22: [{ time: '14:00', student: 'Beatriz Alves', instrument: 'Piano' }],
  23: [{ time: '17:00', student: 'João Pedro', instrument: 'Canto' }],
  24: [
    { time: '15:00', student: 'Carla Menezes', instrument: 'Violino' },
    { time: '16:30', student: 'Rafael Souza', instrument: 'Violão' },
  ],
  27: [
    { time: '16:00', student: 'Marina Silva', instrument: 'Violão' },
    { time: '17:30', student: 'Lucas Ferreira', instrument: 'Bateria' },
  ],
  29: [{ time: '14:00', student: 'Beatriz Alves', instrument: 'Piano' }],
  30: [{ time: '17:00', student: 'João Pedro', instrument: 'Canto' }],
  31: [
    { time: '15:00', student: 'Carla Menezes', instrument: 'Violino' },
    { time: '16:30', student: 'Rafael Souza', instrument: 'Violão' },
  ],
};

function buildCalendarCells(): Array<number | null> {
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  const firstWeekday = new Date(YEAR, MONTH, 1).getDay();

  const cells: Array<number | null> = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }
  return cells;
}

export default function AdminAgendaPreview() {
  const calendarCells = buildCalendarCells();

  const allAppointments = Object.values(appointmentsByDay).flat();
  const totalAulas = allAppointments.length;
  const alunosAtivos = new Set(allAppointments.map((a) => a.student)).size;
  const instrumentos = new Set(allAppointments.map((a) => a.instrument)).size;

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-header-text mb-4">
            🖥️ Preview: Painel do <span className="text-accent-orange">Administrador</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            A área administrativa é protegida por login (Spring Security) e não pode ser acessada
            publicamente. Para que visitantes do portfólio entendam como ela funciona, veja abaixo
            uma simulação da agenda mensal com compromissos fictícios.
          </p>
        </motion.div>

        {/* Mock Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-bg-secondary border border-dark-border rounded-xl overflow-hidden shadow-2xl shadow-black/30"
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-dark-bg border-b border-dark-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-500 font-mono">
              <Lock size={12} />
              painel-admin.pedrocanutomusica.com.br/agenda
            </div>
          </div>

          {/* App content */}
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-dark-header-text flex items-center gap-2">
                  <CalendarDays className="text-accent-orange" size={22} />
                  Agenda — {MONTH_LABEL}
                </h3>
                <p className="text-gray-400 text-sm">Visão mensal de aulas agendadas por aluno</p>
              </div>
              <span className="self-start md:self-auto text-xs px-3 py-1 bg-accent-orange/10 text-accent-orange border border-accent-orange/30 rounded-full font-semibold whitespace-nowrap">
                Dados fictícios (demonstração)
              </span>
            </div>

            {/* Weekday header */}
            <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-[10px] md:text-xs font-semibold text-gray-500 mb-2">
              {WEEKDAY_LABELS.map((label) => (
                <div key={label}>{label}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 md:gap-2">
              {calendarCells.map((day, idx) => {
                if (day === null) {
                  return <div key={`empty-${idx}`} />;
                }

                const dayAppointments = appointmentsByDay[day] ?? [];
                const visible = dayAppointments.slice(0, 2);
                const extra = dayAppointments.length - visible.length;
                const isToday = day === TODAY_DAY;

                return (
                  <div
                    key={day}
                    className={`rounded-lg border p-1 md:p-2 min-h-[64px] md:min-h-[86px] ${
                      isToday
                        ? 'border-accent-orange bg-accent-orange/5'
                        : 'border-dark-border bg-dark-bg/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] md:text-sm font-semibold ${
                          isToday ? 'text-accent-orange' : 'text-gray-300'
                        }`}
                      >
                        {day}
                      </span>
                      {isToday && (
                        <span className="hidden md:inline text-[8px] px-1.5 py-0.5 rounded bg-accent-orange text-black font-bold">
                          HOJE
                        </span>
                      )}
                    </div>

                    <div className="mt-1 space-y-0.5 md:space-y-1">
                      {visible.map((appointment, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-[8px] md:text-[10px] bg-accent-orange/10 text-accent-orange rounded px-1 py-0.5 truncate"
                          title={`${appointment.time} · ${appointment.student} (${appointment.instrument})`}
                        >
                          <Clock size={8} className="hidden md:block flex-shrink-0" />
                          <span className="truncate">
                            <span className="hidden md:inline">{appointment.time} </span>
                            {appointment.student.split(' ')[0]}
                          </span>
                        </div>
                      ))}
                      {extra > 0 && (
                        <div className="text-[8px] md:text-[10px] text-gray-500 px-1">
                          +{extra} mais
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer stats */}
          <div className="border-t border-dark-border px-4 md:px-8 py-5 grid grid-cols-3 gap-4 bg-dark-bg/60">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 bg-accent-orange/10 rounded-lg">
                <CalendarDays className="text-accent-orange" size={18} />
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold text-accent-orange leading-none">
                  {totalAulas}
                </p>
                <p className="text-[10px] md:text-xs text-gray-400">Aulas no mês</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 bg-accent-orange/10 rounded-lg">
                <Users className="text-accent-orange" size={18} />
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold text-accent-orange leading-none">
                  {alunosAtivos}
                </p>
                <p className="text-[10px] md:text-xs text-gray-400">Alunos ativos</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 bg-accent-orange/10 rounded-lg">
                <Music className="text-accent-orange" size={18} />
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold text-accent-orange leading-none">
                  {instrumentos}
                </p>
                <p className="text-[10px] md:text-xs text-gray-400">Instrumentos</p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
          <Lock size={14} />
          Nomes, horários e agenda acima são fictícios, criados apenas para ilustrar a experiência
          do administrador dentro do sistema real.
        </p>
      </div>
    </section>
  );
}
