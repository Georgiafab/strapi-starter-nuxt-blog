<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"> <router-link to="/">首页</router-link> </el-menu-item>
      <el-submenu index="2">
        <template slot="title">分类</template>
        <el-menu-item
          v-for="category in categories"
          :key="category.id"
          :index="categoryItemId(category.id)"
          ><router-link
            :to="{ name: 'categories-id', params: { id: category.id } }"
            tag="a"
            >{{ category.name }}
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/test">消息中心</router-link></el-menu-item>
    </el-menu>
    <nuxt />
    <div class="footer">
      <p>这里是底部</p>
      <p>Copyright © 2020 iMyFone Technology Co., Ltd. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";

export default {
  data() {
    return {
      categories: [],
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    categoryItemId:function(id){
       return `2-${id}`;
     }
  },
  computed:{
     
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>
