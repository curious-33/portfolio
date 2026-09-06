import { USER } from '@/lib/config/user';
import { ImageResponse } from 'next/og';

export const alt = `${USER.name} — ${USER.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          color: '#fafafa',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={USER.image.profile}
            alt=""
            width={168}
            height={168}
            style={{
              width: 168,
              height: 168,
              borderRadius: 168,
              objectFit: 'cover',
              border: '3px solid #27272a',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 600,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
              }}
            >
              {USER.name}
            </div>
            <div style={{ fontSize: 28, color: '#a1a1aa' }}>
              {USER.jobTitle}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 32,
              color: '#e4e4e7',
              letterSpacing: '-0.02em',
            }}
          >
            {USER.tagline}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#71717a',
              fontSize: 24,
            }}
          >
            <span>{USER.location}</span>
            <span>{USER.domain}</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
