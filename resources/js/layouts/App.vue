<template>
    <BApp>
        <div class="d-flex flex-column min-vh-100">
            <header>
                <Navbar />
            </header>

            <!-- min-vh-100 d-flex flex-column -->
            <main class="flex-grow-1">
                <slot />
            </main>

            <Footer />
        </div>
    </BApp>
</template>

<script lang="ts" setup>
import { BApp } from 'bootstrap-vue-next';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>
