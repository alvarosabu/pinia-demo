![Youtube - State Management with Pinia](https://user-images.githubusercontent.com/4699008/147222402-6afb2ca9-4495-4003-bf3b-4bd6694d36b5.png)


# State Management with Pinia 🌬 ⛵️

> Pinia is an intuitive Vue Store, lightweight, type-safe, with an incredible devtools integration and of course, a very tropical name.

In this tutorial, we are going to cover the basics of the library and create a basic example of a store.

## You can help me keep working on this project 💚

- [Become a Sponsor on GitHub](https://github.com/sponsors/alvarosaburido)
- [One-time donation via PayPal](https://paypal.me/alvarosaburido)

<h4 align="center">Generous Unicorns 🦄</h4>

<p align="center">
  <a href="https://github.com/OmgImAlexis" target="_blank" rel="noopener noreferrer" ">
    <img src="https://avatars.githubusercontent.com/u/6525926?v=4" height="72px"  style="border-radius: 100%; overflow: hidden; border: 4px solid #5EDCAE" alt="OmgImAlexis">
  </a>
</p>

## Pre-📦

This repo brings few things pre-packed, so you don't need to install them manually everytime.

### Styling

- [Windi CSS](https://github.com/windicss/windicss) with [`vite-plugin-windicss`](https://github.com/windicss/vite-plugin-windicss)
- Default [Google Fonts](https://github.com/stafyniaksacha/vite-plugin-fonts#readme) with `vite-plugin-fonts`

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
  - [PurgeIcons](https://github.com/antfu/purge-icons) with [`vite-plugin-purge-icons](vite-plugin-purge-icons) Think about TailwindCSS + PurgeCSS, but for Icons.
  - Custom icons below `./assets/icons` with

### Plugins

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
- Component auto-import with [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components)

### Dev tools

- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
- [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete

### Project setup

```
yarn
```

### Use it

```
yarn dev
```

This will serve the app at [http://localhost:3260](http://localhost:3260)

### Build it

```
yarn build
```

Builds the app for production to the `dist` folder.<br>
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Deployment

Visit [Netlify](https://app.netlify.com/start) and select your repo, select OK along the way, and your App will be live in a minute.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

![repository-banner.png](https://res.cloudinary.com/alvarosaburido/image/upload/v1612193118/as-portfolio/Repo_Banner_kexozw.png)
