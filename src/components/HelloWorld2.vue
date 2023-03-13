<script setup>
import { ref } from 'vue'
import { NSpace, NButton, NSlider } from 'naive-ui';
import { ModelHelloWorld, ModelHelloWorld2 } from "/src/auto"
import { useModel2 } from "/src/components/naive"
const props = defineProps(["model", 'callback', 'args'])

const count = ref(0)

const close = () => {

  props?.callback(count)

  props.model.destroy();
}

const newModel = () => {
  useModel2(ModelHelloWorld2, props.callback, props.args)

}

const onUpdateSider = (e) => {
  props.args.nums.value = e
}

</script>

<template>
  <div class="card">
    <n-button type="info" @click="props.args.nums.value++">count is {{ props.args.nums.value }}</n-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <n-slider :value="props.args.nums.value" :min="1" :max="100" :step="1" @update:value="onUpdateSider" />


  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <n-space justify="space-between">
    <n-button type="error" size="medium" @click="close">关闭当前</n-button>
    <n-button type="primary" size="medium" @click="newModel">套娃弹窗</n-button>

  </n-space>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
