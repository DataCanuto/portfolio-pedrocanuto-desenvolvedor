'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

const THEME_VARIABLES = {
  darkMode: true,
  background: '#0a0a0a',
  primaryColor: '#1a1a1a',
  primaryTextColor: '#e5e5e5',
  primaryBorderColor: '#f97316',
  lineColor: '#f97316',
  secondaryColor: '#262626',
  tertiaryColor: '#171717',
  tertiaryBorderColor: '#404040',
  clusterBkg: '#141414',
  clusterBorder: '#404040',
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  fontSize: '15px',
  nodeTextColor: '#e5e5e5',
  mainBkg: '#1a1a1a',
  nodeBorder: '#f97316',
  edgeLabelBackground: '#0a0a0a',
  actorBkg: '#1a1a1a',
  actorBorder: '#f97316',
  actorTextColor: '#e5e5e5',
  labelBoxBkgColor: '#1a1a1a',
  labelBoxBorderColor: '#f97316',
  labelTextColor: '#e5e5e5',
  classText: '#e5e5e5',
};

export default function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rawId = useId().replace(/[:]/g, '');
  const diagramId = `mermaid-${rawId}`;

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'strict',
          themeVariables: THEME_VARIABLES,
          flowchart: { curve: 'basis', htmlLabels: false },
        });
        const { svg: rendered } = await mermaid.render(diagramId, chart);
        if (!cancelled) {
          setSvg(rendered);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Erro ao renderizar diagrama');
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, diagramId]);

  if (error) {
    return (
      <div className="text-sm text-red-400 p-4 border border-red-500/30 rounded-lg bg-red-500/5">
        Não foi possível renderizar o diagrama: {error}
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={className} ref={containerRef} aria-busy="true">
        <div className="flex items-center justify-center h-64 text-gray-500 text-sm">
          Carregando diagrama…
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
