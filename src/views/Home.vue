<template>
    <div>
      <div class="small_home">
        <div class="big_home">
           <div class="home_swiper">
              <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in swiper" :key="index">
                   <div class="swiper_div">
                      <img :src="item.banner_img" alt="">
                   </div>
                </van-swipe-item>
              </van-swipe>
           </div>
           <div class="home_introduce">
             <div class="introduce_box">
                <div v-for="(item, index) in introduce" :key="index">
                  <img :src="item.img" alt="">
                  <p>{{item.text}}</p>
                </div>
             </div>
           </div>
           <div>
              <Appindex />
           </div>
        </div>
      </div>

    </div>
</template>

<script>
import Appindex from '../components/Appindex'
    export default {
        data() {
            return {
                swiper:[],
                introduce:[]
            }
        },
        components:{
            Appindex
        },
        methods: {
            async appswiper(){
                let {data:res} = await this.$http.get('/api/app/banner')
                this.swiper = res.data
            }
        },
        mounted(){
            this.appswiper()
            this.$http.get('http://localhost:8080/introduce.json').then((res)=>{
                this.introduce = res.data
            })
        }
    }
</script>

<style scoped>
.small_home{
    width: 100%;
    height: 686px;
    overflow: scroll;
}
.big_home{
    width: 100%;
    height: auto;
    background-color: gainsboro;
}
.home_swiper{
    width: 100%;
    height: 200px;
}
.swiper_div{
    width: 100%;
    height: 200px;
}
.swiper_div img{
    width: 100%;
    height: 100%;
}
.home_introduce{
    width: 100%;
    height: 80px;
    position: relative;
}
.introduce_box{
    width: 95%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -30px;
}
.introduce_box div{
    width: 25%;
    height: 100%;
    border-radius: 10%;
    background-color: white;
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.introduce_box div img{
    width: 35%;
    height: 35%;
}
</style>