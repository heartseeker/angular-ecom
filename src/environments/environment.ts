// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyARoUUdbvTlrXBDM3fEy64lskJEGYi18T0',
    authDomain: 'angular-ecom.firebaseapp.com',
    databaseURL: 'https://angular-ecom.firebaseio.com',
    projectId: 'angular-ecom',
    storageBucket: 'angular-ecom.appspot.com',
    messagingSenderId: '273383936433'
  }
};
