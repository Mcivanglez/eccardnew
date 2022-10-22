// import define nuxt plugin function
import { defineNuxtPlugin } from "#app";
// import primevue plugin function
import PrimeVue from "primevue/config";
// import prime vue directives
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
// import prime vue components
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ScrollTop from "primevue/scrolltop";
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import SpeedDial from "primevue/speeddial";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Password from "primevue/password";
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import Carousel from "primevue/carousel";
import RadioButton from "primevue/radiobutton";
// import prime vue services
import ToastService from "primevue/toastservice";
import ProgressSpinner from "primevue/progressspinner";
// import language translation
import { lang } from "./lang";

// export prime vue plugin
export default defineNuxtPlugin((nuxtApp) => {
// initialice prime vue
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    StyleClass,
    locale: lang
  });
  // initialice prime vue services
  nuxtApp.vueApp.use(ToastService);
  // load prime vue directives
  nuxtApp.vueApp.directive("styleclass", StyleClass);
  nuxtApp.vueApp.directive("ripple", Ripple);
  // load prime vue components
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("ScrollTop", ScrollTop);
  nuxtApp.vueApp.component("Divider", Divider);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("SpeedDial", SpeedDial);
  nuxtApp.vueApp.component("Accordion", Accordion);
  nuxtApp.vueApp.component("AccordionTab", AccordionTab);
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("RadioButton", RadioButton);
// other components that you need
});
