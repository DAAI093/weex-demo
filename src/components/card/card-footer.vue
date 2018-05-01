<template>
    <div class="wrapper">
        <div class="tagAll">
            <text class="sourceName">{{source}}</text>
            <div class="tag" v-for="(num,index) in data.tags" :key='index'>
              <text class="tags">{{num}}</text>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: Object,
    source: String
  }
}
</script>

<style scoped>
.tagAll{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.sourceName{
  font-size: 18px;
  background-color: #fff;
  color: #a3a4a6;
  padding: 1px 2px;
  justify-content: flex-start;
}
.tag {
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-left:10px;
  padding: 1px 2px;
}
.tags {
  font-size: 15px;
  color: #41b883;
  background-color: #fff;
  padding: 1px 2px;
}
</style>
