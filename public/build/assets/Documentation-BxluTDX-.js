import{aU as e,c as t,aV as s,f as d}from"./app-BTf9-ai_.js";const i={},o={class:"card"};function l(n,a){return d(),t("div",o,a[0]||(a[0]=[s(`<div class="font-semibold text-2xl mb-4" data-v-8b29978d>Documentation</div><div class="font-semibold text-xl mb-4" data-v-8b29978d>Get Started</div><p class="text-lg mb-4" data-v-8b29978d> Sakai is an application template for Vue based on the <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-8b29978d>create-vue</a>, the recommended way to start a <strong data-v-8b29978d>Vite-powered</strong> Vue projects. To get started, clone the <a href="https://github.com/primefaces/sakai-vue" class="font-medium text-primary hover:underline" data-v-8b29978d>repository</a> from GitHub and install the dependencies with npm or yarn. </p><pre class="app-code" data-v-8b29978d><code data-v-8b29978d>git clone https://github.com/primefaces/sakai-vue
npm install
npm run dev</code></pre><p class="text-lg mb-4" data-v-8b29978d>Navigate to <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8b29978d>http://localhost:5173/</i> to view the application in your local environment.</p><pre class="app-code" data-v-8b29978d><code data-v-8b29978d>npm run dev</code></pre><div class="font-semibold text-xl mb-4" data-v-8b29978d>Structure</div><p class="text-lg mb-4" data-v-8b29978d>Templates consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="leading-normal list-disc pl-8 text-lg mb-4" data-v-8b29978d><li data-v-8b29978d><span class="text-primary font-medium" data-v-8b29978d>src/layout</span>: Main layout files, needs to be present.</li><li data-v-8b29978d><span class="text-primary font-medium" data-v-8b29978d>src/views</span>: Demo pages like Dashboard.</li><li data-v-8b29978d><span class="text-primary font-medium" data-v-8b29978d>public/demo</span>: Assets used in demos</li><li data-v-8b29978d><span class="text-primary font-medium" data-v-8b29978d>src/assets/demo</span>: Styles used in demos</li><li data-v-8b29978d><span class="text-primary font-medium" data-v-8b29978d>src/assets/layout</span>: SCSS files of the main layout</li></ul><div class="font-semibold text-xl mb-4" data-v-8b29978d>Menu</div><p class="text-lg mb-4" data-v-8b29978d> Main menu is defined at <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8b29978d>src/layout/AppMenu.vue</span> file. Update the <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8b29978d>model</i> property to define your own menu items. </p><div class="font-semibold text-xl mb-4" data-v-8b29978d>Layout Composable</div><p class="text-lg mb-4" data-v-8b29978d> The <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8b29978d>src/layout/composables/layout.js</span> is a composable that manages the layout state changes including dark mode, PrimeVue theme, menu modes and states. If you change the initial values like the preset or colors, make sure to apply them at PrimeVue config at main.js as well. </p><div class="font-semibold text-xl mb-4" data-v-8b29978d>Tailwind CSS</div><p class="text-lg mb-4" data-v-8b29978d>The demo pages are developed with Tailwind CSS however the core application shell mainly uses custom CSS.</p><div class="font-semibold text-xl mb-4" data-v-8b29978d>Variables</div><p class="text-lg mb-4" data-v-8b29978d> CSS variables used in the template derive their values from the PrimeVue styled mode presets, use the files under <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base" data-v-8b29978d>assets/layout/_variables.scss</span> to customize according to your requirements. </p>`,17)]))}const p=e(i,[["render",l],["__scopeId","data-v-8b29978d"]]);export{p as default};
