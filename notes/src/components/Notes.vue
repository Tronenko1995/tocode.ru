<template>
    <div class="notes">
        <div class="note" :class="[{ full: !grid}, note.priority]"  v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="{ full: !grid }">
                <div @click="changeTitle(index)">
                <p>{{ note.title }}</p>
                <input type="text" :value="note.title" v-if="editTitle">
                </div>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>
            <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        },
        editTitle: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        removeNote (index) {
            console.log(`Note id - ${index} removed`)
            this.$emit('remove', index)
        },
        changeTitle (index) {
            console.log(`Change Title in ${index}`)
            this.$emit('editTitle', true)
        }
    }
}
</script>

<style lang="scss">
.notes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background: #fff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    &:hover {
        box-shadow: 0 30px 30px rgba(0,0,0,.04);
        transform: translate(0,-6px);
        transition-delay: 0s !important;
    }
    &.full {
        width: 100%;
    }
    &.important {
        background: yellow;
    }
    &.very_important {
        background: red;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-size: 32px;
        }
        p {
            color: #402caf;
            font-size: 22px;
        }
        svg {
            color: #999;
            margin-right: 12px;
            &.active {
                color: #402caf;
            }
            &:last-child {
                margin-right: 0;
            }
        }
        &.full {
            justify-content: center;
            p {
                margin-right: 16px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    &-body {
        p {
            margin: 20px 0;
        }
        span {
            font-size: 14px;
            color: #999;
        }
    }
}
</style>