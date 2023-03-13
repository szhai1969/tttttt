<template>
    <div>

        <el-button @click="close"> 关闭3</el-button>
    </div>
</template>
<script  setup>
import { ElButton } from "element-plus";

const props = defineProps(['close', 'title']);



const close = () => {
    props.close()
}

console.log(props)

</script>
