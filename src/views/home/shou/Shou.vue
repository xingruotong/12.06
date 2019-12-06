<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=128542578,2127868912&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1396346692,1492407571&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1672477765,2527992874&fm=26&gp=0.jpg" alt="">
                </div>
            </div>
        </div>
        {{list}}
        <Dl v-for="(item, index) in list" :key="index" :item="item" />
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from 'swiper'
import Dl from '../../../components/Dl'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        Dl
    },
     computed: {
        ...mapState(['list'])
    },
    created() {
        this.getList()
    },
    methods: {
        ...mapActions(['getList'])
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: true
        })
    }
}
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 200px;
    .swiper-wrapper {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
