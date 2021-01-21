<template>
    <div class="card">
        <div class="user--action--container" >
        <div class="form-group" >
            <label> You must choose 'Math', 'History', Technology','Agriculture'      </label>
            <input type="text" v-model ="name"/>
        </div>
            <button class="btn-primary" @click = "addItem()">Add Lesson</button>
        </div>
        <div v-if="isAlert" :style="{color: 'blue'}"> This area must filled a lesson name </div>
    </div>
</template>
<script>
export default {
  props: ["items"],
  data (){
    return{
      isAlert: false
    };
  },
  methods:{
    addItem(){
      var courseItem={
        name : this.name,
        id : new Date().getTime(),
        lessonFinished:false
      };
      if(this.name == "History"){
        this.isAlert = false 
        this.items.push(courseItem)

      }else if(this.name == "Technology"){
        this.isAlert = false
        this.items.push(courseItem)

      }else if(this.name == "Agriculture"){
        this.isAlert = false
        this.items.push(courseItem)

      }else if(this.name == "Math"){
        this.isAlert = false
        this.items.push(courseItem)

      }else{
        this.isAlert = true        
        setTimeout(function() { this.isAlert = false; }.bind(this), 5000)
      }
    }
  }
};
</script>



