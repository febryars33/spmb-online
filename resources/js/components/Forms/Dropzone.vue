<template>
    <div
        ref="dropZoneRef"
        class="rounded-4 p-4 border text-center"
        :class="
            isDragging ? 'bg-primary-subtle border-primary' : 'border-dashed'
        "
    >
        <div class="mb-3">
            <div
                class="d-inline-flex p-3 rounded-circle mb-2"
                :class="
                    isDragging
                        ? 'bg-primary text-white'
                        : 'bg-primary-subtle text-primary'
                "
            >
                <HandMetal v-if="isDragging" :size="22" />
                <FileUp v-else :size="22" />
            </div>
            <p class="small text-secondary mb-0">
                {{
                    isDragging
                        ? 'Lepaskan file di sini'
                        : 'Klik tombol atau seret file ke sini'
                }}
            </p>
            <p class="small text-secondary opacity-50 mb-0">
                PDF, JPG, PNG — Maks. 2MB
            </p>
        </div>

        <button
            v-if="!isDragging"
            type="button"
            class="btn btn-sm btn-primary rounded-pill px-4 fw-bold"
            @click="open"
        >
            Pilih Berkas
        </button>
    </div>
</template>

<script lang="ts" setup>
import { FileUp, HandMetal } from '@lucide/vue';
import { refDebounced, useDropZone, useFileDialog } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const props = defineProps<{
    itemId: string | number;
}>();

const emit = defineEmits<{
    dropped: [{ id: string | number; files: File[] | FileList }];
}>();

const dropZoneRef = useTemplateRef('dropZoneRef');

const onDrop = (files: File[] | null) => {
    if (!files?.length) {
        return;
    }

    emit('dropped', { id: props.itemId, files });
};

const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
    multiple: false,
    dataTypes: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'],
});

const isDragging = refDebounced(isOverDropZone, 50);

const { open, onChange } = useFileDialog({
    accept: 'image/jpeg, image/png, image/jpg, application/pdf',
    multiple: false,
});

onChange((files) => {
    if (files) onDrop(Array.from(files));
});
</script>
