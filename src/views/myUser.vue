<!-- eslint-disable vue/no-duplicate-attributes -->
<template>
  <form>
    <label>
      用户名：
      <input type="text" v-model="username" />
    </label>
    <br />
    <label>
      密码：
      <input type="password" v-model="password" id="password" />
    </label>
    <br />
    <label>
      确认密码：
      <input type="password" v-model="password2" id="password2" />
    </label>
    <br />
    <button type="button" @click="checkPassword">提交</button>
    <button type="button" @click="showPassword">密码可见</button>
  </form>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      passwordVisible: false,
    };
  },
  methods: {
    checkPassword() {
      const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
      );
      if (!this.username) {
        alert("请输入用户名");
        return;
      }
      if (!strongRegex.test(this.password)) {
        alert("密码应当超过8位字符，且必须包含大小写字母和数字");
        return;
      }
      if (this.password !== this.password2) {
        alert("密码和确认密码不一致");
        return;
      }
      alert("注册成功");
    },
    showPassword() {
      this.passwordVisible = !this.passwordVisible;
      let passwordInput = document.getElementById("password");
      let password2Input = document.getElementById("password2");
      if (this.passwordVisible) {
        passwordInput.type = "text";
        password2Input.type = "text";
      } else {
        passwordInput.type = "password";
        password2Input.type = "password";
      }
    },
  },
};
</script>
  
  <style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="button"] {
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button[type="button"]:hover {
  background-color: #3e8e41;
}
</style>