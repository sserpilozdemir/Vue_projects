<template>
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>PLAN</title>
  </head>
  <body> 
  <header>2021 Spring Lesson Plan</header>
    <div id ="app" class="container">
      <div class="course--planner-app--container">
        <appAddCourseItem :items="courseList" />
        <appCourseList :items="courseList" />
        
      </div>
    </div>
    <div class="mt-10">
      <p>
        <font size = "3">
          <marquee direction="right">
            <font color = "Indigo" size ="4">
              <small>You have {{courseList.length}} lesson/s.</small>
            </font>
          </marquee>
        </font>
      </p>        
    </div>
  </body>
</template>

<script>
import appCourseList from './components/appCourseList'
import appAddCourseItem from './components/appAddCourseItem'

export default {
  components: {
    appCourseList,
    appAddCourseItem,
  },
  data(){
    return{
      courseList:[
        {
          id: 1,
          name: "Lesson of Vue.js ",
          lessonFinished: false,
        },
        {
          id: 2,
          name: "Lesson of JS ",
          lessonFinished: true,
        },
        {
          id: 3,
          name: "Lesson of HTML ",
          lessonFinished: false,
        },
      ],
    };
  },
};
</script>







