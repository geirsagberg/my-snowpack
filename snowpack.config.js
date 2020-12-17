/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    wwwroot: { url: '/', static: true },
    src: '/dist',
  },

  install: ['react/jsx-runtime'],
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
  ],
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2020',
    },
  },
}
