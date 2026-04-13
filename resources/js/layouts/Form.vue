<template>
    <BApp>
        <div class="d-flex flex-column min-vh-100">
            <header>
                <Navbar />
            </header>

            <main class="flex-grow-1">
                <div class="container py-5">
                    <Link
                        :href="dashboard.home.index()"
                        class="d-inline-flex align-items-center gap-2 text-secondary text-decoration-none small fw-bold mb-4"
                    >
                        <ArrowLeft :size="16" />
                        Kembali ke Dashboard
                    </Link>

                    <div class="row g-4 mt-0">
                        <div class="col-lg-3">
                            <div class="sticky-top" style="top: 20px">
                                <div
                                    class="card border-0 bg-body-tertiary rounded-4"
                                >
                                    <div class="card-body p-4">
                                        <div
                                            class="d-flex align-items-center gap-3 mb-4"
                                        >
                                            <div
                                                class="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                                                style="
                                                    width: 44px;
                                                    height: 44px;
                                                    font-size: 16px;
                                                "
                                            >
                                                {{ initials }}
                                            </div>
                                            <div class="overflow-hidden">
                                                <p
                                                    class="fw-bold small mb-0 text-truncate"
                                                >
                                                    {{
                                                        page.props.auth.user
                                                            .name
                                                    }}
                                                </p>
                                                <p
                                                    class="text-secondary mb-0"
                                                    style="font-size: 11px"
                                                >
                                                    No. Reg belum terbentuk
                                                </p>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <div
                                                class="d-flex justify-content-between mb-1"
                                            >
                                                <span
                                                    class="small text-secondary"
                                                    >Kelengkapan Data</span
                                                >
                                                <span
                                                    class="small fw-bold text-primary"
                                                    >{{
                                                        candidate.snapshot
                                                            .progress
                                                    }}%</span
                                                >
                                            </div>
                                            <div
                                                class="progress rounded-pill"
                                                style="height: 6px"
                                            >
                                                <div
                                                    class="progress-bar rounded-pill"
                                                    :style="{
                                                        width: `${candidate.snapshot.progress}%`,
                                                    }"
                                                />
                                            </div>
                                        </div>

                                        <hr
                                            class="text-secondary opacity-25 mb-3 mt-0"
                                        />

                                        <nav class="d-flex flex-column gap-1">
                                            <SidebarItem
                                                v-for="item in navItems"
                                                :key="item.label"
                                                :href="item.href"
                                                :icon="item.icon"
                                                :label="item.label"
                                                :active="
                                                    $page.url === item.href
                                                "
                                                :disabled="item.disabled"
                                            />
                                        </nav>
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
import { Link, usePage } from '@inertiajs/vue3';
import {
    ArrowLeft,
    CalendarDays,
    CreditCard,
    FileSearchCorner,
    FormInput,
    ScanText,
    Send,
    User,
} from '@lucide/vue';
import { computed } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import SidebarItem from '@/components/SidebarItem.vue';
import dashboard from '@/routes/dashboard';
import type { Candidate } from '@/types/models/candidate';

const page = usePage();

const props = defineProps<{
    candidate: Candidate;
}>();

const initials = computed(() =>
    (page.props.auth.user.name as string)
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join(''),
);

const navItems = computed(() => [
    {
        label: 'Petunjuk Pengisian',
        icon: FormInput,
        href: dashboard.form.guide(props.candidate.id).url,
        disabled: false,
    },
    {
        label: 'Formulir Pendaftaran',
        icon: User,
        href: dashboard.form.form(props.candidate.id).url,
        disabled: false,
    },
    {
        label: 'Berkas Persyaratan',
        icon: FileSearchCorner,
        href: dashboard.form.document(props.candidate.id).url,
        disabled: false,
    },
    {
        label: 'Kirim Berkas',
        icon: ScanText,
        href: dashboard.form.send(props.candidate.id).url,
        disabled: true === props.candidate.is_locked,
    },
    {
        label: 'Status Peninjauan',
        icon: Send,
        href: dashboard.form.review(props.candidate.id).url,
        disabled: false,
    },
    {
        label: 'Pembayaran',
        icon: CreditCard,
        href: null,
        url: null,
        disabled: true,
    },
    {
        label: 'Jadwal Tes',
        icon: CalendarDays,
        href: null,
        url: null,
        disabled: true,
    },
]);
</script>
