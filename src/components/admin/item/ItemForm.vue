<template>
  <div>
    <form @submit.prevent="submitForm">
      <table>
        <tbody>
          <tr>
            <td>Kode Barang</td>
            <td>
              <input
                type="text"
                v-model="form.kode"
                id="kode"
                :disabled="isEdit"
                required
              />
            </td>
          </tr>

          <tr>
            <td>Nama Barang</td>

            <td>
              <input type="text" v-model="form.nama" id="nama" required />
            </td>
          </tr>

          <tr>
            <td>Deskripsi</td>

            <td>
              <input
                type="text"
                v-model="form.deskripsi"
                id="deskripsi"
                required
              />
            </td>
          </tr>

          <tr>
            <td>Stok</td>

            <td>
              <input type="number" v-model="form.stok" id="stok" required />
            </td>
          </tr>

          <tr>
            <td></td>

            <td>
              <button type="submit">
                {{ isEdit ? "Simpan Perubahan" : "Tambah Barang" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,

      default: () => ({}),
    },

    isEdit: {
      type: Boolean,

      default: false,
    },
  },
  data() {
    return {
      form: {
        kode: "",

        nama: "",

        deskripsi: "",

        stok: 0,
      },
    };
  },
  watch: {
    item: {
      immediate: true,

      handler(newItem) {
        // Jika dalam mode edit, mengisi form dengan data item
        if (this.isEdit) {
          this.form = { ...newItem };
        } else {
          // Jika bukan mode edit, reset form ke nilai awal
          this.form = {
            kode: "",

            nama: "",

            deskripsi: "",

            stok: 0,
          };
        }
      },
    },
  },
  methods: {
    // Metode untuk menangani submit form

    submitForm() {
      // Memastikan semua field dalam form terisi
      if (
        this.form.kode &&
        this.form.nama &&
        this.form.deskripsi &&
        this.form.stok !== null &&
        this.form.stok !== undefined
      ) {
        // Memancarkan event submit dengan data form
        this.$emit("submit", this.form);
      }
    },
  },

  // Mendefinisikan event yang dapat dipancarkan oleh komponen ini

  emits: ["submit"],
};
</script>

<style scoped>
/* Gaya untuk tabel */

table {
  width: 100%;

  border-collapse: collapse;
}

/* Gaya untuk sel tabel */

td {
  padding: 10px;

  border: 1px solid #ddd;
}

/* Gaya untuk input teks dan number */

input[type="text"],
input[type="number"] {
  width: 100%;

  padding: 8px;

  box-sizing: border-box;
}

/* Gaya untuk tombol submit */

button[type="submit"] {
  background-color: #4caf50;

  color: white;

  padding: 10px;

  border: none;

  border-radius: 5px;

  cursor: pointer;
}

/* Gaya untuk tombol submit saat di-hover */

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
