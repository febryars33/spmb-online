<template>
    <section class="py-5 bg-body-tertiary overflow-hidden">
        <div class="container py-lg-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <div style="opacity: 1; transform: none">
                        <span
                            class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3 fw-bold"
                        >
                            Pendaftaran TA 2026/2027 Telah Dibuka
                        </span>
                        <h1 class="display-4 fw-bold mb-4">
                            Wujudkan Masa Depan Gemilang di
                            <span class="text-primary">{{
                                $page.props.name
                            }}</span>
                        </h1>
                        <p class="lead text-secondary mb-5">
                            Sekolah terbaik dengan fasilitas modern dan
                            kurikulum internasional untuk mencetak pemimpin masa
                            depan.
                        </p>
                        <div class="d-flex flex-wrap gap-3">
                            <Link
                                v-if="page.props.auth.user"
                                class="btn btn-primary btn-lg px-5 rounded-pill shadow-lg hover-lift"
                                :href="home.index()"
                            >
                                Dashboard
                            </Link>
                            <Link
                                v-else
                                class="btn btn-primary btn-lg px-5 rounded-pill shadow-lg hover-lift"
                                :href="login()"
                            >
                                Daftar Sekarang
                            </Link>
                            <Link
                                class="btn btn-outline-primary btn-lg px-5 rounded-pill hover-lift"
                                :href="check()"
                            >
                                Cek Status
                            </Link>
                        </div>
                        <div class="mt-5 d-flex align-items-center gap-4">
                            <div class="d-flex -space-x-2">
                                <img
                                    class="rounded-circle border border-2 border-white shadow-sm"
                                    width="40"
                                    alt="User"
                                    src="https://i.pravatar.cc/150?u=1"
                                    style="margin-left: 0px"
                                /><img
                                    class="rounded-circle border border-2 border-white shadow-sm"
                                    width="40"
                                    alt="User"
                                    src="https://i.pravatar.cc/150?u=2"
                                    style="margin-left: -10px"
                                /><img
                                    class="rounded-circle border border-2 border-white shadow-sm"
                                    width="40"
                                    alt="User"
                                    src="https://i.pravatar.cc/150?u=3"
                                    style="margin-left: -10px"
                                /><img
                                    class="rounded-circle border border-2 border-white shadow-sm"
                                    width="40"
                                    alt="User"
                                    src="https://i.pravatar.cc/150?u=4"
                                    style="margin-left: -10px"
                                />
                            </div>
                            <p class="small mb-0 text-secondary fw-bold">
                                Bergabung dengan 1,200+ calon siswa lainnya
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div
                        class="position-relative"
                        style="opacity: 1; transform: none"
                    >
                        <img
                            class="img-fluid rounded-5 shadow-2xl"
                            alt="School"
                            src="https://eduport.webestica.com/assets/images/element/07.png"
                        />
                        <div
                            class="position-absolute top-100 start-0 translate-middle-y bg-light-subtle p-4 rounded-4 shadow-lg d-none d-md-block"
                            style="margin-left: -30px"
                        >
                            <div class="d-flex align-items-center gap-3">
                                <div
                                    class="bg-success-subtle p-2 rounded-circle"
                                >
                                    <CircleCheckBig class="text-success" />
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-0">Akreditasi A</h6>
                                    <small class="text-secondary">
                                        Memenuhi standar nasional
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Link, usePage } from '@inertiajs/vue3';
import { CircleCheckBig } from '@lucide/vue';
import { check, login } from '@/routes';
import home from '@/routes/dashboard/home';

const page = usePage();
</script>
