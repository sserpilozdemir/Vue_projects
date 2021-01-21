<template>
  <div class="card card-light mt-20">
    <h3>Enrolled Courses</h3>
    <ul class="list mt-20">
      <appCourseListItem
        v-for="course_item in items"
        :key="course_item.id"
        :item="course_item"
      />
	  </ul>
  </div>
</template>

<script>
import appCourseListItem from "@/components/appCourseListItem"
export default {
  props: ["items"],
  components: {
    appCourseListItem,
  },
};

</script>


