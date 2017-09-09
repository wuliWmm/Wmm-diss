<template>
  <div class="hello">
    <router-link to="buy" class="link">
        <div class="img"></div>
        <div><span>购票</span></div>
    </router-link>
    <router-link to="ride" class="link">
        <div class="img2"></div>
        <div><span>乘车</span></div>
    </router-link>
    <router-link to="my" class="link">
        <div class="img3"></div>
        <div><span>我的</span></div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },nethods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.img{
  background-image: url(../assets/22-52-20.png);
     background-position:0px 0px;
 
  width: 48px;
  height: 48px;
}
.img:hover{

     background-position:0px 48px;
}
.img2{
  background-image: url(../assets/22-52-20.png);

   background-position:113px 0px;
  width: 48px;
  height: 48px;
}
.img2:hover{
  
    background-position:113px 48px;
}
.img3{
  background-image: url(../assets/22-52-20.png);
background-position:48px 0px;
position-size:60% 60%; 
  width: 48px;
  height: 48px;
}
.img3:hover{
   
    background-position:48px 48px;
}
.link{
  width:33vw;
  height: 10vh;
  float: left;
 
}
.link div{
  margin: 0 auto;
}
.hello{
  width: 100vw;
  height: 10vh;
  position: fixed;
  bottom: 0;
}
</style>
