<template>
    <Head>
        <title>{{ seo.title }}</title>
        <meta name="description" :content="seo.description" />
    </Head>
    <div class="min-vh-100 py-5">
        <div class="container py-5">
            <div class="text-center mb-5">
                <span
                    class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3 fw-bold"
                    >Pusat Bantuan</span
                >
                <h1 class="display-5 fw-bold mb-3">
                    Pertanyaan yang Sering Diajukan
                </h1>
                <p class="text-secondary lead mx-auto" style="max-width: 600px">
                    Temukan jawaban cepat untuk pertanyaan umum mengenai proses
                    pendaftaran di {{ $page.props.name }}.
                </p>
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col-lg-6">
                    <div class="position-relative">
                        <Search
                            class="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                        />
                        <input
                            class="form-control form-control-lg ps-5 rounded-pill shadow-sm border-0"
                            placeholder="Cari pertanyaan..."
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                <button
                    class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-primary shadow"
                >
                    Semua</button
                ><button
                    class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"
                >
                    Umum</button
                ><button
                    class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"
                >
                    Pendaftaran</button
                ><button
                    class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"
                >
                    Pembayaran</button
                ><button
                    class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"
                >
                    Teknis
                </button>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion border-0" id="faq">
                        <div
                            class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"
                        >
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
                            <div
                                id="faq1"
                                class="accordion-collapse collapse"
                                data-bs-parent="#faq"
                            >
                                <div
                                    class="accordion-body text-secondary small"
                                >
                                    Proses verifikasi berkas biasanya memakan
                                    waktu 1-3 hari kerja setelah Anda menekan
                                    tombol "Kirim Berkas" di dashboard.
                                </div>
                            </div>
                        </div>
                        <div
                            class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"
                        >
                            <h2 class="accordion-header">
                                <button
                                    class="accordion-button fw-bold py-3 collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                    aria-expanded="false"
                                >
                                    Apa yang harus dilakukan jika status "Perlu
                                    Perbaikan"?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                class="accordion-collapse collapse"
                                data-bs-parent="#faq"
                            >
                                <div
                                    class="accordion-body text-secondary small"
                                >
                                    Silahkan masuk ke dashboard Anda, lihat
                                    catatan dari panitia pada bagian berkas,
                                    unggah kembali dokumen yang diminta, lalu
                                    klik "Kirim Ulang".
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 text-center">
                <div class="card shadow-sm rounded-4 border-0 bg-body-tertiary">
                    <div class="card-body py-5">
                        <h4 class="fw-bold mb-3">Masih punya pertanyaan?</h4>
                        <p class="text-secondary mb-4">
                            Tim dukungan kami siap membantu Anda setiap hari
                            kerja pukul 08:00 - 16:00 WIB.
                        </p>
                        <div
                            class="d-flex flex-wrap justify-content-center gap-3"
                        >
                            <a
                                href="https://wa.me/628123456789"
                                class="btn btn-success px-4 py-2 rounded-pill d-flex align-items-center"
                            >
                                <Phone :size="20" class="me-2" />
                                Hubungi via WhatsApp
                            </a>
                            <a
                                href="mailto:info@smaunggul.sch.id"
                                class="btn btn-outline-primary px-4 py-2 rounded-pill d-flex align-items-center"
                            >
                                <Mail :size="20" class="me-2" />
                                Kirim Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { Mail, Phone, Search } from '@lucide/vue';
import type { SEOData } from '@/types/seo';

defineProps<{
    seo: SEOData;
}>();
</script>
