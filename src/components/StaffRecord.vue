<template>
  <div class="staffs">
    <md-table>
      <md-table-row>
        <!-- <md-table-head md-numeric>ID</md-table-head> -->
        <md-table-head>姓名</md-table-head>
        <md-table-head>RV值</md-table-head>
        <md-table-head>力量</md-table-head>
        <md-table-head>敏捷</md-table-head>
        <md-table-head>耐力</md-table-head>
        <md-table-head>反應</md-table-head>
        <md-table-head>智慧</md-table-head>
        <md-table-head>魅力</md-table-head>
      </md-table-row>

      <md-table-row v-for="idx in [1,2,3,4]" v-bind:key="idx">
        <!-- <md-table-cell md-numeric>{{idx}}</md-table-cell> -->
        <md-table-cell>***</md-table-cell>
        <md-table-cell><span class="rv-value" v-for="n in 3" :key="n"/></md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
        <md-table-cell>{{getRandomLevel()}}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: '首頁',
      list_level: ['S', 'A', 'B', 'C', 'D'],
    };
  },
  methods: {
    getRandomLevel() {
      const i = Math.floor(Math.random() * 5);
      return this.list_level[i];
    },
  },
};
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
</style>
