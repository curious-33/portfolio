import type { Graph, Thing, WithContext } from 'schema-dts';

type JsonLdProps = {
  code: Graph | WithContext<Thing>;
};

export const JsonLd = ({ code }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(code).replace(/</g, '\\u003c'),
    }}
  />
);

export * from 'schema-dts';
