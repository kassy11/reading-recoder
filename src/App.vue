<template>
  <div id="app">
    <h2>ReadingRecoder</h2>
    <el-menu mode='horizontal' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to='/'>Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to='/search'>Search</router-link>
      </el-menu-item>
      <el-submenu index="3">
        <template v-slot:title>Support</template>
        <el-menu-item index="3-1">
          <a href="https://google.com">Author</a>
        </el-menu-item>
        <el-menu-item index="3-2">
          <a href="https://google.com">Help</a>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
