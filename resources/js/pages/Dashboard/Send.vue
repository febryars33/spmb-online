<template>
    <Head>
        <title>{{ meta.title }}</title>
        <meta name="description" :content="meta.description" />
    </Head>

    <div class="card border-0 shadow-sm rounded-4">
        <div class="card-body">
            <div class="text-center py-5">
                <div
                    class="bg-primary-subtle d-inline-block p-4 rounded-circle mb-4"
                >
                    <FileText :size="64" class="text-primary" />
                </div>
                <h4 class="fw-bold mb-3">{{ meta.title }}</h4>
                <p class="text-secondary mb-4 mx-auto" style="max-width: 500px">
                    Pastikan semua data yang Anda masukkan sudah benar. Setelah
                    dikirim, data akan dikunci untuk proses peninjauan oleh
                    panitia PPDB.
                </p>
                <div
                    class="card border-0 rounded-4 mb-4 text-start bg-body-tertiary shadow-sm"
                >
                    <div class="card-body">
                        <h6 class="fw-bold mb-3">Ringkasan Pendaftaran:</h6>
                        <div class="row g-2 small">
                            <div class="col-6 text-secondary">
                                Nama Calon Siswa:
                            </div>
                            <div class="col-6 fw-bold">
                                <template v-if="candidate.name">
                                    {{ candidate.name }}
                                </template>
                                <span v-else class="fst-italic opacity-50">
                                    <i>Belum Diisi</i>
                                </span>
                            </div>
                            <div class="col-6 text-secondary">
                                Tipe Pendaftaran:
                            </div>
                            <div class="col-6 fw-bold">
                                {{
                                    candidate.type === 'new'
                                        ? 'Siswa Baru'
                                        : 'Siswa Pindahan'
                                }}
                            </div>
                            <div class="col-6 text-secondary">
                                Status Kelengkapan:
                            </div>
                            <div class="col-6 fw-bold text-success">
                                {{ candidate.snapshot.progress }}
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="form-check d-inline-block text-start mb-4">
                        <input
                            class="form-check-input"
                            :class="{ 'is-invalid': form.errors.agree }"
                            id="agree"
                            type="checkbox"
                            v-model="form.agree"
                        />
                        <label class="form-check-label small" for="agree">
                            Saya menyatakan bahwa data yang saya masukkan adalah
                            benar dan dapat dipertanggungjawabkan.
                        </label>
                        <div v-if="form.errors.agree" class="invalid-feedback">
                            Anda harus menyetujui sebelum mengirimkan.
                        </div>
                    </div>
                    <div class="d-flex justify-content-center gap-3">
                        <button
                            class="btn btn-outline-secondary px-4 rounded-pill"
                        >
                            Kembali
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary px-5 rounded-pill"
                            :disabled="!form.agree || form.processing"
                        >
                            Kirim Sekarang
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <Teleport v-if="mount" to="body">
        <Toaster />
    </Teleport>
</template>

<script lang="ts" setup>
import { Head, useForm } from '@inertiajs/vue3';
import { FileText } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { toast, Toaster } from 'vue-sonner';
import Form from '@/layouts/Form.vue';
import dashboard from '@/routes/dashboard';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';

defineOptions({
    layout: Form,
});

const mount = ref(false);

onMounted(() => {
    mount.value = true;
});

const props = defineProps<{
    candidate: Candidate;
    meta: Meta;
}>();

const form = useForm({
    agree: false,
});

const onSubmit = () => {
    form.submit('post', dashboard.form.submit(props.candidate.id).url, {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            form.agree = false;
            form.clearErrors();
        },
        onError: (errors) => {
            toast.error(errors.message, {
                style: {
                    background: 'var(--bs-danger)',
                    color: '#fff',
                    border: 'none',
                    fontFamily: 'Rubik',
                },
                position: 'top-right',
            });
        },
    });
};
</script>
