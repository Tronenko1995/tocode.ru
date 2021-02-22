<template>
    <div class="wrapper-content wrapper-content--fixed">
        <div class="container">
            <section>
                <h1>Shop Page</h1>
                    <div class="item__wrap">
                        <shopItem 
                        v-for="product in shopList" :key="product.id"
                        :product="product"/>
                    </div>
            </section>
        </div>
    </div>
</template>

<script>
import shopItem from '@/components/ShopItem.vue'
export default {
    components: { shopItem },
    data () {
        return {
            shopList: null
        }
    },
    created () {
        this.shopList = this.$store.getters.getShopList
        console.log(this.shopList)
    }
}
</script>
