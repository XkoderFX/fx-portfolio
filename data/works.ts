interface Action {
    text: string;
    url: string;
}

export interface Work {
    topinfo: string;
    title: string;
    subtitle: string;
    description: string;
    actions: Action[];
}

const works: Work[] = [
    {
        topinfo: 'rest API',
        title: 'FxShop',
        subtitle: 'online shop',
        description:
            'Online shop with full working cms written on the MERN stack with redux',
        actions: [
            {
                text: 'source (server-side)',
                url: 'https://github.com/XkoderFX/FxShopAPI',
            },

            {
                text: 'source (client-side)',
                url: 'https://github.com/XkoderFX/FxShopClient',
            },
            {
                text: 'Deployment ',
                url: 'https://fx-shop.herokuapp.com/',
            },
        ],
    },

    {
        topinfo: 'pure javascript',
        title: 'Flexcel',
        subtitle: 'excel clone',
        description:
            'Excel clone created only with pure typescript and webpack without any frameworks',
        actions: [
            {
                text: 'Source code',
                url: 'https://github.com/XkoderFX/FlexExcel',
            },
            {
                text: 'Deployment',
                url: 'https://xkoderfx.github.io/fx-excel-deploy/',
            },
        ],
    },

    {
        topinfo: 'react native and expo',
        title: 'Simple Eat',
        subtitle: 'search for food with ease',
        description:
            'restaurants finding app with map and account management with mock data',
        actions: [
            {
                text: 'Source code',
                url: 'https://github.com/XkoderFX/Simple-Eat',
            },
            {
                text: 'Deployment',
                url: 'https://expo.io/@rafaelfx/projects/simple-eat',
            },
        ],
    },
    {
        topinfo: 'nextjs, react, api routes, markdown',
        title: 'Block Blog',
        subtitle: 'blog about all web development',
        description: `my personal blog about programming, especially web development. I post tutorials, reviews, news, etc. create with most modern technologies`,
        actions: [
            {
                text: 'Source code',
                url: 'https://github.com/XkoderFX/block-blog',
            },
            {
                text: 'Deployment',
                url: 'https://rafael-codeblog.vercel.app/',
            },
        ],
    },
];

export default works;
