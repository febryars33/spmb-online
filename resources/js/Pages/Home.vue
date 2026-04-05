<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>

        <Hero />

        <div class="bg-body-tertiary">
            <section class="py-5">
                <div class="container">
                    <div class="row justify-content-center text-center mb-5">
                        <div class="col-lg-8">
                            <h2 class="fw-bold mb-2">Informasi Kuota Pendaftaran</h2>
                            <p class="text-muted">Pantau ketersediaan slot pendaftaran secara real-time untuk setiap jenjang kelas.</p>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4">
                            <div class="card bg-primary-subtle card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative">
                                <div class="card-body">
                                    <div class="position-relative z-1">
                                        <div class="d-flex justify-content-between align-items-start mb-4">
                                            <div
                                                class="bg-primary rounded-4 d-flex align-items-center justify-content-center"
                                                style="width: 60px; height: 60px"
                                            >
                                                <User :size="32" class="text-white" />
                                            </div>
                                            <span class="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold">Kelas 10</span>
                                        </div>
                                        <h4 class="fw-bold mb-2">Siswa Baru</h4>
                                        <p class="small text-muted mb-4">Pendaftaran reguler untuk lulusan SMP/Sederajat.</p>
                                        <div class="mb-4">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="small fw-bold">Pendaftar: 284</span><span class="small fw-bold">Kuota: 350</span>
                                            </div>
                                            <div class="progress" role="progressbar">
                                                <div class="progress-bar" style="width: 25%"></div>
                                            </div>
                                            <div class="mt-2 text-end text-primary"><small class="fw-bold">Sisa 66 Kursi</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card bg-body-tertiary card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative">
                                <div class="card-body">
                                    <div class="position-relative z-1">
                                        <div class="d-flex justify-content-between align-items-start mb-4">
                                            <div
                                                class="bg-info rounded-4 d-flex align-items-center justify-content-center"
                                                style="width: 60px; height: 60px"
                                            >
                                                <ArrowLeftRight :size="32" class="text-white" />
                                            </div>
                                            <span class="badge bg-info-subtle text-info rounded-pill px-3 py-2 fw-bold">Kelas 11</span>
                                        </div>
                                        <h4 class="fw-bold mb-2">Siswa Pindahan</h4>
                                        <p class="small text-muted mb-4">Slot tersedia karena mutasi keluar siswa lama.</p>
                                        <div class="mb-4">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="small fw-bold">Pendaftar: 142</span><span class="small fw-bold">Kuota: 150</span>
                                            </div>
                                            <div class="progress" role="progressbar">
                                                <div class="progress-bar bg-info" style="width: 94.67%"></div>
                                            </div>
                                            <div class="mt-2 text-end text-info"><small class="fw-bold">Sisa 6 Kursi</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card bg-body-tertiary card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative">
                                <div class="card-body">
                                    <div class="position-relative z-1">
                                        <div class="d-flex justify-content-between align-items-start mb-4">
                                            <div
                                                class="bg-warning rounded-4 d-flex align-items-center justify-content-center"
                                                style="width: 60px; height: 60px"
                                            >
                                                <ArrowLeftRight :size="32" class="text-white" />
                                            </div>
                                            <span class="badge bg-warning-subtle text-warning rounded-pill px-3 py-2 fw-bold">Kelas 12</span>
                                        </div>
                                        <h4 class="fw-bold mb-2">Siswa Pindahan</h4>
                                        <p class="small text-muted mb-4">Slot terbatas untuk jenjang akhir tahun ajaran.</p>
                                        <div class="mb-4">
                                            <div class="d-flex justify-content-between mb-2">
                                                <span class="small fw-bold">Pendaftar: 142</span><span class="small fw-bold">Kuota: 150</span>
                                            </div>
                                            <div class="progress" role="progressbar">
                                                <div class="progress-bar bg-warning" style="width: 25%"></div>
                                            </div>
                                            <div class="mt-2 text-end text-warning"><small class="fw-bold">Sisa 8 Kursi</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Mengapa Memilih Kami?</h2>
                    <p class="text-secondary">Keunggulan yang kami tawarkan untuk perkembangan putra-putri Anda.</p>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center">
                            <div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">
                                <Search :size="64" class="text-primary" />
                            </div>
                            <h5 class="fw-bold">Kurikulum Internasional</h5>
                            <p class="text-secondary small mb-0">Kurikulum yang diakui secara global untuk persiapan universitas terbaik.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center">
                            <div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">
                                <GalleryHorizontalEnd :size="64" class="text-success" />
                            </div>
                            <h5 class="fw-bold">Fasilitas Modern</h5>
                            <p class="text-secondary small mb-0">Laboratorium lengkap, perpustakaan digital, dan sarana olahraga standar atlet.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center">
                            <div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">
                                <School :size="64" class="text-info" />
                            </div>
                            <h5 class="fw-bold">Pengajar Berpengalaman</h5>
                            <p class="text-secondary small mb-0">Guru-guru lulusan universitas ternama dengan metode mengajar inovatif.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center">
                            <div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">
                                <Users :size="64" class="text-warning" />
                            </div>
                            <h5 class="fw-bold">Ekstrakurikuler Beragam</h5>
                            <p class="text-secondary small mb-0">Lebih dari 30 pilihan klub untuk mengasah minat dan bakat siswa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Hero from '@/Components/Hero.vue'
import { Head } from '@inertiajs/vue3'
import { ArrowLeftRight, GalleryHorizontalEnd, School, Search, User, Users } from '@lucide/vue'
import type { Meta } from '../types/meta'

defineProps<{
    meta: Meta
}>()
</script>
