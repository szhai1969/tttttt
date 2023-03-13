<script setup>

import { ref } from 'vue'
import { ElMessageBox } from "element-plus";
import { useModel } from "/src/components/ele"

import { ModelHelloWorld, ModelHelloWorld2 } from "/src/auto"
const count = ref(0)
const onclick = () => {
  useModel(ModelHelloWorld, props.callback)
}
const props = defineProps(['callback', 'close'])

const close = () => {

  //props?.callback(count)
  // ElMessageBox.close()
  (props.close())

}

</script>

<template>
  <div class="card">
    <el-button type="success" @click="count++">count is {{ count }}</el-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <el-space alignment="end">

    <el-button type="danger" @click="close">关闭当前</el-button>
    <el-button type="primary" @click="onclick">套娃窗口</el-button>
  </el-space>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
