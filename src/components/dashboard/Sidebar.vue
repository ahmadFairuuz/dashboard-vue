<template>
  <div :class="['sidebar', { 'd-none': !isSidebarVisible }]">
    <a class="logo">Simbok</a>
    <ul>
      <li v-if="currentRole === 'admin'">
        <a href="#" @click.prevent="showComponent('users')">
          <i class="fas fa-home"></i> Users
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="showComponent('items')">
          <i class="fas fa-box"></i> Items
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="showComponent('transactions')">
          <i class="fas fa-exchange-alt"></i> Transactions
        </a>
      </li>

      <li v-if="currentRole == 'user'">
        <a href="#" @click.prevent="showComponent('history')">
          <i class="fas fa-history"></i> History
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentRole: {
      type: String,

      required: true,
    },

    isSidebarVisible: {
      type: Boolean,

      required: true,
    },
  },
  methods: {
    showComponent(component) {
      this.$emit("showComponent", component);
    },
  },

  emits: ["showComponent"],
};
</script>

Lakukan styling untuk komponen ini.

<style scoped>
.sidebar {
  width: 200px;

  background: #4b3f6b;

  color: white;

  padding: 14px;

  height: 100vh;

  display: flex;

  flex-direction: column;

  position: fixed;

  top: 0;

  left: 0;

  z-index: 999;

  font-size: 18px;

  font-family: sans-serif;

  transition: transform 0.3s ease;
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.logo {
  font-size: 24px;

  margin-bottom: 30px;

  font-weight: bold;

  text-align: center;
}

ul {
  list-style: none;

  padding: 0;

  margin: 0;
}

li {
  margin-bottom: 20px;

  text-align: center;
}

a {
  color: white;

  text-decoration: none;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 10px 0;

  transition: background-color 0.3s ease;
}

a:hover {
  text-decoration: underline;

  background-color: rgba(255, 255, 255, 0.1);
}

a i {
  margin-right: 8px;
}
</style>

<!-- <template>

  <div :class="['sidebar', { 'd-none': !isSidebarVisible }]">
  <nav class="navbar">
    <div class="navbar-brand">
     <a class="logo">Simbok</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click.prevent="navigateTo('user')">User</a>
        <a class="navbar-item" @click.prevent="navigateTo('item')">Item</a>
        <a class="navbar-item" @click.prevent="navigateTo('transaction')"
          >Transaction</a>
        <a class="navbar-item" @click.prevent="navigateTo('contohKomponen')"
          >contohKomponen</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      this.$emit("navigate", page);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #4b3f6b;

  color: white;

  padding: 10px 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  flex-wrap: wrap;
}

.navbar-brand {
  display: flex;

  align-items: center;
}

.navbar-item {
  color: white;

  padding: 10px 15px;

  cursor: pointer;

  transition: background-color 0.3s;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);

  border-radius: 4px;
}

.navbar-menu {
  display: flex;

  align-items: center;

  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .navbar-menu {
    width: 100%;

    justify-content: center;
  }

  .navbar-start {
    display: flex;

    flex-direction: column;

    width: 100%;

    align-items: center;
  }

  .navbar-item {
    width: 100%;

    text-align: center;

    padding: 15px 0;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar-item:last-child {
    border-bottom: none;
  }
}
</style>
-->
