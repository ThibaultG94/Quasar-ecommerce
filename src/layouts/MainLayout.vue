<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat dense icon="local_movies" size="1rem" to="/"></q-btn>
          CINESHOP
        </q-toolbar-title>

        <q-tabs align="left" class="q-ma-lg">
          <q-tab to="/" label="Accueil" exact />
          <q-tab to="/dvd" label="DVD" />
          <q-tab to="/blu-ray" label="Blu-Ray" />
          <q-tab to="/box-sets" label="Coffrets" />
          <q-tab to="/deals" label="Bons Plans" />
        </q-tabs>

        <div style="flex-grow: 1"></div>

        <q-btn icon="shopping_cart" round @click="goToCart" />
        <q-btn icon="person" round @click="goToAccount" />
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
});
</script>

<style>
body,
.q-layout {
  font-family: "Blue Rays Regular", sans-serif;
}
</style>
