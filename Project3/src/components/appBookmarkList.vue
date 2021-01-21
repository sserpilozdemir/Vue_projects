<template>
<!-- COMPONENT -->
<div class="container">
    <div class="bookmark--app--container">
    <!-- COMPONENT -->
    
    <appBookmarkListItem
        v-for="bookmark_item in items"
        :key="bookmark_item.id"
        :item="bookmark_item"
        @update-item-event="updateItem"
        @delete-item-event="deleteItem"
    />
    <!-- /COMPONENT -->
    </div>
</div>
<!-- /COMPONENT -->
</template>

<script>
import appBookmarkListItem from "@/components/appBookmarkListItem"
export default {
  props: ["items"],
  components: {
    appBookmarkListItem,
  },
  methods:{
    updateItem(id,bookmark) {
        this.$emit("update-event",id, bookmark);
    },
    deleteItem(id){
        this.$emit("delete-event",id);
    }
  }
};

</script>


