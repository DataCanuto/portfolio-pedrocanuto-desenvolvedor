import { ImageResponse } from 'next/og';
import { profile } from '@/data';

export const alt = profile.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Imagem de compartilhamento (LinkedIn, WhatsApp, Google) gerada a partir do perfil. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0F172A',
          color: '#F1F5F9',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ width: 120, height: 8, background: '#FF8C00', marginBottom: 48 }} />
        <div style={{ fontSize: 88, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: '#FF8C00', marginTop: 16 }}>{profile.title}</div>
        <div style={{ fontSize: 30, color: '#94A3B8', marginTop: 40, maxWidth: 1000 }}>
          {profile.seo.shortDescription}
        </div>
      </div>
    ),
    size
  );
}
