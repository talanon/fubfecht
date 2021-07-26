<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <el-row justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple">a</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">b</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">c</div></el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
