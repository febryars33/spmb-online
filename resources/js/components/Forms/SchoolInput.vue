<template>
    <div ref="target">
        <BFormInput
            v-if="modelValue === null"
            type="search"
            placeholder="Contoh: SMP Negeri 1 Bandung"
            size="sm"
            v-model="http.search"
            @click="open"
            @input="onSearch"
        />

        <div
            v-if="show"
            class="position-relative mt-2 rounded-3"
            :style="{
                maxHeight: '400px',
                overflowY: 'scroll',
                overflowX: 'hidden',
            }"
        >
            <BListGroup>
                <BListGroupItem v-if="http.processing">
                    Loading...
                </BListGroupItem>
                <template v-else>
                    <BListGroupItem
                        v-if="http.response.data.length === 0"
                        class="text-center"
                    >
                        <div class="text-center py-5 text-secondary">
                            <Info :size="64" class="mb-3 opacity-50" />
                            <p class="fw-bold mb-1">Sekolah Tidak Ditemukan</p>
                            <button
                                type="button"
                                class="btn btn-sm px-4 btn-success rounded-pill"
                                @click="onCreate"
                            >
                                Gunakan "{{ http.search }}"
                            </button>
                        </div>
                    </BListGroupItem>
                    <BListGroupItem
                        v-for="school in http.response.data"
                        :key="school.id"
                        button
                        @click="onChange(school)"
                    >
                        <div class="d-flex">
                            <div class="me-auto">
                                <h6 class="mb-1">{{ school.name }}</h6>
                                <div class="d-flex gap-1">
                                    <MapPin :size="16" class="text-danger" />
                                    <p class="m-0 small">
                                        {{
                                            school.address === null
                                                ? '-'
                                                : school.address
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </BListGroupItem>
                </template>
            </BListGroup>
        </div>

        <div v-if="modelValue" class="d-flex justify-content-between mt-2">
            <div class="me-auto">
                <h6>{{ modelValue.name }}</h6>
                <div class="d-flex gap-2 align-items-center small">
                    <MapPin :size="18" class="text-danger" />
                    <span class="text-muted">{{
                        modelValue.address || '-'
                    }}</span>
                </div>
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-sm btn-light border text-danger"
                    @click="onClear"
                >
                    <SquarePen :size="16" /> Ganti
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useHttp } from '@inertiajs/vue3';
import { Info, MapPin, SquarePen } from '@lucide/vue';
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';
import schools from '@/routes/schools';
import type { School } from '@/types/models/school';

defineProps<{
    modelValue: School | null;
}>();

const emit = defineEmits(['update:modelValue']);

const http = useHttp<{
    search: string;
    response: {
        data: School[];
    };
}>({
    search: '',
    response: {
        data: [],
    },
});

const target = useTemplateRef('target');

const show = ref(false);

onClickOutside(target, () => {
    show.value = false;
    http.search = '';
    http.resetAndClearErrors();
});

const onChange = (school: any) => {
    show.value = false;
    http.search = '';
    http.resetAndClearErrors();
    emit('update:modelValue', school);
};

const onClear = () => {
    http.search = '';
    http.resetAndClearErrors();
    emit('update:modelValue', null);
    onSearch();
    show.value = true;
};

const onSearch = () => {
    http.get(schools.index().url, {
        onSuccess: (response) => {
            console.log(response);
        },
    });
};

const onCreate = () => {
    http.resetAndClearErrors();
    show.value = false;
    emit('update:modelValue', {
        id: null,
        name: http.search,
        address: null,
    });
};

const open = () => {
    http.search = '';
    show.value = true;
    onSearch();
};
</script>
