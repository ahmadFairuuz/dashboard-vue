<script setup>
import ItemList from "@/components/admin/item/ItemList.vue";
import ItemForm from "@/components/admin/item/ItemForm.vue";
import UserList from "@/components/admin/user/UserList.vue";
import TransactionList from "@/components/admin/transaction/TransactionList.vue";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const props = defineProps({
  currentComponent: {
    type: String,
    required: true,
  },
});

const showForm = ref(false);
const selectedItem = ref(null);
const isEdit = ref(false);

const showEditForm = (item) => {
  selectedItem.value = item;
  isEdit.value = true;
  showForm.value = true;
};

const showAddForm = () => {
  selectedItem.value = null;
  isEdit.value = false;
  showForm.value = true;
};

const handleSubmit = (formData) => {
  showForm.value = false;
  selectedItem.value = null;
  isEdit.value = false;
};

const cancelEditForm = () => {
  showForm.value = false;
  selectedItem.value = null;
  isEdit.value = false;
};
</script>

<template>
  <div class="admin-view">
    <div class="scrollable-content">
      <ItemList
        v-if="props.currentComponent === 'item'"
        @edit-item="showEditForm"
        @add-item="showAddForm"
      />
      <UserList v-if="props.currentComponent === 'user'" />
      <TransactionList v-if="props.currentComponent === 'transaction'" />
    </div>
    <Modal
      v-if="showForm"
      :isVisible="showForm"
      @close="cancelEditForm"
      :title="isEdit ? 'Edit Item' : 'Add Item'"
    >
      <ItemForm :item="selectedItem" :isEdit="isEdit" @submit="handleSubmit" />
    </Modal>
  </div>
</template>
