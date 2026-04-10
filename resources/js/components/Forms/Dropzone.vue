<template>
    <div
        ref="dropZoneRef"
        class="rounded-4 p-4 border text-center"
        :class="{ 'bg-primary-subtle border-primary': isOverDropZone }"
    >
        <div class="mb-3">
            <div
                class="bg-primary-subtle d-inline-flex p-3 rounded-circle text-primary mb-2"
            >
                <FileUp v-if="!isOverDropZone" />
                <Hand v-else />
            </div>
            <p v-if="!isOverDropZone" class="small text-secondary mb-0">
                Klik untuk pilih file atau seret ke sini
            </p>
            <p v-else class="small text-secondary mb-0">
                Lepaskan file di sini
            </p>
        </div>
        <button
            type="button"
            class="btn btn-sm btn-primary rounded-pill px-4 py-2 fw-bold small cursor-pointer"
            @click="open"
            :disabled="isOverDropZone"
        >
            Pilih Berkas
        </button>
    </div>
</template>

<script lang="ts" setup>
import { FileUp, Hand } from '@lucide/vue';
import { useDropZone, useFileDialog } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const emit = defineEmits(['dropped']);
const dropZoneRef = useTemplateRef('dropZoneRef');
const props = defineProps({
    itemId: [String, Number],
});

const onDrop = (files: File[] | null) => {
    emit('dropped', {
        id: props.itemId,
        files,
    });
};

const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
    multiple: false,
    dataTypes: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'],
});

const { open, onChange } = useFileDialog({
    accept: 'image/jpeg, image/png, image/jpg, application/pdf',
});

onChange((files) => onDrop(files));
</script>
