<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
        <router-link to="/">Home</router-link>        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>