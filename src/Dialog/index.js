import { h, createApp, ref, reactive } from "vue";

import Index from "./index.vue";
import Index3 from "../components/index2.vue";

const showDialog = () => {
  const mountNode = document.createElement("div");
  let Instance = reactive({});
  Instance = createApp(
    h(
      Index,
      {
        close: () => {
          Instance.unmount(mountNode);
          document.body.removeChild(mountNode);
        },
      },
      {
        default: () =>
          h(Index3, {
            title: "title2",
            close: () => {
              Instance.unmount(mountNode);
              document.body.removeChild(mountNode);
            },
          }),
      }
    )
  );
  Instance.mount(mountNode);
  document.body.appendChild(mountNode);

  return Instance;
};

export { showDialog };
