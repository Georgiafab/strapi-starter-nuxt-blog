<template>
  <div class="test">
   <div> {{ title }}</div>
    <div>{{single.desi}}</div>
  </div>
</template>

<script>
import axios from "axios";
import singleQuery from "~/apollo/queries/single/single";
export default {
  data() {
    return {
      title: {},
      single:{}
    };
  },
  asyncData() {
    return axios.get(`https://elm-api.caibowen.net/common/getAddress`)
      .then((res) => {
        console.log(res.statusText);
        // console.log(req);
        return { title: res.statusText };
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
