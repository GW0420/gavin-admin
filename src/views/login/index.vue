<template>
  <div class="login">
    <el-form ref="formRef" :model="form" :rules="rules">
      <div class="title">用户登录</div>
      <el-form-item prop="username">
        <svg-icon icon="user" class="icon"></svg-icon>
        <el-input type="text" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <svg-icon icon="password" class="icon"></svg-icon>
        <el-input :type="isType" v-model="form.password"></el-input>
        <svg-icon
          :icon="isType === 'text' ? 'eye-open' : 'eye'"
          class="icon eye"
          @click="handlePasswordType"
        ></svg-icon>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" :loading="loading" @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

// 定义表单信息
const form = reactive({
  username: 'admin',
  password: '123456'
})
// 定义dom元素节点
const formRef = ref()
// 表单校验规则
const rules = ref({
  username: [
    {
      required: true,
      message: '用户名或密码错误',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '用户名或密码错误',
      trigger: 'blur'
    }
  ]
})
// 密码框动态展示
const isType = ref('password')
const handlePasswordType = () => {
  if (isType.value === 'password') {
    isType.value = 'text'
  } else {
    isType.value = 'password'
  }
}
// 用户登录
const loading = ref(false)
const store = useStore()
const handleLogin = () => {
  loading.value = true
  formRef.value.validate(async valid => {
    if (!valid) return
    await store.dispatch('user/login', form)
    loading.value = false
  })
}
</script>

<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  .el-form {
    width: 500px;
    height: 400px;
    padding: 20px;
    margin-top: 100px;
    .title {
      font-size: 35px;
      color: #fff;
      text-align: center;
      margin-bottom: 10px;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-input {
      display: inline-block;
      width: 85%;
      line-height: 40px;
      .el-input__inner {
        background: transparent;
        border-radius: 0px;
        border: none;
        box-shadow: none;
        color: #fff;
      }
    }
    .icon {
      padding-left: 10px;
      color: #889aa4;
      &.eye {
        cursor: pointer;
      }
    }
  }
}
</style>
