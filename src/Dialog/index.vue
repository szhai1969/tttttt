<template>
    <div class="el-overlay is-message-box" style="z-index: 2012;">
        <div role="dialog" aria-modal="true" aria-describedby="el-id-5990-0" class="el-overlay-message-box"
            aria-label="title">
            <div class="el-message-box" tabindex="-1">
                <div class="el-message-box__header">
                    <div class="el-message-box__title"><!--v-if--><span>title11</span></div><button type="button"
                        @click="close" class="el-message-box__headerbtn" aria-label="Close this dialog"><i
                            class="el-icon el-message-box__close"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                                </path>
                            </svg></i></button>
                </div>
                <div class="el-message-box__content">
                    <div class="el-message-box__container"><!--v-if-->
                        <div class="el-message-box__message">
                            <slot></slot>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script  setup>
import { ElButton } from "element-plus";

const props = defineProps(['close', 'title']);



const close = () => {
    props.close()
}



</script>

