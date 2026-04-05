<template>
    <BApp>
        <div class="d-flex flex-column min-vh-100">
            <header>
                <Navbar />
            </header>

            <!-- min-vh-100 d-flex flex-column -->
            <main class="flex-grow-1">
                <div class="container py-5">
                    <Link :href="dashboard.home.index()"> <ArrowLeft /> Kembali ke Dashboard </Link>
                    <div class="row mt-4">
                        <div class="col-lg-3">
                            <div class="card bg-body-tertiary border-0">
                                <div class="card-body text-center">
                                    <div class="text-center mb-4">
                                        <h5 class="fw-bold mb-0">
                                            {{ page.props.auth.user.name }}
                                        </h5>
                                        <p class="text-secondary small">Nomor Registrasi belum terbentuk.</p>
                                    </div>
                                    <div class="mb-4">
                                        <div class="d-flex justify-content-between mb-2">
                                            <span class="small fw-bold">Kelengkapan Data</span><span class="small fw-bold text-primary">40%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 40%" />
                                        </div>
                                    </div>

                                    <div class="list-group list-group-flush shadow-none">
                                        <Link
                                            :href="dashboard.form.guide(candidate.id)"
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none"
                                            :class="{
                                                'active bg-primary-subtle text-primary disabled':
                                                    $page.url === dashboard.form.guide(candidate.id).url,
                                            }"
                                        >
                                            <span class="me-3"> <Form /> </span>
                                            <span class="small fw-bold">Petunjuk Pengisian</span>
                                        </Link>
                                        <Link
                                            :href="dashboard.form.form(candidate.id)"
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none"
                                            :class="{
                                                'active bg-primary-subtle text-primary disabled': $page.url === dashboard.form.form(candidate.id).url,
                                            }"
                                        >
                                            <span class="me-3"><User /></span>
                                            <span class="small fw-bold">Formulir Pendaftaran</span>
                                        </Link>
                                        <Link
                                            :href="dashboard.form.document(candidate.id)"
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none"
                                            :class="{
                                                'active bg-primary-subtle text-primary disabled':
                                                    $page.url === dashboard.form.document(candidate.id).url,
                                            }"
                                        >
                                            <span class="me-3"><FileSearchCorner /></span>
                                            <span class="small fw-bold">Berkas Persyaratan</span>
                                        </Link>
                                        <Link
                                            :href="dashboard.form.send(candidate.id)"
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none"
                                            :class="{
                                                'active bg-primary-subtle text-primary disabled': $page.url === dashboard.form.send(candidate.id).url,
                                            }"
                                        >
                                            <span class="me-3"><ScanText /></span>
                                            <span class="small fw-bold">Kirim Berkas</span>
                                        </Link>
                                        <Link
                                            :href="dashboard.form.review(candidate.id)"
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none"
                                            :class="{
                                                'active bg-primary-subtle text-primary disabled':
                                                    $page.url === dashboard.form.review(candidate.id).url,
                                            }"
                                        >
                                            <span class="me-3"><CircleCheckBig /></span>
                                            <span class="small fw-bold">Status Review</span>
                                        </Link>
                                        <button
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary"
                                        >
                                            <span class="me-3"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-credit-card"
                                                    aria-hidden="true"
                                                >
                                                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                                    <line x1="2" x2="22" y1="10" y2="10"></line></svg></span
                                            ><span class="small fw-bold">Pembayaran</span></button
                                        ><button
                                            class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary"
                                        >
                                            <span class="me-3"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-calendar"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path></svg></span
                                            ><span class="small fw-bold">Jadwal Tes</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <slot />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    </BApp>
</template>

<script lang="ts" setup>
import Footer from '@/Components/Footer.vue'
import Navbar from '@/Components/Navbar.vue'
import dashboard from '@/routes/dashboard'
import type { Candidate } from '@/types/models/candidate'
import { Link, usePage } from '@inertiajs/vue3'
import { ArrowLeft, CircleCheckBig, FileSearchCorner, Form, ScanText, User } from '@lucide/vue'

const page = usePage()

defineProps<{
    candidate: Candidate
}>()
</script>
