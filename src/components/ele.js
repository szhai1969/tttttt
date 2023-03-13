import { h, reactive } from "vue";
import { ElMessageBox } from "element-plus";

const useModel = (late, callback) => {
  let t = reactive({});
  t = ElMessageBox({
    title: "title",
    message: () =>
      h(
        late,
        {
          callback,
          close() {
            console.log(t);
          },
        },
        null
      ),
    // showCancelButton: false,
    closeOnClickModal: false,
    // showConfirmButton: false,
  });
  t.then((e) => {
    console.log("then", e);
  }).catch(() => {
    console.log("catch");
  });
};

export { useModel };
