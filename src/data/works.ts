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
        topinfo: "rest API",
        title: "FxShop",
        subtitle: "online shop",
        description:
            "Online shop with full working cms written on the MERN stack with redux",
        actions: [
            {
                text: "source (server-side)",
                url: "https://github.com/XkoderFX/FxShopAPI",
            },

            {
                text: "source (client-side)",
                url: "https://github.com/XkoderFX/FxShopClient",
            },
            {
                text: "Deployment ",
                url: "https://fx-shop.herokuapp.com/",
            },
        ],
    },

    {
        topinfo: "pure javascript",
        title: "Flexcel",
        subtitle: "excel clone",
        description:
            "Excel clone created only with pure typescript and webpack without any frameworks",
        actions: [
            {
                text: "Source code",
                url: "https://github.com/XkoderFX/FlexExcel",
            },
            {
                text: "Deployment",
                url: "https://xkoderfx.github.io/fx-excel-deploy/",
            },
        ],
    },
];

export default works;
