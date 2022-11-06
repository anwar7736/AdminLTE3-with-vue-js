<template>
    <div class="hold-transition login-page">
        <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
      <span class="text-success">{{message}}</span>
      <form @submit.prevent="EmailVerify" method="post">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" v-model="form.email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Request new password</button>
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
            email : '',
        },
        errors : {},
        message: '',
    }
  },
 methods: {
  EmailVerify()
  {
    this.$store.dispatch("EMAIL", this.form)
    .then(res=>{
      console.log(res.message);
      this.form.email = '';
      this.message = res.message;
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