<template>
    <section id="order" :style="{height:screenHeight+'px'}">
        <mt-header fixed title="确认订单">
            确认订单
        </mt-header>
    </section>
</template>
<script>
export default {
    data() {
        return {
            screenHeight: window.innerHeight - 40,
        }
    },
}
</script>
<style lang="scss" scoped>
#order {
    padding-top: 40px;
}
</style>
