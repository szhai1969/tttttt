import { defineAsyncComponent } from "vue";
const components = import.meta.globEager("/src/components/*.vue");
console.log(components);

const result = {};

import ModelHelloWorld from "./components/HelloWorld.vue";
import ModelHelloWorld2 from "./components/HelloWorld2.vue";

// for (const [key, value] of Object.entries(components)) {
//   const name =
//     "Model" +
//     key
//       .replace("/src/components/", "")
//       .replace("/index.vue", "")
//       .replace(".vue", "")
//       .split("/")
//       .map((e) => e[0].toUpperCase() + e.substring(1))
//       .join("");
//   console.log("😂==>：name:", name, key);
//   //app.component(name, value);
//   result[name] = defineAsyncComponent(() => {
//     import(key);
//   });
// }
console.log(result);

export { ModelHelloWorld, ModelHelloWorld2 };
