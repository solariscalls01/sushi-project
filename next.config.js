// This file is used to create the header security features taht we want to implement for our website. 
// https://blog.kieranroberts.dev/http-security-headers-and-how-to-set-them-in-nextjs
// https://nextjs.org/docs/pages/api-reference/next-config-js/headers

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)', // Matches all routes
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value:
                            "default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' *.somewhere.com;  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self';",
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: "camera=(); battery=(self); geolocation=(); microphone=('https://somewhere.com')",
                    },
                ],
            },
        ];
    },
};