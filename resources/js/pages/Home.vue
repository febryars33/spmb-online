<template>
    <Head>
        <title>{{ seo.title }}</title>
        <meta name="description" :content="seo.description" />
    </Head>

    <Hero />

    <div class="bg-body-tertiary">
        <section class="py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3">
                        <h2 class="fw-bold text-primary-emphasis mb-2">
                            Informasi Kuota Pendaftaran
                        </h2>
                        <p class="text-muted small">
                            Pantau ketersediaan slot pendaftaran secara
                            real-time untuk setiap jenjang kelas.
                        </p>
                    </div>
                    <div v-for="i in 3" class="col-lg-3" :key="i">
                        <div
                            class="card card-body card-hover border-0 shadow rounded-4"
                        >
                            <div class="d-flex gap-3">
                                <div class="col-lg-3">
                                    <img
                                        src="../../img/internet-of-things.png"
                                        class="img-fluid"
                                    />
                                </div>
                                <div class="col-lg-9">
                                    <h5 class="m-0 text-primary-subtle">
                                        Fasilitas
                                    </h5>
                                    <p class="text-muted small m-0">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
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
            <div class="col-lg-3"></div>
            <div class="text-center mb-5">
                <h2 class="fw-bold">Mengapa Memilih Kami?</h2>
                <p class="text-secondary">
                    Keunggulan yang kami tawarkan untuk perkembangan putra-putri
                    Anda.
                </p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div
                        class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"
                    >
                        <div
                            class="d-inline-block p-3 rounded-circle mb-3 mx-auto"
                        >
                            <CircleCheckBigIcon
                                :size="64"
                                class="text-primary"
                            />
                        </div>
                        <h5 class="fw-bold">Akreditasi A</h5>
                        <p class="text-secondary small mb-0">
                            Memenuhi standar nasional pendidikan dengan sangat
                            baik.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div
                        class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"
                    >
                        <div
                            class="d-inline-block p-3 rounded-circle mb-3 mx-auto"
                        >
                            <GalleryHorizontalEnd
                                :size="64"
                                class="text-success"
                            />
                        </div>
                        <h5 class="fw-bold">Fasilitas Modern</h5>
                        <p class="text-secondary small mb-0">
                            Laboratorium lengkap, perpustakaan digital, dan
                            sarana olahraga standar atlet.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div
                        class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"
                    >
                        <div
                            class="d-inline-block p-3 rounded-circle mb-3 mx-auto"
                        >
                            <School :size="64" class="text-info" />
                        </div>
                        <h5 class="fw-bold">Pengajar Berpengalaman</h5>
                        <p class="text-secondary small mb-0">
                            Guru-guru lulusan universitas ternama dengan metode
                            mengajar inovatif.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div
                        class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"
                    >
                        <div
                            class="d-inline-block p-3 rounded-circle mb-3 mx-auto"
                        >
                            <Users :size="64" class="text-warning" />
                        </div>
                        <h5 class="fw-bold">Ekstrakurikuler Beragam</h5>
                        <p class="text-secondary small mb-0">
                            Lebih dari 30 pilihan klub untuk mengasah minat dan
                            bakat siswa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import {
    ArrowLeftRight,
    CircleCheckBigIcon,
    GalleryHorizontalEnd,
    School,
    Search,
    User,
    Users,
} from '@lucide/vue';
import Hero from '@/components/Hero.vue';
import type { SEOData } from '@/types/seo';

defineProps<{
    seo: SEOData;
}>();
</script>
