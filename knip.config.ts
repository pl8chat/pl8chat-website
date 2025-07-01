import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/pages/**/*.{ts,tsx}', 'src/app/**/*.{ts,tsx}'],
  project: ['src/**/*.{ts,tsx}'],
};

export default config;
