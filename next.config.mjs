// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { globalNotFound: true },

  webpack(config) {
    // Recursively exclude .svg from any rule that would match it
    const excludeSvgEverywhere = (rule) => {
      if (!rule) return rule;

      if (rule.test && typeof rule.test.test === 'function' && rule.test.test('.svg')) {
        rule.exclude = Array.isArray(rule.exclude)
          ? [...rule.exclude, /\.svg$/i]
          : rule.exclude
          ? [rule.exclude, /\.svg$/i]
          : [/\.svg$/i];
      }

      if (Array.isArray(rule.oneOf)) rule.oneOf = rule.oneOf.map(excludeSvgEverywhere);
      if (Array.isArray(rule.rules)) rule.rules = rule.rules.map(excludeSvgEverywhere);
      return rule;
    };

    config.module.rules = config.module.rules.map(excludeSvgEverywhere);

    // Put SVGR first so it wins
    config.module.rules.unshift({
      test: /\.svg$/i,
      oneOf: [
        // import url from 'icon.svg?url'
        { resourceQuery: /url/, type: 'asset/resource' },
        // import Icon from 'icon.svg'
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: { svgo: true, titleProp: true, ref: true },
            },
          ],
        },
      ],
    });

    return config;
  },
};

export default nextConfig;