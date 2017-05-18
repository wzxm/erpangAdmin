<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="审批事项">
      <el-input v-model="formInline.option" placeholder="审批事项"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">查询</el-button>
      <el-button type="primary" @click="openFullScreen">
        显示整页加载，3 秒后消失
      </el-button>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="open6">成功</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { Loading } from 'element-ui';

  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
          option: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      open() {
        this.$message('这是一条消息提示');
      },
      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      openFullScreen() {
        let loading = Loading.service({ fullscreen: true });
        setTimeout(() => {
          loading.close()
        }, 3000);
      }
    }
  }

</script>
<style scoped>

</style>