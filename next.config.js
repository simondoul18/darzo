/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }));
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'marketplace.kapili-crm.local',
                port: '',
                pathname: '/storage/**',
            },
            {
                protocol: 'https',
                hostname: 'api.feuzion.com',
                port: '',
                pathname: '/storage/**',
            }
        ]
    }

};
module.exports = nextConfig;