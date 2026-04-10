<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>
        <BOverlay :show="!mount" rounded="sm">
            <Toaster />
            <div class="card bg-body-tertiary border-0">
                <div class="card-body">
                    <div
                        class="d-flex justify-content-between align-items-center mb-4"
                    >
                        <h4 class="fw-bold mb-0">Formulir Pendaftaran</h4>
                        <span
                            class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill"
                        >
                            <template v-if="candidate.type === 'new'"
                                >Siswa Baru</template
                            >
                            <template v-else-if="candidate.type === 'transfer'"
                                >Siswa Pindahan</template
                            >
                            <template v-else>Tidak Diketahui</template>
                        </span>
                    </div>

                    <form v-if="mount" @submit.prevent="onSubmit">
                        <BTabs pills fill>
                            <BTab title="Identitas Siswa" active>
                                <BCardText class="py-3">
                                    <PersonalData
                                        v-model="form"
                                        :religions="religions"
                                    />
                                </BCardText>
                            </BTab>
                            <BTab title="Identitas Orang Tua">
                                <BCardText class="py-3">
                                    <StudentParent v-model="form.parents" />
                                </BCardText>
                            </BTab>
                            <BTab title="KIP/Beasiswa">
                                <BCardText class="py-3">
                                    <p>
                                        Repudiandae nisi delectus assumenda quas
                                        labore ipsa saepe voluptatibus ipsam
                                        tempore, vel neque. Voluptatibus libero
                                        rem doloremque quaerat repellendus,
                                        excepturi harum.
                                    </p>
                                </BCardText>
                            </BTab>
                            <BTab title="Prestasi">
                                <BCardText class="py-3">
                                    <ul
                                        class="list-group list-group-flush shadow-none mb-3"
                                    >
                                        <li
                                            v-for="(
                                                achievement, index
                                            ) in form.achievements"
                                            class="list-group-item"
                                            :key="index"
                                        >
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <div class="me-auto">
                                                    <h5 class="m-0">
                                                        {{ achievement.name }}
                                                    </h5>
                                                    <BBadge variant="info">{{
                                                        achievement.level
                                                    }}</BBadge>
                                                </div>
                                                <BButton
                                                    size="sm"
                                                    variant="danger"
                                                    @click="remove(index)"
                                                >
                                                    <Trash :size="16" />
                                                </BButton>
                                            </div>
                                        </li>
                                    </ul>
                                    <form
                                        class="row g-3"
                                        @submit.prevent="create"
                                    >
                                        <div class="col-md-5">
                                            <label
                                                for="achievement-name"
                                                class="form-label small fw-bold"
                                                >Nama Lomba/Prestasi</label
                                            >
                                            <input
                                                id="achievement-name"
                                                class="form-control form-control-sm rounded-3"
                                                placeholder="Contoh: Juara 1 OSN Matematika"
                                                type="text"
                                                v-model="temp.name"
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <label
                                                for="achievement-level"
                                                class="form-label small fw-bold"
                                                >Tingkat</label
                                            >
                                            <select
                                                id="achievement-level"
                                                class="form-select form-select-sm rounded-3"
                                                v-model="temp.level"
                                            >
                                                <option value="Kabupaten">
                                                    Kabupaten
                                                </option>
                                                <option value="Provinsi">
                                                    Provinsi
                                                </option>
                                                <option value="Nasional">
                                                    Nasional
                                                </option>
                                                <option value="Internasional">
                                                    Internasional
                                                </option>
                                            </select>
                                        </div>
                                        <div
                                            class="col-md-3 d-flex align-items-end"
                                        >
                                            <button
                                                type="submit"
                                                class="btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"
                                            >
                                                Tambah
                                            </button>
                                        </div>
                                    </form>
                                </BCardText>
                            </BTab>
                        </BTabs>

                        <div class="mt-5 d-flex justify-content-between">
                            <Link
                                :href="dashboard.form.guide(candidate.id)"
                                class="btn btn-sm btn-outline-secondary px-4 rounded-pill"
                                >Kembali</Link
                            >
                            <button
                                type="submit"
                                class="btn btn-sm btn-primary px-5 rounded-pill"
                                :disabled="form.processing"
                            >
                                Simpan & Lanjutkan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </BOverlay>
    </div>
</template>

<script lang="ts" setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Trash } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { toast, Toaster } from 'vue-sonner';
import PersonalData from '@/components/Forms/PersonalData.vue';
import StudentParent from '@/components/RegistrationForms/StudentParent.vue';
import Form from '@/layouts/Form.vue';
import dashboard from '@/routes/dashboard';
import { update } from '@/routes/dashboard/form';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';
import type { Religion } from '@/types/models/religion';

defineOptions({
    layout: Form,
});
const props = defineProps<{
    candidate: Candidate;
    religions: Religion[];
    meta: Meta;
}>();

const mount = ref(false);

onMounted(() => {
    mount.value = true;
});

const temp = ref({
    name: '',
    level: '',
});

const form = useForm({
    kk_number: props.candidate.kk_number,
    nik_number: props.candidate.nik_number,
    name: props.candidate.name,
    nisn: props.candidate.nisn,
    birth_place: props.candidate.birth_place,
    birth_date: props.candidate.birth_date,
    father_name: props.candidate.father_name,
    mother_name: props.candidate.mother_name,
    address: props.candidate.address,
    religion_id: props.candidate.religion_id,
    gender: props.candidate.gender,
    birth_certificate_number: props.candidate.birth_certificate_number,
    parents: {
        father: props.candidate.parents['father'],
        mother: props.candidate.parents['mother'],
        guardian: props.candidate.parents['guardian'],
    },
    achievements: [
        {
            name: 'Juara 1 OSN Matematika',
            level: 'Provinsi',
        },
        {
            name: 'Juara 1 OSN Bahasa Inggris',
            level: 'Provinsi',
        },
    ],
});

const create = () => {
    form.achievements.push(temp.value);
    temp.value = {
        name: '',
        level: '',
    };
};

const remove = (index: number) => {
    form.achievements.splice(index, 1);
};

const onSubmit = () => {
    form.put(update(props.candidate.id).url, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Data berhasil disimpan', {
                style: {
                    background: 'var(--bs-success)',
                    color: '#fff',
                    border: 'none',
                    fontFamily: 'Poppins',
                },
                position: 'top-right',
            });
            // form.cancel()
        },
    });
};
</script>
