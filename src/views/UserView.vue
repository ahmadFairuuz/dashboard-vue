<script setup>
import ItemList from "@/components/user/item/ItemList.vue";
import ItemForm from "@/components/user/item/ItemForm.vue";
import TransactionList from "@/components/user/transaction/TransactionList.vue";
import HistoryList from "@/components/user/history/HistoryList.vue";
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
  <div class="user-view">
    <div v-if="!showForm">
      <div class="scrollable-content">
        <ItemList
          v-if="props.currentComponent === 'item'"
          @edit-item="showEditForm"
        />
        <TransactionList v-if="props.currentComponent === 'transaction'" />
        <HistoryList v-if="props.currentComponent === 'history'" />
      </div>
    </div>
    <div v-if="showForm" class="form-container">
      <ItemForm
        :item="selectedItem"
        :isEdit="isEdit"
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </div>
  </div>
</template>
