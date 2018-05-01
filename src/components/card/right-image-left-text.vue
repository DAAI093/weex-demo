<template>
    <div class="wrapper" :data="data">
      <div class="spaceBt" >
        <text class="text" :style="data.thumbnails[0]?{width:'435px',height:'156px'}:{width:'651px',height:'100px',fontSize:'29px'}">{{data.title}}</text>
        <div class="img1" :style="data.thumbnails[0]? {width:'216px',height:'156px'}:{width:'0px',height:'0px'}">
          <image class="img" :style="data.thumbnails[0]? {borderRadius:'10px',width:'216px',height:'156px'}:{width:'0px',height:'0px'}" :src="(data.thumbnails[0]?data.thumbnails[0].url:'')"/>
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
  flex-direction: row;
  justify-content: space-between;
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
  width: 218px;
  height: auto;
  margin-top:5px;
}
.img {
  margin-top: 2px;
}
</style>
