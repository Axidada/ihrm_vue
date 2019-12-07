<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2"> <router-link to="/Index/company">某某企业</router-link> </el-menu-item>
      <!--<el-submenu index="2">
        <template slot="title">某某企业</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>-->
      <el-menu-item index="3">组织结构</el-menu-item>
      <el-menu-item index="4">用户</el-menu-item>
      <el-menu-item index="5">角色</el-menu-item>
      <el-menu-item index="6">权限</el-menu-item>
      <el-menu-item index="7">工资</el-menu-item>
      <el-menu-item index="8">社保</el-menu-item>
      <el-menu-item index="9">考勤</el-menu-item>
      <el-menu-item index="10">招聘</el-menu-item>
      <el-menu-item index="11">审批</el-menu-item>
      <el-menu-item index="12">公告</el-menu-item>
    </el-menu>


    <router-view/>


  </div>
</template>

<script>

export default {
  name: 'Index',
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: '1',

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath);
    }
  },
  created(){

  }

}
</script>

<style>

</style>
