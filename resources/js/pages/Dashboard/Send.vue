<template>
    <div>
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
                    <h4 class="fw-bold mb-3">Konfirmasi &amp; Kirim Berkas</h4>
                    <p
                        class="text-secondary mb-4 mx-auto"
                        style="max-width: 500px"
                    >
                        Pastikan semua data yang Anda masukkan sudah benar.
                        Setelah dikirim, data akan dikunci untuk proses
                        peninjauan oleh panitia PPDB.
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
                                <div class="col-6 fw-bold">Budi Santoso</div>
                                <div class="col-6 text-secondary">
                                    Tipe Pendaftaran:
                                </div>
                                <div class="col-6 fw-bold">Siswa Baru</div>
                                <div class="col-6 text-secondary">
                                    Status Kelengkapan:
                                </div>
                                <div class="col-6 fw-bold text-success">
                                    Siap Dikirim (70%)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-check d-inline-block text-start mb-4">
                        <input
                            class="form-check-input"
                            id="confirmData"
                            type="checkbox"
                        />
                        <label class="form-check-label small" for="confirmData">
                            Saya menyatakan bahwa data yang saya masukkan adalah
                            benar dan dapat dipertanggungjawabkan.
                        </label>
                    </div>
                    <div class="d-flex justify-content-center gap-3">
                        <button
                            class="btn btn-outline-secondary px-4 rounded-pill"
                        >
                            Kembali
                        </button>
                        <button class="btn btn-primary px-5 rounded-pill">
                            Kirim Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { FileText } from '@lucide/vue';
import Form from '@/layouts/Form.vue';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';

defineOptions({
    layout: Form,
});

defineProps<{
    candidate: Candidate;
    meta: Meta;
}>();
</script>
