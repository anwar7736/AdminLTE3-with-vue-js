<template>
  <div class="hold-transition login-page">
    <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
      <span class="text-success">{{message}}</span>
      <form @submit.prevent="ResetPassword" method="post">
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="form.password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Confirm Password" v-model="form.password_confirmation">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Change password</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <p class="mt-3 mb-1">
        <router-link to="/">Login</router-link>   
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
  </div>
</template>

<script>
export default {
    data(){
     return {
        form:{
            password : '',
            password_confirmation : '',
            token: this.$route.query.token,
        },
        errors : {},
        message: '',
    }
  },
 methods: {
    ResetPassword()
  {
    this.$store.dispatch("RESET", this.form)
    .then(res=>{
      console.log(res.message);
      this.form = {
            password : '',
            password_confirmation : '',
        };
      this.message = res.message;
      this.errors = {};
      setTimeout(()=>{
        this.$router.push('/');
      },1000)
    })
    .catch(err=>{
      this.errors = err.response.data.errors;
    })
  }
 },

}
</script>

<style>

</style>