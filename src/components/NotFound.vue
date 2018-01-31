<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>
    
<script>
export default {
    name: "notFound",
    data () {
        return {
             msg:'404找不到该页面！！！'
        };
    }
}
</script>
    
<style lang="css" scoped>
    h1{
        color:red;
        text-align: center;
        margin-top: 100px;
    }
</style>