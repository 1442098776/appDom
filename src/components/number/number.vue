<template>
   
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1'>
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" :value="num" readonly @change="countChanged" ref="numbox" />
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    
</template>
<script>
    export default {
        name:'number',
        data () {
            return {
               
            }
        },
        mounted () {
            this.mui('.mui-numbox').numbox()
        },
        props:['num','id'],
        methods:{
            countChanged(){
                //数量改变
                let value=parseInt(this.$refs.numbox.value);
                this.$emit('change',this.id,value)
            }
        }
    }
</script>
