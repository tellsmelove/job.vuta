// import Vue from 'vue';

// var app = new Vue({
//     data: {
//         tagList: [],
//         InputTags: null,
//     },
//     methods:{
//         makeTags(){
//             if (this.InputTags){
//                 this.tagList.push(this.InputTags.replace(',', ''))
//                 this.InputTags = null;
//             }
//         },
//         removeTag(key){
//             this.$delete(this.tagList, key)
//         },
//         defaultValue(data){
//             if (data){
//                 let _arr = data.split(',')
//                 for(let i of _arr){
//                     console.log(i)
//                     this.tagList.push(i)
//                 }
//             }
//             return this.tagList
//         }
//     },
//     created(){
//     }
// }).$mount('#app')
var tags = $("#tags-input")
if(tags){
    $(tags).val()
}
