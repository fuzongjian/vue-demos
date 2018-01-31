<template>
    <div class="index">
     	<button @click='postClick'>post</button>
     	<button @click='getClick'>get</button>
    </div>
</template>

<script>
    import { getTest,postTest} from "../../api/api";
    import axios from 'axios'
    export default {
        name: "index",
        methods:{
    		postClick() {
          let params = {
            departmentID: '1512459792672'
          }
          postTest(params).then( (res) => {
             if(res.data.status == true){
               console.log(res.data.name)
             }
          }).catch( (err) => {
              console.log(err.message)
          })
    		},
    		getClick(){

    		  getTest({}).then( (res) => {
    		    if(res.data.status == true){
              console.log(res.data.data[0].departmentID)
            }
          }).catch((err) => {
              console.log(err.message)
          })
    		}
    	}
    }
</script>

<style scoped>

</style>
