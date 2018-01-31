<template>
    <div class="index">
     	<button @click='postClick'>post</button>
     	<button @click='getClick'>get</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
    		postClick() {
    			console.log('hello world')
    		},
    		getClick(){
    			console.log('get method')
    		}
    	}	
    }
</script>

<style scoped>

</style>
