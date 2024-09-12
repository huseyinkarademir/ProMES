import team1 from './team1/urls.prod'

export let environment = {
    production: true,
    localRoute: false,
    apiLocal: 'https://localhost/SAHK.{{api}}.API',
    api: {
        ...team1,
        Framework: 'https://sahk.prod.../common/framework',
        Filters: 'https://sahk.prod.../common/filters',
        Menu: 'https://sahk.prod.../common/menu'
    },
    rancher: 'https://sahk.prod.../{{api}}',
    version: '',
    environment: 'prod',
    imgHref: '/assets/img',
    applicationName: 'SAHK_WEB',
    logLevel: 'Warning',
    auth: {
        stsUrl: 'https://..../sts',
        clientId: 'SahkNetCore',
        redirectPath: '/signin-oidc',
        logoutPath: '/signout-callback-oidc'
    }
};

export const ConstAppConfig = environment;