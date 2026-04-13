<template>
    <Head>
        <title>{{ meta.title }}</title>
        <meta name="description" :content="meta.description" />
    </Head>

    <div class="card bg-body-tertiary border-0">
        <div class="p-4" style="opacity: 1; transform: none">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0">{{ meta.title }}</h4>
                <span
                    class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-bold small"
                    >ID: 2026-SMAU-001</span
                >
            </div>
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card shadow-sm rounded-4 border-0">
                        <div class="card-header bg-primary-subtle">
                            <div class="d-flex align-items-center">
                                <div
                                    class="bg-white bg-opacity-25 p-3 rounded-4 me-4"
                                >
                                    <Clock :size="32" class="text-primary" />
                                </div>
                                <div>
                                    <h5
                                        class="fw-bold mb-0 text-primary-emphasis"
                                    >
                                        Berkas Sedang Ditinjau
                                    </h5>
                                    <span class="small opacity-75 fw-light"
                                        >Update terakhir: 02 April 2026</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="small mb-4">
                                Tim administrasi kami sedang melakukan
                                verifikasi terhadap data dan dokumen yang Anda
                                unggah. Proses ini biasanya memakan waktu 1-3
                                hari kerja.
                            </p>
                            <!-- Timeline Start -->
                            <div class="timeline">
                                <div
                                    v-for="review in candidate.reviews"
                                    :key="review.id"
                                    class="timeline-item timeline-item-warning"
                                >
                                    <span class="timeline-date">
                                        <DayJS
                                            :date="review.pivot.created_at"
                                            format="dddd, DD MMMM YYYY HH:mm"
                                        />
                                    </span>
                                    <div class="timeline-content">
                                        <h6 class="fw-bold mb-0">
                                            {{ review.name }}
                                        </h6>
                                        <p class="small text-muted mb-0">
                                            Catatan:
                                            {{
                                                review.pivot.note === null
                                                    ? '-'
                                                    : review.pivot.note
                                            }}
                                        </p>

                                        <!-- <BCollapse
                                            :id="'attachment-' + review.id"
                                        >
                                            <template
                                                #header="{
                                                    visible,
                                                    toggle,
                                                    id,
                                                }"
                                            >
                                                <button
                                                    type="button"
                                                    class="badge bg-primary-subtle text-primary rounded-pill small fw-bold border-0 shadow-sm"
                                                    v-b-toggle.collapse-2
                                                    :aria-expanded="visible"
                                                    :aria-controls="id"
                                                    @click="toggle"
                                                >
                                                    <Search :size="16" />
                                                    {{
                                                        visible
                                                            ? 'Tutup'
                                                            : 'Buka'
                                                    }}
                                                    Lampiran
                                                </button>
                                            </template>
                                            <div class="mt-3">
                                                <div class="row">
                                                    <div
                                                        v-for="x in 6"
                                                        :key="x"
                                                        class="col-lg-2"
                                                    >
                                                        <img
                                                            src="https://placehold.co/100x100"
                                                            alt="attachment"
                                                            class="img-fluid rounded-2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </BCollapse> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Timeline End -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 mb-4">
                        <div class="card-body p-4">
                            <h6 class="fw-bold mb-3 d-flex align-items-center">
                                <CircleQuestionMark
                                    :size="18"
                                    class="text-primary me-2"
                                />
                                Butuh Bantuan?
                            </h6>
                            <p class="small text-muted mb-4">
                                Jika Anda memiliki pertanyaan mengenai status
                                pendaftaran, silahkan hubungi panitia PPDB kami.
                            </p>
                            <div class="d-grid gap-2">
                                <button
                                    class="btn btn-white border rounded-pill small fw-bold shadow-sm d-flex align-items-center justify-content-center"
                                >
                                    <Phone
                                        :size="18"
                                        class="text-success me-2"
                                    />
                                    WhatsApp CS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 shadow-sm rounded-5 p-4">
                        <h6 class="fw-bold mb-3">Ringkasan Data</h6>
                        <div class="mb-3">
                            <small class="text-secondary d-block mb-1">
                                Nama Lengkap
                            </small>
                            <span class="fw-bold small">
                                {{ candidate.name }}
                            </span>
                        </div>
                        <div class="mb-3">
                            <small class="text-secondary d-block mb-1">
                                Tipe Pendaftaran
                            </small>
                            <span v-if="candidate.type" class="fw-bold small">
                                Siswa Baru
                            </span>
                            <span v-else class="fw-bold small"> Pindahan </span>
                        </div>
                        <div class="mb-0">
                            <small class="text-secondary d-block mb-1">
                                Kelengkapan Berkas
                            </small>
                            <BProgress
                                :value="candidate.snapshot.progress"
                                show-progress
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { CircleQuestionMark, Clock, Phone } from '@lucide/vue';
import DayJS from '@/components/ui/DayJS.vue';
import Form from '@/layouts/Form.vue';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';

defineOptions({
    layout: Form,
});

defineProps<{
    meta: Meta;
    candidate: Candidate;
}>();
</script>
