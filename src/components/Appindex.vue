<template>
    <div>
       <div class="home_appindex" v-for="(item, index) in appdata" :key="index">
         <div class="appindex_one" v-if="item.channel_info.type == 3">
           <div class="appindex_tittle">{{item.channel_info.name}}</div>
           <div v-for="(a , b) in item.list" :key="b">
             <div>{{a.teacher_name}}</div>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                appdata:[]
            }
        },
        methods: {
            async appindex(){
                let {data:res} = await this.$http.get('api/app/recommend/appIndex')
                this.appdata = res.data
                
            }
        },
        mounted(){
            this.appindex()
        }
    }
</script>

<style scoped>
.home_appindex{
    width: 100%;
    height: auto;
}
.appindex_one{
    width: 90%;
    margin: 0 auto;
}
.appindex_tittle{
    width: 100%;
    height: 40px;
    background-color: pink;
    font-size: 18px;
    line-height: 40px;
}
</style>