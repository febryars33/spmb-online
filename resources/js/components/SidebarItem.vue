<template>
    <component
        :is="disabled ? 'button' : Link"
        v-bind="disabled ? { type: 'button', disabled: true } : { href }"
        class="d-flex align-items-center gap-3 px-3 py-2 rounded-3 border-0 w-100 text-decoration-none small fw-bold transition"
        :class="[
            disabled
                ? 'text-secondary opacity-50 bg-transparent'
                : active
                  ? 'bg-primary-subtle text-primary'
                  : 'text-body-secondary bg-transparent sidebar-item-hover',
        ]"
        :aria-current="active ? 'page' : undefined"
    >
        <component :is="icon" :size="17" class="flex-shrink-0" />
        <span>{{ label }}</span>
        <span
            v-if="disabled"
            class="ms-auto badge bg-secondary-subtle text-secondary rounded-pill fw-normal"
            style="font-size: 10px"
        >
            Segera
        </span>
    </component>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import type { Component } from 'vue';

defineProps<{
    href: string | null;
    icon: Component;
    label: string;
    active: boolean;
    disabled: boolean;
}>();
</script>

<style scoped>
.sidebar-item-hover:hover {
    background-color: var(--bs-secondary-bg) !important;
}
</style>
