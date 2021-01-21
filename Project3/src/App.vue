<template>
  <div>
    <header>
          <p>
      <font size = "3">
        <marquee align="bottom" width = "300" direction="right">
          <font color = "Indigo" size ="4">
            <small>b e s t i e s</small>
          </font>
          </marquee></font></p> 
      </header>
    <!-- COMPONENT -->
    <appAddBookmarkItem @save-event="saveData"/>
    <!-- /COMPONENT -->

    <!-- COMPONENT -->
    <appBookmarkList :items="bookmarkList" @update-event="updateData" @delete-event="deleteData"/>
    <!-- /COMPONENT -->
  </div>
</template>

<script>
import axios from "axios";
import appBookmarkList from './components/appBookmarkList'
import appAddBookmarkItem from './components/appAddBookmarkItem'
export default {
  components:{
    appBookmarkList,
    appAddBookmarkItem,
  },
  data() {
    return {
      bookmarkList: [],      
    };
  },
  methods: {
    saveData(bookmark) {
      axios.post("http://localhost:3000/bookmarks", bookmark).then(bookmark_save_response => {
        console.log("bookmark_save_response", bookmark_save_response);
        // Created...
        if (bookmark_save_response.status === 201) {
          this.bookmarkList.push(bookmark_save_response.data);
        }
      });
    },
    updateData(id,bookmark) {
      axios.patch(`http://localhost:3000/bookmarks/${id}`, bookmark).then(update_response => {
        const matchedBookmark = this.bookmarkList.findIndex(b => b.id === id);
        if (matchedBookmark > -1) {
          this.bookmarkList[matchedBookmark] = {
            ...bookmark,
            id: id
          };
        }
      });
      console.log("update",id);
    },
    deleteData(id){
      axios.delete(`http://localhost:3000/bookmarks/${id}`).then(bookmark_delete_response => {
        console.log("bookmark_delete_response", bookmark_delete_response);
        this.bookmarkList = this.bookmarkList.filter(b => b.id !== id);
      });
    }
  },
  created() {
    axios
      .get("http://localhost:3000/bookmarks")
      .then(bookmark_response => {
        console.log("bookmark_response ", bookmark_response);
        this.bookmarkList = bookmark_response.data;
      })
      .catch(e => {
        console.log("Error", e);
      });
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
