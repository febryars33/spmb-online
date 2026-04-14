<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>

        <BOverlay :show="!mount" rounded="sm">
            <Toaster position="top-right" />

            <div class="card bg-body-tertiary border-0">
                <div class="card-body">
                    <div
                        class="d-flex justify-content-between align-items-center mb-4"
                    >
                        <h4 class="fw-bold mb-0">Formulir Pendaftaran</h4>
                        <span
                            class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill"
                        >
                            {{ candidateTypeLabel }}
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

                            <BTab title="KIP / Beasiswa">
                                <BCardText class="py-3">
                                    <div
                                        class="text-center py-5 text-secondary"
                                    >
                                        <Construction
                                            :size="40"
                                            class="mb-3 opacity-50"
                                        />
                                        <p class="fw-bold mb-1">
                                            Sedang Dalam Pengembangan
                                        </p>
                                        <p class="small mb-0">
                                            Fitur ini akan segera tersedia.
                                        </p>
                                    </div>
                                </BCardText>
                            </BTab>

                            <BTab title="Prestasi">
                                <BCardText class="py-3">
                                    <div
                                        v-if="form.achievements.length"
                                        class="list-group list-group-flush mb-4 rounded-3 border"
                                    >
                                        <div
                                            v-for="(
                                                achievement, index
                                            ) in form.achievements"
                                            :key="index"
                                            class="list-group-item d-flex align-items-center justify-content-between gap-3 py-3"
                                        >
                                            <div>
                                                <p class="fw-bold small mb-1">
                                                    {{ achievement.name }}
                                                </p>
                                                <BBadge
                                                    variant="info"
                                                    class="fw-normal"
                                                    >{{
                                                        achievement.level
                                                    }}</BBadge
                                                >
                                            </div>
                                            <button
                                                type="button"
                                                class="btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0"
                                                @click="
                                                    removeAchievement(index)
                                                "
                                            >
                                                <Trash :size="14" />
                                            </button>
                                        </div>
                                    </div>

                                    <p
                                        v-else
                                        class="text-secondary small text-center py-3"
                                    >
                                        Belum ada prestasi yang ditambahkan.
                                    </p>

                                    <div
                                        class="card border-0 bg-body-secondary rounded-4 p-3"
                                    >
                                        <p
                                            class="small fw-bold mb-3 text-secondary"
                                        >
                                            Tambah Prestasi
                                        </p>
                                        <div class="row g-3 align-items-end">
                                            <div class="col-md-5">
                                                <label
                                                    for="achievement-name"
                                                    class="form-label small fw-bold"
                                                >
                                                    Nama Lomba / Prestasi
                                                </label>
                                                <input
                                                    id="achievement-name"
                                                    v-model="temp.name"
                                                    type="text"
                                                    class="form-control form-control-sm rounded-3"
                                                    placeholder="Contoh: Juara 1 OSN Matematika"
                                                />
                                            </div>
                                            <div class="col-md-4">
                                                <label
                                                    for="achievement-level"
                                                    class="form-label small fw-bold"
                                                >
                                                    Tingkat
                                                </label>
                                                <select
                                                    id="achievement-level"
                                                    v-model="temp.level"
                                                    class="form-select form-select-sm rounded-3"
                                                >
                                                    <option value="">
                                                        -- Pilih Tingkat --
                                                    </option>
                                                    <option
                                                        v-for="level in achievementLevels"
                                                        :key="level"
                                                        :value="level"
                                                    >
                                                        {{ level }}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-primary w-100 rounded-pill fw-bold"
                                                    :disabled="
                                                        !temp.name ||
                                                        !temp.level
                                                    "
                                                    @click="addAchievement"
                                                >
                                                    + Tambah
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </BCardText>
                            </BTab>
                        </BTabs>

                        <div class="mt-5 d-flex justify-content-between">
                            <button
                                type="submit"
                                class="btn btn-sm btn-primary px-5 rounded-pill"
                                :disabled="form.processing"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </BOverlay>
    </div>
</template>

<script lang="ts" setup>
import { Head, useForm } from '@inertiajs/vue3';
import { Construction, Trash } from '@lucide/vue';
import { computed, onMounted, ref } from 'vue';
import { toast, Toaster } from 'vue-sonner';
import PersonalData from '@/components/Forms/PersonalData.vue';
import StudentParent from '@/components/RegistrationForms/StudentParent.vue';
import Form from '@/layouts/Form.vue';
import { update } from '@/routes/dashboard/form';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';
import type { Religion } from '@/types/models/religion';

defineOptions({ layout: Form });

const props = defineProps<{
    candidate: Candidate;
    religions: Religion[];
    meta: Meta;
}>();

const mount = ref(false);

onMounted(() => {
    mount.value = true;
});

const CANDIDATE_TYPE_LABELS: Record<string, string> = {
    new: 'Siswa Baru',
    transfer: 'Siswa Pindahan',
};

const achievementLevels = [
    'Kabupaten',
    'Provinsi',
    'Nasional',
    'Internasional',
] as const;

const candidateTypeLabel = computed(
    () => CANDIDATE_TYPE_LABELS[props.candidate.type] ?? 'Tidak Diketahui',
);

const temp = ref({ name: '', level: '' });

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
        { name: 'Juara 1 OSN Matematika', level: 'Provinsi' },
        { name: 'Juara 1 OSN Bahasa Inggris', level: 'Provinsi' },
    ],
    school: props.candidate.school,
});

const addAchievement = () => {
    if (!temp.value.name || !temp.value.level) {
        return;
    }

    form.achievements.push({ ...temp.value });
    temp.value = { name: '', level: '' };
};

const removeAchievement = (index: number) => {
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
                    fontFamily: 'Rubik',
                },
            });
        },
        onError: (errors) => {
            toast.error(errors.message, {
                style: {
                    background: 'var(--bs-danger)',
                    color: '#fff',
                    border: 'none',
                    fontFamily: 'Rubik',
                },
            });
        },
    });
};
</script>
