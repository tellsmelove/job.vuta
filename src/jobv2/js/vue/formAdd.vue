<template>
    <div>
        <slot/>
        <v-add-content
            id="test"
            :name="name"
            :val="v"
            v-for="(v, key) of newArray"
            :option="option"
            :key="key"
            :iskey="key"
            @remove="remove = $event"
            :placeholder="placeholder"
        ></v-add-content>
        <div class="form-add" @click.prevent="add">
            <slot name="add_more" />
        </div>
    </div>
</template>
<script>
import vAddContent from "./vAddContent.vue";
export default {
    components: {
        vAddContent
    },
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            newArray: [],
            option: [],
            remove: null
        };
    },
    watch: {
        remove() {
            if (this.remove && this.remove[1]) {
                this.removeForm(this.remove[0]);
            }
            return (this.remove = null);
        },
        newArray() {
            return this.newArray;
        }
    },
    methods: {
        add() {
            let check = this.newArray[this.newArray.length - 1];
            if (this.newArray.length === 0 || (check[0] && check[1])) {
                this.newArray.push(["", ""]);
            }
        },
        removeForm(data) {
            let arr = this.newArray;
            arr.splice(Number(data), 1);
        }
    },
    created() {
        let target = document.getElementById(this.id);
        let opt = target.querySelectorAll("option");
        for (let op of opt) {
            this.option.push({
                val: op.value,
                text: op.innerText
            });
        }
    }
};
</script>