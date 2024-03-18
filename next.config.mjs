/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'h6ehuppxmotqy4eu.public.blob.vercel-storage.com'
            }
        ]
    }
};

export default nextConfig;
