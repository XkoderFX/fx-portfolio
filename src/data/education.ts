interface Action {
    text: string;
    url: string;
}

export interface EducationData {
    kind: string;
    title: string;
    organization: string;
    actions: Action[];
}

export const educations: EducationData[] = [
    {
        kind: "certificate",
        organization: "Udemy",
        title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        actions: [
            {
                text: "certificate",
                url:
                    "https://www.udemy.com/certificate/UC-3184903f-05ba-4932-b1d7-d12f0c978ab7/",
            },
        ],
    },

    {
        kind: "certificate",
        organization: "Udemy",
        title: "MERN eCommerce From Scratch",
        actions: [
            {
                text: "certificate",
                url:
                    "https://www.udemy.com/certificate/UC-36b6ec0d-b5e8-4ea0-a332-de8856b7e7ee/",
            },
        ],
    },
];
