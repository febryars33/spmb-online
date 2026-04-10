<template>
    <div class="mb-5">
        <h4 class="text-primary-emphasis border-start border-primary ps-2">
            Identitas Orang Tua
        </h4>
        <div class="mb-3">
            <div
                v-for="(type, index) in types"
                class="col-lg-12 mb-5"
                :key="index"
            >
                <h6 class="text-primary">Identitas {{ type.label }}</h6>
                <div class="mb-3 row">
                    <label
                        class="col-sm-3 col-form-label"
                        :for="model[type.value] + '-name'"
                        >Nama</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            :id="model[type.value].id + '-name'"
                            size="sm"
                            v-model="model[type.value].name"
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label
                        class="col-sm-3 col-form-label"
                        :for="model[type.value] + '-nik-number'"
                        >NIK</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            :id="model[type.value].id + '-nik-number'"
                            size="sm"
                            v-model="model[type.value].nik_number"
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label
                        class="col-sm-3 col-form-label"
                        :for="model[type.value] + '-phone'"
                        >No. Telepon</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            :id="model[type.value].id + '-phone'"
                            size="sm"
                            v-model="model[type.value].phone"
                        />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label
                        class="col-sm-3 col-form-label"
                        :for="model[type.value] + '-address'"
                        >Alamat</label
                    >
                    <div class="col-sm-9">
                        <BFormTextarea
                            :id="model[type.value].id + '-address'"
                            size="sm"
                            v-model="model[type.value].address"
                            :rows="4"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { StudentParent } from '@/types/models/student_parent';

type ParentType = 'father' | 'mother' | 'guardian';

interface StudentParentData {
    father: StudentParent;
    mother: StudentParent;
    guardian: StudentParent;
}

const model = defineModel<StudentParentData>({
    default: {
        father: {
            name: null,
            nik_number: null,
            address: null,
            phone: null,
            job: null,
            type: 'father',
        },
        mother: {
            name: null,
            nik_number: null,
            address: null,
            phone: null,
            job: null,
            type: 'mother',
        },
        guardian: {
            name: null,
            nik_number: null,
            address: null,
            phone: null,
            job: null,
            type: 'guardian',
        },
    },
});

const types: { label: string; value: ParentType }[] = [
    { label: 'Ayah', value: 'father' },
    { label: 'Ibu', value: 'mother' },
    { label: 'Wali', value: 'guardian' },
];
</script>
