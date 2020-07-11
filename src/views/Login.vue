<template>
   <div>
        <div class="rigister_title">
            <div class="rigister_img">
              <img src="../assets/msmk.png"/>
            </div>
        </div>
        <div>
          <div class="rigister_phone">
             <input type="number" name="" v-model="phone" id="" placeholder="请输入手机号">
             <button style="color:orange" @click="getCode">获取验证码</button>
          </div>
        <div class="rigister_phone">
             <input type="number" name="" id="" v-model="code" placeholder="请输入验证码">
        </div>
        <div class="rigister_phone">
          <input placeholder="*未注册的手机号将自动注册">
          <button style="color:grey">使用密码登录</button>
        </div>
        </div>
        <div class="rigister_confirm">
          <button @click="toLogin">登录</button>
        </div>  
   </div>
</template>
<script>
export default {
  data() {
    return {
      phone:"",
      code:""
    }
  },
  methods: {
   async getCode(){
    await  this.$http.post('/api/app/smsCode',{
        mobile:this.phone,
        sms_type:"login"    
      }).then((res)=>{
        window.console.log(res)
      })
    },
    async toLogin(){
      await this.$http.post('/api/app/login',{
        mobile:this.phone,
        sms_code:this.code,
        type:2,
        client:1
      }).then((res)=>{
        window.localStorage.setItem('ID',res.data.data.id)
        window.localStorage.setItem('token',res.data.data.remember_token)
        if(res.data.code === 200){
          this.$router.push('/setpassword')
        }
      })
    }
  },
  computed: {
  }
}
</script>
<style>
   .rigister_title
{
    width: 100%;
    height: 8rem;
    /* background: chartreuse; */
     display: flex;
    justify-content: center;
    align-items: center;
}
.rigister_img
{
    width: 100%;
    height: 6.5rem;
    /* background: crimson; */
     display: flex;
    justify-content: center;
    align-items: center;
}
   .rigister_phone
   {
       width: 100%;
    height: 64px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
     font-size: 0.7rem;
   }
   .rigister_phone_active
   {
       border-bottom: 1px solid rgb(218, 143, 3);
   }
   .rigister_phone input
   {    
       flex: 1;
       border: 0;
       padding-left: 20px;
       outline: none;
       
   }
   .rigister_phone button
   {
       height: 40px;
       width: 120px;
       border: 0;
       background: white;
       outline: none;
   }
   .rigister_confirm
   {
       width: 100%;
       height: 64px;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       font-size: 0.7rem;
   }
   .rigister_confirm button
   {
       width: 64%;
       height: 40px;
       color: white;
       border: 0;
       border-radius: 40px;
       background: orangered;
   }
   </style>