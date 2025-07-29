const defaultTitle = 'Mulida Rafa Kurnia - Landing Page';
const defaultDescription =
  'PT. Maulida Rafa Kurnia menyediakan layanan konsultasi IT dan pengembangan perangkat lunak yang inovatif dan terpercaya.';

const SEO = {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://www.maulidakurnia.my.id/', 
        site_name: defaultTitle,
        title: defaultTitle,
        description: defaultDescription,
        images: [
            {
                url: 'https://www.maulidakurnia.my.id/og-image.jpg', 
                width: 2550,
                height: 945,
                alt: defaultTitle,
            },
        ],
    },
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.png',
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
        },
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
    ],
    twitter: {
        handle: '@yourhandle',
        site: '@yourhandle',
        cardType: 'summary_large_image',
    },
};

export default SEO;
