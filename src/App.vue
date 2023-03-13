
<script setup>

import { ElMessageBox } from "element-plus";
import { useModel } from "/src/components/ele"
import { useModel2 } from "/src/components/naive"
import { ModelHelloWorld, ModelHelloWorld2 } from "/src/auto"
import { NButton, NSpace, NNumberAnimation, useDialog } from "naive-ui"
import { Button as AButton } from "ant-design-vue"
import { showDialog } from "./Dialog/index"
import { Modal } from 'ant-design-vue';
import { ref } from "vue"
const nums = ref(10)
const onclick = () => {
  useModel(ModelHelloWorld, callback, { nums })

  //showDialog()

}
const onclick2 = () => {
  useModel2(ModelHelloWorld2, callback, { nums })
}

const onclick4 = () => {
  //useModel(ModelHelloWorld, callback, { nums })

  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after   second.`,
  });
  console.log(modal)

}
const onclick3 = () => {
  //useModel(ModelHelloWorld, callback, { nums })

  //showDialog()

}
const callback = (e) => {

  console.log("callback", e)
}

//console.log(ModelHelloWorld)
</script>

<template>
  <div>
    <n-space>
      <el-button type="primary" @click="onclick3">自定义</el-button>
      <el-button type="primary" @click="onclick">ele-UI</el-button>
      <n-button type="primary" size="medium" @click="onclick2">naive-ui {{ nums }}</n-button>
      <a-button type="primary" @click="onclick4">Primary Button</a-button>

    </n-space>
    <div style="">

    </div>


  </div>
</template>

<style scoped></style>
