<template>
    <div class="new-note">
        <label>Title</label>
        <input type="text" v-model="note.title">
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <label>Priority</label>
        <div>
            <select v-model="note.priority">
                <option value="normal">normal</option>
                <option value="important">important</option>
                <option value="very_important">very important</option>
            </select>
        </div>
        <button @click="addNote" class="btn btnPrimary" style="margin: 36px 0">New note</button>
    </div>
</template>

<script>
export default {
    props: {
        note :{
            type: Object,
            required: true
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
.new-note {
    text-align: center;
}
</style>