<template>
  <div class="item-list container p-4 bg-white rounded shadow-sm">
    <div class="header d-flex justify-content-between align-items-center mb-3">
      <h2>Daftar Barang</h2>
      <button class="btn btn-primary" @click="showAddForm">Tambah Item</button>
    </div>

    <div class="item-cards row">
      <ItemCard
        v-for="item in items"
        :key="item.kode"
        :item="item"
        @edit-item="editItem"
        @delete-item="deleteItem"
        class="col-md-6 mb-4"
      />
    </div>

    <Modal :visible="showForm" @close="cancelEditForm">
      <ItemForm
        :item="selectedItem"
        :isEdit="isEdit"
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </Modal>
  </div>
</template>

<script>
import { useItemStore } from "@/stores/itemStores";
import ItemCard from "@/components/admin/item/ItemCard.vue";
import Modal from "@/components/Modal.vue";
import ItemForm from "@/components/admin/item/ItemForm.vue";
<<<<<<< HEAD
import { EventBus } from "@/utils/EventBus";
=======
import { useItemStore } from "@/store/itemStore";
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815

export default {
  components: {
    ItemCard,
    Modal,
    ItemForm,
  },
  data() {
    return {
      showForm: false,
      selectedItem: null,
      isEdit: false,
      searchQuery: "",
    };
  },
  computed: {
    items() {
<<<<<<< HEAD
      return this.itemStore.items; // Mengakses state 'items' dari store Pinia
    },

=======
      return this.itemStore.items; //mengakses state "items" di pinia
    },
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815
    filteredItems() {
      return this.items.filter((item) => {
        return (
          item.kode.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.nama.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  methods: {
    showAddForm() {
      this.selectedItem = { kode: "", nama: "", deskripsi: "", stok: 0 };
      this.isEdit = false;
      this.showForm = true;
    },

    editItem(item) {
      this.selectedItem = { ...item };
      this.isEdit = true;
      this.showForm = true;
    },

    handleSubmit(item) {
      const itemStore = useItemStore();
      if (
        item.kode &&
        item.nama &&
        item.deskripsi &&
        item.stok !== null &&
        !isNaN(item.stok)
      ) {
        if (this.isEdit) {
<<<<<<< HEAD
          this.itemStore.updateItem(item); // Memanggil action 'updateItem' dari store
        } else {
          this.itemStore.addItem(item); // Memanggil action 'addItem' dari store
=======
          itemStore.updateItem(item); // Memanggil action 'updateItem' dari store
        } else {
          itemStore.addItem(item); // Memanggil action 'addItem' dari store
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815
        }
      }
      this.showForm = false;
    },

    cancelEditForm() {
      this.showForm = false;
    },

    deleteItem(kode) {
<<<<<<< HEAD
      this.itemStore.deleteItem(kode); // Memanggil action 'deleteItem' dari store
=======
      this.itemStore.deleteItem(kode);
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
    setup() {
      const itemStore = useItemStore();
      return { itemStore };
>>>>>>> 7b65d9129664d56230d0fc6e3225c1427ae11815
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
  },

  mounted() {
    EventBus.on("search", this.handleSearch);
  },

  beforeUnmount() {
    EventBus.off("search", this.handleSearch);
  },

  setup() {
    const itemStore = useItemStore();
    return { itemStore };
  },
};
</script>

<style scoped>
.item-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.header .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.header .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
