const app = Vue.createApp({
  data() {
    return {
      name : null,
      courseList:[],
      isAlert : false
    }
  },

  methods: {
    addItem(){
      var courseItem = 
        {name : this.name,
        id: new Date().getTime(),
        lessonFinished:false
      };
      if(this.name == "History"){
        this.isAlert = false 
          this.courseList.push(courseItem)

      }else if(this.name == "Technology"){
        this.isAlert = false
          this.courseList.push(courseItem)

      }else if(this.name == "Agriculture"){
        this.isAlert = false
          this.courseList.push(courseItem)

      }else if(this.name == "Math"){
          this.isAlert = false
          this.courseList.push(courseItem)

      }else{
          this.isAlert = true        
          setTimeout(function() { this.isAlert = false; }.bind(this), 5000)
      }
    }
    
  }

});
app.mount("#app");