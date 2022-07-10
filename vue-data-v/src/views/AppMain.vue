<template>
  <el-container>
    <el-aside width="auto"><HeaderVue></HeaderVue></el-aside>
    <el-container>
      <el-header>
      </el-header>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import HeaderVue from "@components/Header.vue"
</script>
<style lang="less" scoped>
@width: 200px;
@height: @width + 10px;
h1 {
  width: @width;
  height: @height;
  background-color: aquamarine;
}
</style>
