import { View, ViewComponentModules } from '@porrtal/r-api';

export const testModules: ViewComponentModules = {
  '@porrtal-components/r-first-test-comp-lib': () =>
    import('@porrtal-components/r-first-test-comp-lib'),
  '@porrtal-components/r-second-test-comp-lib': () =>
    import('@porrtal-components/r-second-test-comp-lib'),
};

export const testViews: View[] = [
  {
    viewId: 'one-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'one-nav',
    displayText: 'one',
    displayIcon: 'home',
  },
  {
    viewId: 'two-nav',
    paneType: 'nav',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'two-nav',
    displayText: 'two',
    displayIcon: 'settings',
  },
  {
    viewId: 'one-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'one-main',
    displayText: 'one',
    displayIcon: 'home',
  },
  {
    viewId: 'account-one',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'account',
    key: 'account-one',
    displayText: 'account-one',
    displayIcon: 'settings',
  },
  {
    viewId: 'account-two',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'account',
    key: 'account-two',
    displayText: 'account-two',
    displayIcon: 'settings',
  },
  {
    viewId: 'appointment-one',
    paneType: 'main',
    launchAtStartup: false,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    entityType: 'appointment',
    key: 'appointment-one',
    displayText: 'appointment-one',
    displayIcon: 'settings',
  },
  {
    viewId: 'three-main',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'three-main',
    displayText: 'three',
    displayIcon: 'account_circle',
  },
  {
    viewId: 'first-test-comp',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'first-test-comp',
    displayText: '@porrtal-components/r-first-test-comp-lib',
    displayIcon: 'power',
  },
  {
    viewId: 'first-search-comp',
    paneType: 'search',
    launchAtStartup: true,
    componentName: 'TestCompsFirstTestComp',
    componentModule: '@porrtal-components/r-first-test-comp-lib',
    key: 'first-search-comp',
    displayText: 'find stuff',
    displayIcon: 'power',
  },
];
