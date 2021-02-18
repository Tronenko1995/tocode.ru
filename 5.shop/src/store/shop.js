export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike Red',
                descr:  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.',
                img: require('../assets/img/1.png')
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getShopList(state) {
            return state.shopList
        }
    }
}