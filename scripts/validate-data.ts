/**
 * Relatório de completude da fonte única de dados (src/data).
 *
 *   npm run validate:data          → relatório legível
 *   npm run validate:data -- --json → JSON (para o agente de portfólio)
 *
 * Sai com código 1 se houver referências quebradas entre os dados.
 */
import { buildReport } from '../src/data/completeness';

const report = buildReport();

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 2));
} else {
  for (const p of report.projects) {
    const status = p.readyToPublish ? 'pronto para publicação' : 'incompleto';
    console.log(`\n${p.name}  (${p.score}% · ${status})`);
    for (const c of p.checks) {
      const mark = c.ok ? '✓' : c.required ? '✗' : '⚠';
      console.log(`  ${mark} ${c.label}${!c.ok && c.required ? ' (obrigatório)' : ''}`);
    }
    for (const note of p.reviewNotes) console.log(`  ⚑ Revisar: ${note}`);
  }

  console.log('\nPerfil, competências e certificações');
  for (const gap of report.profileGaps) console.log(`  ⚠ ${gap}`);

  console.log(
    `\nIntegridade: ${report.integrityErrors.length ? '' : 'nenhuma referência quebrada'}`
  );
  for (const e of report.integrityErrors) console.log(`  ✗ ${e}`);
}

if (report.integrityErrors.length) process.exit(1);
