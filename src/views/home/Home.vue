<template>
    <div class="home_wrap">
        <div class="home_head">

        </div>
        <div class="home_main">
            <router-view></router-view>
        </div>
        <div class="home_foot">
            <router-link to="/home/shou">首页</router-link>
            <router-link to="/home/my">我的</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
}
.home_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.home_head {
    width: 100%;
    height: 45px;
}
.home_main {
    flex: 1;
    overflow: auto;
}
.home_foot {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
