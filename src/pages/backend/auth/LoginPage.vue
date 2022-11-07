<template>
  <div class="hold-transition login-page">
    <div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <router-link to="/" class="h1"><b>Admin</b>LTE</router-link>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <span class="text-danger" v-if="errors.invalid">{{errors.invalid}}</span>
      <form method="post" @submit.prevent="adminLogin">
        <div class="input-group mb-3">
          <input type="email" v-model="form.email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div> 
        <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
        <div class="input-group mb-3">
          <input type="password" v-model="form.password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center mt-2 mb-3">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <router-link to="/email-verification">I forgot my password</router-link>
      </p>
      <p class="mb-0">
        <router-link to="/register" class="text-center">Register a new membership</router-link>
      </p>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
<!-- /.login-box -->
  </div>
</template>

<script>
export default {
 data(){
  return {
    form: {
    email : 'anwar@gmail.com',
    password : '12345678',
  },
  errors : {},
  }
 },

 methods: {
  adminLogin()
  {
    this.$store.dispatch("LOGIN", this.form)
    .then(res=>{
      console.log(res);
      let redirectPath = localStorage.getItem('redirect_path');
      if(redirectPath)
      {
        this.$router.push(redirectPath);
        localStorage.removeItem('redirect_path');
      }
      else this.$router.push('/home');
    })
    .catch(err=>{
      this.errors = err.response.data.errors;
    })
  }
 }

}
</script>

<style>

</style>