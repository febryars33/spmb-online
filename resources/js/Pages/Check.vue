<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>

        <div class="min-vh-100">
            <section class="py-5 position-relative overflow-hidden">
                <div class="container py-5 position-relative z-1">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8">
                            <h1 class="display-5 fw-bold mb-3">Lacak Pendaftaran Anda</h1>
                            <p class="lead mb-5 text-muted">Masukkan Nomor Registrasi untuk melihat status terbaru pendaftaran putra-putri Anda.</p>
                            <div class="card border shadow-lg rounded-pill p-2 mx-auto" style="max-width: 600px">
                                <form class="d-flex align-items-center" @submit.prevent="submit">
                                    <div class="flex-grow-1 ps-4">
                                        <div class="d-flex align-items-center">
                                            <Search class="text-primary" />
                                            <input
                                                class="form-control border-0 shadow-none bg-transparent py-3"
                                                placeholder="Contoh: REG-20260401-001"
                                                type="text"
                                                value="REG-0001-0001"
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary rounded-pill px-4 py-2 me-1">Cek Status</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="position-absolute top-0 start-0 translate-middle opacity-50 rounded-circle bg-primary"
                    style="width: 400px; height: 400px"
                ></div>
                <div
                    class="position-absolute bottom-0 end-0 translate-middle-y opacity-50 rounded-circle bg-primary"
                    style="width: 200px; height: 200px; margin-right: -100px"
                ></div>
            </section>

            <section v-if="show" class="py-5 mt-n5 position-relative z-2">
                <div class="container">
                    <div class="row justify-content-center" style="opacity: 1; transform: none">
                        <div class="col-lg-10">
                            <div class="card border-0 shadow-xl rounded-5 overflow-hidden">
                                <div class="row g-0">
                                    <div
                                        class="col-md-4 bg-primary-subtle p-5 text-center d-flex flex-column justify-content-center align-items-center"
                                    >
                                        <ClockFading :size="48" class="text-primary mb-3" />
                                        <h3 class="fw-bold text-primary">Sedang Ditinjau</h3>
                                        <p class="small opacity-75 mb-0">Terakhir diperbarui: <strong>1 jam yang lalu</strong></p>
                                    </div>
                                    <div class="col-md-8 bg-body-tertiary p-5">
                                        <div class="d-flex justify-content-between align-items-start mb-4">
                                            <div>
                                                <h4 class="fw-bold mb-1">Budi Santoso</h4>
                                                <span class="badge bg-success-subtle text-muted rounded-pill small">Siswa Baru</span>
                                            </div>
                                            <div class="text-end">
                                                <small class="text-muted d-block">ID Pendaftaran</small
                                                ><span class="fw-bold text-primary">REG-0001-0001</span>
                                            </div>
                                        </div>
                                        <hr class="my-4 opacity-10" />
                                        <div class="row g-4 mb-5">
                                            <div class="col-sm-6">
                                                <div class="d-flex align-items-center">
                                                    <div class="p-2 rounded-3 me-3">
                                                        <Calendar class="text-primary" />
                                                    </div>
                                                    <div>
                                                        <small class="text-muted d-block">Tanggal Daftar</small
                                                        ><span class="fw-bold">02 April 2026</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="d-flex align-items-center">
                                                    <div class="p-2 rounded-3 me-3">
                                                        <SquareStack class="text-primary" />
                                                    </div>
                                                    <div>
                                                        <small class="text-muted d-block">Gelombang</small
                                                        ><span class="fw-bold">Gelombang 1 (Reguler)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="alert bg-primary-subtle border-0 rounded-4 p-4 mb-4">
                                            <div class="d-flex">
                                                <CircleAlert class="me-3 text-primary" />
                                                <div>
                                                    <h6 class="fw-bold mb-1">Keterangan:</h6>
                                                    <p class="small mb-0 text-muted">Berkas Anda sedang dalam antrean verifikasi oleh panitia.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap gap-3">
                                            <a class="btn btn-primary rounded-pill px-4" href="/login" data-discover="true">Masuk ke Dashboard</a>
                                            <button data-bs-theme="dark" class="btn btn-light rounded-pill px-4">Cetak Bukti</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h5 class="fw-bold mb-4">Alur Pendaftaran Selanjutnya</h5>
                                <div class="row g-3">
                                    <div class="col-6 col-md-3">
                                        <div class="card border-0 rounded-4 p-3 bg-primary text-white shadow-lg">
                                            <Files :size="32" class="mb-2 mx-auto" />
                                            <span class="small fw-bold">Review Berkas</span>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">
                                            <Files :size="32" class="mb-2 mx-auto" />
                                            <span class="small fw-bold">Pembayaran</span>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">
                                            <Files :size="32" class="mb-2 mx-auto" />
                                            <span class="small fw-bold">Tes Seleksi</span>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">
                                            <Files :size="32" class="mb-2 mx-auto" />
                                            <span class="small fw-bold">Pengumuman Akhir</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else class="py-5 mt-n5 position-relative z-2">
                <div class="container">
                    <div class="text-center py-5" style="opacity: 1">
                        <div class="bg-body-tertiary d-inline-block p-5 rounded-circle mb-4">
                            <Search :size="96" class="text-primary opacity-25" />
                        </div>
                        <h5>Belum ada hasil pencarian</h5>
                        <p class="text-muted small">Silahkan masukkan nomor pendaftaran Anda di atas.</p>
                    </div>
                </div>
            </section>

            <section class="py-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h4 class="fw-bold text-center mb-5">Pertanyaan Seputar Status</h4>
                            <div class="accordion border-0" id="faqStatus">
                                <div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button fw-bold py-3 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                            aria-expanded="false"
                                        >
                                            Berapa lama proses review berkas?
                                        </button>
                                    </h2>
                                    <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="">
                                        <div class="accordion-body text-secondary small">
                                            Proses verifikasi berkas biasanya memakan waktu 1-3 hari kerja setelah Anda menekan tombol "Kirim Berkas"
                                            di dashboard.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden">
                                    <h2 class="accordion-header">
                                        <button
                                            class="accordion-button fw-bold py-3 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                            aria-expanded="false"
                                        >
                                            Apa yang harus dilakukan jika status "Perlu Perbaikan"?
                                        </button>
                                    </h2>
                                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="">
                                        <div class="accordion-body text-secondary small">
                                            Silahkan masuk ke dashboard Anda, lihat catatan dari panitia pada bagian berkas, unggah kembali dokumen
                                            yang diminta, lalu klik "Kirim Ulang".
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Meta } from '@/types/meta'
import { Head } from '@inertiajs/vue3'
import { Calendar, CircleAlert, ClockFading, Files, Search, SquareStack } from '@lucide/vue'
import { ref } from 'vue'
defineProps<{
    meta: Meta
}>()

const show = ref(false)

const submit = () => {
    show.value = !show.value
}
</script>
