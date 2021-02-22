export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                descr:  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.',
                img: require('../assets/img/1.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/1.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/2.png') },
                    { name: 'Nike boots Thrid', img: require('../assets/img/3.png') },
                ]
            },
            {
                id: 2,
                title: 'Nike Default',
                descr:  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.',
                img: require('../assets/img/4.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/4.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/5.png') },
                    { name: 'Nike boots Thrid', img: require('../assets/img/6.png') },
                ]
            },
            {
                id: 3,
                title: 'Nike Green',
                descr:  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.',
                img: require('../assets/img/7.png'),
                gallery: [
                    { name: 'Nike boots First', img: require('../assets/img/7.png') },
                    { name: 'Nike boots Second', img: require('../assets/img/8.png') },
                    { name: 'Nike boots Thrid', img: require('../assets/img/9.png') },
                ]
            },
            {
                id: 4,
                title: 'Nike Street',
                descr:  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.',
                img: require('../assets/img/10.png'),
                gallery: [
                    { name: 'Nike boots Second', img: require('../assets/img/11.png') },
                    { name: 'Nike boots Thrid', img: require('../assets/img/12.png') },
                ]
            },
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}