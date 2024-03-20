<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-pa-md">
        <q-toolbar-title class="col-4">
          <q-btn flat dense icon="local_movies" size="1rem" to="/"></q-btn>
          CINESHOP
        </q-toolbar-title>

        <div class="col-7">
          <q-input
            bg-color="white"
            class="rounded-borders"
            debounce="300"
            dense
            filled
            :loading="loadingInProgress"
            placeholder="Rechercher un film..."
            @input="searchMovies"
            v-model="search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="col-1" align="right">
          <q-btn
            class="q-mr-md"
            icon="person"
            round
            @click="goToAccount"
            color="info"
          />
          <q-btn
            class="q-mr-xs"
            icon="shopping_cart"
            round
            @click="goToCart"
            color="secondary"
          />
        </div>
      </q-toolbar>

      <q-toolbar class="bg-secondary">
        <q-tabs align="left" class="full-width">
          <q-route-tab to="/" label="Accueil" exact />
          <q-route-tab to="/dvd" label="DVD" exact />
          <q-route-tab to="/blu-ray" label="Blu-Ray" exact />
          <q-route-tab to="/box-sets" label="Coffrets" exact />
          <q-route-tab to="/deals" label="Bons Plans" exact />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title> CINESHOP &copy; 2024 </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();

    function goToCart() {
      router.push("/cart");
    }

    function goToAccount() {
      router.push("/account");
    }

    return {
      goToCart,
      goToAccount,
    };
  },

  data() {
    return {
      loadingInProgress: false,
      search: "",
    };
  },

  methods: {
    debutChargement() {
      this.loadingInProgress = true;
    },
    finChargement() {
      this.loadingInProgress = false;
    },
    searchMovies() {
      this.$router.push({ name: "search", query: { q: this.search } });
    },
  },
});
</script>

<style>
body,
.q-layout {
  font-family: "Blue Rays Regular", sans-serif;
}
.q-tab__label,
.q-input {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
}
.rounded-borders .q-field__control {
  border-radius: 15px;
}
.rounded-borders .q-field__inner {
  padding-left: 10px;
  padding-right: 10px;
}
.q-tab {
  position: relative;
  overflow: hidden;
}
.q-tab::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center bottom;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out;
}

.q-tab:hover::after,
.q-tabs .q-tab--active::after {
  transform: translateX(-50%) scaleX(1);
}
</style>
