<template>
    <div class="container">
        <el-button @click="testFunc">home </el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useNumStore } from "@/store/modules/num"

const { count, increment, doubleCount } = useNumStore()

console.log("1. num", count)

console.log("2. increment", increment(), count)

const testFunc = () => {
    increment()
    console.log("🚀 ~ testFunc ~ testFunc:", count)
    console.log("addNum", doubleCount)
}
</script>

<style lang="scss" scoped></style>
