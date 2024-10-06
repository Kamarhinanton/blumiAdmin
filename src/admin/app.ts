import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    theme: {
      dark:{
        colors: {
          neutral0: "#1D2939",
          neutral100: "#101828",
          neutral150: "#344054",
          neutral200: "#475467",
          neutral300: "#667085",
          neutral400: "#fff",
          neutral600: "#fff",
          primary100: "#393D4E",
          primary200: "#98A2B3",
          primary500: "#FCB0D4",
          primary600: "#FCB0D4",
          primary700: "#FDCEE3",
          secondary100: "#393D4E",
          secondary200: "#677487",
          buttonPrimary600: "#FCB0D4",
          buttonPrimary500: "#FCB0D4",
          alternative100: "#393D4E",
          alternative200: "#373737",
          success100: "#393D4E",
          success200: "#373737",
          success500: "#FCB0D4",
          success600: "#FCB0D4",
          warning100: "#393D4E",
          warning200: "#373737",
          danger100: "#393D4E",
          danger500: "#F97066",
          danger600: "#F97066",
          danger700: "#F97066",
        }
      }
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Blumi',
        'app.components.LeftMenu.navbrand.workplace': 'Blumi workplace',
        'Auth.form.welcome.title': 'Welcome to Blumi!',
        'Auth.form.welcome.subtitle': 'Log in to your Blumi account',
        'Auth.form.email.placeholder': 'examle@blumi.com',
      }
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
