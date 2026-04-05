<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded">
        <div class="container">
            <!-- 1. Logo di Kiri -->
            <Link class="navbar-brand col-lg-3 m-0" :href="home()">
                {{ page.props.name }}
            </Link>

            <!-- 2. Burger Button di Kanan (Mobile) -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- 3. Offcanvas Menu -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-lg-center flex-grow-1">
                        <li class="nav-item">
                            <Link class="nav-link me-0 me-lg-2 active" :href="home()">Beranda</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link me-0 me-lg-2" :href="faq()">FAQ</Link>
                        </li>
                        <li class="nav-item"><Link class="nav-link" :href="check()">Cek Pendaftaran</Link></li>
                    </ul>
                    <ul v-if="page.props.auth.user" class="navbar-nav justify-content-lg-end flex-grow-1">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ page.props.auth.user.name }}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><Link class="dropdown-item" :href="dashboard.home.index()">Dashboard</Link></li>
                                <li><a class="dropdown-item" href="#">Pengaturan</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" role="button" @click="logout()">Keluar</a></li>
                            </ul>
                        </li>
                    </ul>

                    <!-- 4. Right Button (Desktop: End, Mobile: Start) -->
                    <div v-if="!page.props.auth.user" class="d-lg-flex col-lg-3 justify-content-lg-end mt-3 mt-lg-0">
                        <Link :href="login()" class="btn btn-primary">Masuk</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { check, faq, home, login } from '@/routes'
import dashboard from '@/routes/dashboard'
import { Link, router, usePage } from '@inertiajs/vue3'

const page = usePage()

const logout = () => {
    router.post(
        '/logout',
        {},
        {
            onSuccess: () => {
                router.visit(home.url())
            },
        },
    )
}
</script>
