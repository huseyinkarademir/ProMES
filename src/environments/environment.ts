import team1 from './team1/urls'

export let environment = {
    production: false,
    localRoute: false,
    apiLocal: 'https://localhost/SAHK.{{api}}.API',
    api: {
        ...team1,
        Framework: 'https://sahk.dev.../common/framework',
        Filters: 'https://sahk.dev.../common/filters',
        Menu: 'https://sahk.dev.../common/menu'
    },
    rancher: 'https://sahk.dev.../{{api}}',
    version: '',
    environment: 'DEV',
    imgHref: '/assets/img',
    applicationName: 'SAHK_WEB_DEV',
    logLevel: 'Information',
    auth: {
        stsUrl: 'https://stsdev..../sts',
        clientId: 'SahkNetCore',
        redirectPath: '/signin-oidc',
        logoutPath: '/signout-callback-oidc'
    }
};

export const ConstAppConfig = environment;