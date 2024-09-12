import team1 from './team1/urls.stage'

export let environment = {
    production: true,
    localRoute: false,
    apiLocal: 'https://localhost/SAHK.{{api}}.API',
    api: {
        ...team1,
        Framework: 'https://sahk.test.../common/framework',
        Filters: 'https://sahk.test.../common/filters',
        Menu: 'https://sahk.test.../common/menu'
    },
    rancher: 'https://sahk.test.../{{api}}',
    version: '',
    environment: 'test',
    imgHref: '/assets/img',
    applicationName: 'SAHK_WEB_TEST',
    logLevel: 'Warning',
    auth: {
        stsUrl: 'https://ststest..../sts',
        clientId: 'SahkNetCore',
        redirectPath: '/signin-oidc',
        logoutPath: '/signout-callback-oidc'
    }
};

export const ConstAppConfig = environment;