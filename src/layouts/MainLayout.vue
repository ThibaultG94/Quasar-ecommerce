<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> CineShop </q-toolbar-title>
        <div style="flex-grow: 1"></div>
        <q-btn icon="shopping_cart" round @click="goToCart" />
        <q-btn icon="person" round @click="goToAccount" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item to="/" exact>
          <q-item-section>Accueil</q-item-section>
        </q-item>
        <q-item to="/dvd">
          <q-item-section>DVD</q-item-section>
        </q-item>
        <q-item to="/blu-ray">
          <q-item-section>Blu-Ray</q-item-section>
        </q-item>
        <q-item to="/box-sets">
          <q-item-section>Coffrets</q-item-section>
        </q-item>
        <q-item to="/deals">
          <q-item-section>Bons Plans</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title> Nom du Magasin &copy; 2024 </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function goToCart() {
      // Logique pour aller à la page du panier
      router.push("/cart");
    }

    function goToAccount() {
      // Logique pour aller à la page du compte utilisateur
      router.push("/account");
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      goToCart,
      goToAccount,
    };
  },
});
</script>
