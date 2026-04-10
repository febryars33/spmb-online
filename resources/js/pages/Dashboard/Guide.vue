<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>
        <div class="card bg-body-tertiary border-0">
            <div class="card-body">
                <div
                    class="d-flex justify-content-between align-items-center mb-4"
                >
                    <h4 class="fw-bold mb-0">{{ meta.title }}</h4>
                </div>

                <ol>
                    <li v-for="guide in guides" :key="guide">
                        {{ guide }}
                    </li>
                </ol>

                <p>
                    Jika sudah memahami langkah-langkah di atas, silakan lanjut
                    ke tahap berikutnya. Jika ada pertanyaan, kunjungi halaman
                    <Link :href="faq()" class="fw-bold">FAQ</Link> atau Hubungi
                    Kami.
                </p>

                <div class="mt-5 d-flex justify-content-between">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary px-4 rounded-pill"
                        disabled
                    >
                        Kembali
                    </button>
                    <button
                        type="button"
                        class="btn btn-sm btn-primary px-5 rounded-pill"
                        @click="
                            () =>
                                router.visit(dashboard.form.form(candidate.id))
                        "
                    >
                        Lanjutkan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head, Link, router } from '@inertiajs/vue3';
import Form from '@/layouts/Form.vue';
import { faq } from '@/routes';
import dashboard from '@/routes/dashboard';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';

defineOptions({
    layout: Form,
});

defineProps<{
    meta: Meta;
    candidate: Candidate;
    guides: string[];
}>();
</script>
