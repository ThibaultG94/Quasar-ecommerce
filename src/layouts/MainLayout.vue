<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat dense icon="local_movies" size="1rem" to="/"></q-btn>
          CINESHOP
        </q-toolbar-title>

        <q-tabs align="left" class="q-ma-lg">
          <q-route-tab to="/" label="Accueil" exact />
          <q-route-tab to="/dvd" label="DVD" exact />
          <q-route-tab to="/blu-ray" label="Blu-Ray" exact />
          <q-route-tab to="/box-sets" label="Coffrets" exact />
          <q-route-tab to="/deals" label="Bons Plans" exact />
        </q-tabs>

        <div style="flex-grow: 1"></div>

        <q-btn icon="shopping_cart" round @click="goToCart" class="q-mr-sm" />
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
.q-tab__label {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
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
