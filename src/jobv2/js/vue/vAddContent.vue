<template>
    <div class="v-form" v-if="render">
        <select class="v-select-add" v-model="value[0]">
            <slot/>
            <option v-for="(opt, key) in option" :value="opt.val" :key="key">{{opt.text}}</option>
        </select>
        <div class="v-textare-add">
            <textarea rows="1" :placeholder="placeholder" v-model="value[1]"></textarea>
        </div>
        <input type="text" :name="name + '[]'" v-model="value" hidden>
        <div class="v-content-close" @click.prevent="remove(); render = false">
            <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-minus fa-stack-1x fa-inverse"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        val: {
            type: [String, Array, Object],
            default: null,
            required: true
        },
        placeholder: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        option:{
            type: Array,
            default: (data) => {
                return []
            },
        },
        iskey:{
            type: [String, Number],
            default: null,
        },
    },
    data() {
        return {
            render: true,
            value: null
        };
    },
    methods:{
        remove(){
            this.$emit('remove', [this.iskey, true])
        }
    },
    created() {
        if (typeof this.val === "string") {
            let arr;
            arr = this.val.split(", ");
            this.value = arr;
        }else{
            this.value = this.val
        }

        if(!this.value[0]){
            this.value[0] = this.option[0].val
        }
    }
};
</script>

<style>
</style>
