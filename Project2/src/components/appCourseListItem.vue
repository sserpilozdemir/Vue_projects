<template>
    <li class="course-item list-item bg-success" 
        :class="{'bg-success':item.lessonFinished, 'bg-danger':!item.lessonFinished}" >
        <span>{{ item.name }}</span>
        <input type="checkbox" v-model = "item.lessonFinished"/>
    </li>
</template>
<script>
export default {
  props: ["item"],
};
</script>
