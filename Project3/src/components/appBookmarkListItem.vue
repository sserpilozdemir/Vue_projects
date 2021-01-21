<template>
    <div class="bookmark-item">
        <div v-if="!updateStatus" class="header">
        <h3>{{ item.title }}</h3>
        <button @click="deleteData(item.id)" class="btn-sm btn-danger">
            Kaydı Sil
        </button>
        </div>
        <div v-if="updateStatus" class="form-group mr-5">
            <input v-model="bookmark.title" type="text" class="form-control" />
        </div>
        <p v-if="!updateStatus" class="mt-20 mb-20">{{ item.description }}</p>
        
        <div v-if="updateStatus" class="form-group mr-5">
            <input v-model="bookmark.description" type="text" class="form-control" />
        </div>

        <div class="d-flex justify-content-between align-items-center">
        <a v-if="!updateStatus" v-bind:href="item.url" target="_blank"> {{ item.url }} </a>
        <div v-if="updateStatus" class="form-group mr-5">
            <input v-model="bookmark.url" type="text" class="form-control" />
        </div>
        <button v-if="!updateStatus" @click="updateItem" class="btn-warning btn-sm">
            Düzenle
        </button>
        <button v-if="updateStatus" @click="updateData" class="btn-warning mt-10 mr-5">
            Değiştir
        </button>
        <button v-if="updateStatus" @click="cancelUpdate" class="btn-default mt-10">
            İptal
        </button>
        </div>
    </div>
</template>
<script>
export default {
  props: ["item"],
  data (){
      return{
        bookmark: {
            title: null,
            description: null,
            url: null
        },
        updateID: null,
        updateStatus: false
    };
  },
  methods:{

    deleteData(id) {
        this.$emit("delete-item-event", id);
    },

    updateItem() {
      // this.bookmark = bookmark_item;
      this.bookmark = {
        title: this.item.title,
        description: this.item.description,
        url: this.item.url
      };

      this.updateID = this.item.id;
      this.updateStatus = true;
    },
    updateData() {
        //emit
        this.$emit("update-item-event", this.updateID,this.bookmark);        
        this.updateID = null;
        this.updateStatus = false;
        this.bookmark = {
            title: null,
            description: null,
            url: null
        };
    },
    cancelUpdate() {        
        this.updateStatus = false;
        this.bookmark = {
            title: null,
            description: null,
            url: null
        };
    }
  }
};
</script>

    