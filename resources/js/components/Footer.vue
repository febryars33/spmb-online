<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-lg-3">
                <h3>Tentang Kami</h3>
                <ul class="list-unstyled small">
                    <li class="mb-2">
                        <Link
                            class="text-decoration-none text-secondary"
                            :href="home()"
                            >Beranda
                        </Link>
                    </li>

                    <li class="mb-2">
                        <Link
                            class="text-decoration-none text-secondary"
                            :href="check()"
                        >
                            Cek Pendaftaran
                        </Link>
                    </li>

                    <li class="mb-2">
                        <a
                            class="text-decoration-none text-secondary"
                            href="/login"
                            data-discover="true"
                            >Login</a
                        >
                    </li>

                    <li class="mb-2">
                        <a
                            class="text-decoration-none text-secondary"
                            href="/register"
                            data-discover="true"
                            >Daftar</a
                        >
                    </li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h3>Dukungan</h3>
                <ul class="list-unstyled small">
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Alur Pendaftaran</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Biaya Pendidikan</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Beasiswa</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >FAQ</a
                        >
                    </li>
                </ul>
            </div>
            <div class="col-lg-3">
                <ul class="list-unstyled small">
                    <h2 class="d-none d-lg-block">&nbsp;</h2>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Alur Pendaftaran</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Biaya Pendidikan</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >Beasiswa</a
                        >
                    </li>
                    <li class="mb-2">
                        <a href="#" class="text-decoration-none text-secondary"
                            >FAQ</a
                        >
                    </li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h1>Connect With Us</h1>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <img
                            src="../../img/facebook-48.png"
                            alt="facebook"
                            class="img-fluid"
                            width="48px"
                        />
                    </li>
                    <li class="list-inline-item">
                        <img
                            src="../../img/instagram-48.png"
                            alt="instagram"
                            class="img-fluid"
                            width="48px"
                        />
                    </li>
                    <li class="list-inline-item">
                        <img
                            src="../../img/tiktok-48.png"
                            alt="instagram"
                            class="img-fluid"
                            width="48px"
                        />
                    </li>
                    <li class="list-inline-item">
                        <img
                            src="../../img/youtube-48.png"
                            alt="instagram"
                            class="img-fluid"
                            width="48px"
                        />
                    </li>
                </ul>
                <p class="text-secondary small">
                    Jl. Sukagalih No.80, Sukagalih, Kec. Sukajadi, Kota Bandung,
                    Jawa Barat 40162
                </p>
            </div>
        </div>

        <div class="col-lg-12 mt-5">
            <div class="d-flex justify-content-between">
                <span class="small text-muted">
                    &copy; 2026 <Link :href="home()">SMA PGRI 1 Bandung</Link>.
                    Hak cipta dilindungi.
                </span>
                <span class="small text-muted">
                    Powered by
                    <span class="fw-bold">PT. Edubee Technology ID</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import { check, home } from '@/routes';
</script>
