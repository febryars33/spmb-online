<template>
    <VuePDF :pdf="pdf" />
</template>

<script lang="ts" setup>
import { usePDF, VuePDF } from '@tato30/vue-pdf';

const props = defineProps({
    url: String,
});

const { pdf } = usePDF(props.url);
</script>
