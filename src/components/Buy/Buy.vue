<template>
  <div class="hello">
  <div class="top">
    <div class="topab" @click="ctiyopen()">{{toptitle}}</div>
    <div class="topst">嘟嘟巴士</div>
    <div class="tagllo">
      <div class="taglloL">
        <div class="tagllobtn">上下班</div>
      </div>
      <div class="taglloR">
         <div class="tagllobtn2">包车</div>
      </div>
    </div>
</div>
<div class="main">
      <div class="input">
        <div class="input1">
            <div class="inputT">
              <div class="IMG"></div>
              <div>{{}}</div>
            </div>
            <div class="inputB">
              <div class="IMG"></div>
              <div>{{}}</div>
            </div>
        </div>
         
      </div> 
       <div class="inputhuan">
        
      </div> 
</div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toptitle:"北京↑"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  width: 100vw;
  margin-left:-2vw;
  height: 7vh;
  background:#ff4a39;
  position: fixed;
  top: 0;
  line-height: 7vh;
  color: white;
}
.topab{
  position: absolute;
  left: 3vw;
}
.tagllo{
 padding-top: 1.5vh;
  width: 100vw;
  height: 3.6vh;
  padding-bottom: 1.5vh;
  background: #f8f8f8;
  border-bottom: 1px solid #e7e7e9;
}
.taglloL{
  width: 49.8vw;
  height: 3.6vh;
  float: left;
  border-right:  1px solid #666;}
.taglloR{
  width: 49.8vw;
  height: 3.6vh;
   float:right;
}
.tagllobtn{
  width: 90%;
  margin-left: 5%;
  color: white;
  background:#ff4a39;line-height: 3.6vh;
  border-radius: 5px;
  font-size: 14px;

}
.tagllobtn2{
  width: 90%;
  margin-left: 5%;
  color: #666;
  line-height: 3.6vh;
  border-radius: 5px;
  font-size: 14px;

}
input{
  border:none;
}
.main{
  margin-top: 15vh;
  width: 98%;
  height: 14vh;
  margin-left: 1%;
 border-radius: 8px;
 border:1px solid #e7e7e7; 
  
}
.input{
  width:80%;
  height: 100%;
  
  float: left;
}
.inputhuan{
  width: 20%;
  height: 100%;
  float:right;
 
}
{

  background: #f1f1f1;
}

</style>
1