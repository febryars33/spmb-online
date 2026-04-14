<template>
    <div class="position-relative" ref="target">
        <!-- Button Trigger: Menyerupai form-control yang bisa diklik -->
        <div
            class="form-control form-control-sm d-flex justify-content-between align-items-center cursor-pointer"
            @click="show = !show"
            style="cursor: pointer"
        >
            <span class="text-truncate me-2">{{
                selected?.name || 'Pilih Opsi'
            }}</span>
            <button
                type="button"
                class="btn-close"
                style="font-size: 0.65rem"
                @click.stop="onClear"
            />
        </div>

        <!-- Dropdown Menu -->
        <div
            v-if="show"
            class="position-absolute w-100 bg-body-tertiary border rounded-2 mt-1 z-3 shadow-sm"
            style="max-height: 185px; overflow-y: auto; overflow-x: hidden"
        >
            <!-- Container List Opsi -->
            <div class="p-2">
                <div
                    v-for="(option, index) in options"
                    :key="option.id"
                    class="form-check p-1 rounded-1 small"
                    :class="{ 'mb-0': index === options.length - 1 }"
                >
                    <input
                        class="form-check-input ms-0 me-2"
                        type="radio"
                        :name="'radio-group-' + label"
                        :id="'radio-' + index"
                        :value="option.id"
                        :checked="modelValue === option.id"
                        @change="onUpdate(option)"
                    />
                    <label
                        class="form-check-label d-block w-100"
                        :for="'radio-' + index"
                    >
                        {{ option.name }}
                    </label>
                </div>
            </div>

            <!-- Bagian Input Tambahan (Sticky Footer look) -->
            <!-- <div class="p-2 border-top bg-light-subtle">
                <label for="optional-input" class="form-label mb-1 small fw-medium text-secondary"> Lainnya </label>
                <input id="optional-input" type="text" class="form-control form-control-sm" placeholder="Ketik di sini..." />
            </div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

interface Option {
    id: number;
    name: string;
}

const props = defineProps<{
    label: string;
    placeholder?: string | null;
    disabled?: boolean;
    readonly?: boolean;
    size?: 'sm' | 'lg';
    options: Option[];
    modelValue: Option['id'] | null;
}>();

const emit = defineEmits(['update:modelValue']);

const show = ref(false);

const target = useTemplateRef('target');

const selected = ref<Option | null>(null);

onClickOutside(target, () => {
    show.value = false;
});

const onUpdate = (value: Option) => {
    emit('update:modelValue', value.id);
    selected.value = value;
    show.value = false;
};

const onClear = () => {
    selected.value = null;
    emit('update:modelValue', 0);
};

if (props.modelValue) {
    selected.value = props.options.find((option) => {
        return option.id === props.modelValue;
    });
}
</script>

<style scoped>
/* Efek hover sederhana agar list terasa interaktif */
.form-check:hover {
    background-color: var(--bs-focus-ring-color);
    cursor: pointer;
    color: var(--bs-primary-text-emphasis);
}
.form-check-input {
    cursor: pointer;
}
.form-check-label {
    cursor: pointer;
}
</style>
