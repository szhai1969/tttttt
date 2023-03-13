import { createDiscreteApi } from "naive-ui";
import { h } from "vue";
const { dialog } = createDiscreteApi(["dialog", "message"]);

const useModel2 = (late, callback, args) => {
  const t = dialog.create({
    title: "title",
    showIcon: false,
    content: () =>
      h(
        late,
        {
          model: t,
          callback,
          args,
        },
        null
      ),
  });
};

export { useModel2 };
