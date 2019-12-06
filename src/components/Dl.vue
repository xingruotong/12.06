<template>
    <div class="dl">
        <img :src="item.img" alt="">
        <p>{{item.name}}</p>
    </div>
</template>

<script>

export default {
    props: ['item'],
}
</script>

<style scoped lang="scss">
.dl {
    width: 100px;
    height: 70px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
