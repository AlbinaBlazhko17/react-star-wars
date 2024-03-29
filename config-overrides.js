const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@containers': 'src/containers',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@assets': 'src/assets',
        '@hooks': 'src/hooks',
        '@ui': 'src/components/Ui',
        '@store': 'src/store',
        '@context': 'src/context',

    })(config);
    return config;
}