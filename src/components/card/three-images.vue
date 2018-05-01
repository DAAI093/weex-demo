<template>
    <div class="wrapper" :data="data">
      <div class="spaceBt" >
        <text class="text" :style="data.thumbnails[0]?{width:'651px',height:'50px'}:{width:'651px',height:'100px',fontSize:'29px'}">{{data.title}}</text>
        <div class="img1" :style="data.thumbnails[0]? {width:'681px',height:'186px'}:{width:'0px',height:'0px'}">
          <image class="img" :style="data.thumbnails[0]? {borderRadius:'10px',width:'216px',height:'156px'}:{width:'0px',height:'0px'}" :src="(data.thumbnails[0]?data.thumbnails[0].url:'')"/>
          <image class="img center" :style="data.thumbnails[1]? {borderRadius:'10px',width:'216px',height:'156px'}:{width:'0px',height:'0px'}" :src="(data.thumbnails[1]?data.thumbnails[1].url:'')"/>
          <image class="img" :style="data.thumbnails[2]? {borderRadius:'10px',width:'216px',height:'156px'}:{width:'0px',height:'0px'}" :src="(data.thumbnails[2]?data.thumbnails[2].url:'')"/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style scoped>
.spaceBt{
  width: 651px;
  height: auto;
  flex-direction: row;
  justify-content:flex-start;
  flex-wrap: wrap;
}
.text {
  width: 435px;
  height: auto;
  font-size: 28px;
  color: #333333;
  font-weight: 700;
  padding: 5px;
}
.img1 {
  width: 681px;
  height: auto;
  margin-top:5px;
  flex-direction: row;
  justify-content:flex-start;
  flex-wrap: wrap;
}
.img {
  margin-top: 2px;
  flex-direction: row;
  justify-content:flex-start;
}
.center{
  margin-left: 2px;
  margin-right: 2px;
}
</style>
