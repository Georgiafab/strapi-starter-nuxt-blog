<template>
  <div class="test">

    <h2>下面是cms管理系统里的数据</h2>
    <div>{{single.desi}}</div>


    <h2>下面是请求来的数据</h2>
    <ul>

      <li v-for="item in list" :key="item.id">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
        <img :src="item.companyPic" alt="tem.title">
      </li>

    </ul>
  </div>
</template>

<script>
import axios from "axios";
import singleQuery from "~/apollo/queries/single/single";
export default {
  data() {
    return {
      list: [],
      single:{}
    };
  },
  asyncData() {
    return axios.get(`http://www.tenk.top:9000/api/list`)
      .then((res) => {
        return { list: res.data.data};
      });
  },
  apollo: {
    single: {
      prefetch: true,
      query: singleQuery
    }
  }
};
</script>

<style></style>
