<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>

        <div
            class="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3 position-relative overflow-hidden"
        >
            <div class="container position-relative z-1">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div
                            class="card border-0 shadow-xl rounded-5 overflow-hidden"
                            style="opacity: 1; transform: none"
                        >
                            <div class="row g-0">
                                <div
                                    class="col-lg-6 bg-primary d-none d-lg-flex flex-column justify-content-center p-5 text-center position-relative"
                                >
                                    <div class="position-relative z-1">
                                        <div
                                            class="bg-opacity-20 d-inline-block rounded-circle mb-4"
                                        >
                                            <CircleCheckBig :size="96" />
                                        </div>
                                        <h2
                                            class="display-6 fw-bold mb-2 text-light"
                                        >
                                            {{ $page.props.name }}
                                        </h2>
                                        <p class="opacity-75 mb-5 text-light">
                                            Gerbang menuju masa depan gemilang
                                            bagi putra-putri terbaik bangsa.
                                        </p>
                                        <div class="row g-3 text-start">
                                            <div class="col-12">
                                                <div
                                                    class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"
                                                >
                                                    <div class="me-3">
                                                        <Files :size="24" />
                                                    </div>
                                                    <span class="fw-medium"
                                                        >Proses 100%
                                                        Online</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div
                                                    class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"
                                                >
                                                    <div class="me-3">
                                                        <Clock :size="24" />
                                                    </div>
                                                    <span class="fw-medium"
                                                        >Update Status
                                                        Real-time</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div
                                                    class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"
                                                >
                                                    <div class="me-3">
                                                        <CreditCard
                                                            :size="24"
                                                        />
                                                    </div>
                                                    <span class="fw-medium"
                                                        >Pembayaran Mudah</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-lg-6 p-4 p-md-5 bg-body-tertiary"
                                >
                                    <div class="mb-4">
                                        <h3 class="fw-bold mb-1">
                                            Selamat Datang
                                        </h3>
                                        <p class="text-secondary">
                                            Silahkan masuk ke akun orang tua
                                            Anda.
                                        </p>
                                    </div>
                                    <form @submit.prevent="submit">
                                        <div class="mb-4">
                                            <label
                                                class="form-label small fw-bold"
                                                >Email Peserta Didik</label
                                            >
                                            <div
                                                class="input-group has-validation"
                                            >
                                                <span class="input-group-text">
                                                    <Mail :size="16" />
                                                </span>
                                                <input
                                                    v-model="form.email"
                                                    class="form-control"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors.email,
                                                    }"
                                                    placeholder="nama@email.com"
                                                    type="email"
                                                />
                                                <div class="invalid-feedback">
                                                    {{ form.errors.email }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div
                                                class="d-flex justify-content-between align-items-center mb-2"
                                            >
                                                <label
                                                    class="form-label small fw-bold mb-0"
                                                    >Kata Sandi</label
                                                ><a
                                                    size="14"
                                                    class="text-decoration-none small fw-bold"
                                                    href="/forgot-password"
                                                    data-discover="true"
                                                    >Lupa Sandi?</a
                                                >
                                            </div>
                                            <div
                                                class="input-group has-validation"
                                            >
                                                <span class="input-group-text">
                                                    <Lock :size="16" />
                                                </span>
                                                <input
                                                    v-model="form.password"
                                                    class="form-control"
                                                    :class="{
                                                        'is-invalid':
                                                            form.errors
                                                                .password,
                                                    }"
                                                    placeholder="Kata Sandi"
                                                    :type="
                                                        show
                                                            ? 'text'
                                                            : 'password'
                                                    "
                                                />
                                                <button
                                                    type="button"
                                                    class="input-group-text"
                                                    @click="showPassword"
                                                >
                                                    <Eye
                                                        :size="16"
                                                        v-if="!show"
                                                    />
                                                    <EyeClosed
                                                        :size="16"
                                                        v-else
                                                    />
                                                </button>
                                                <div class="invalid-feedback">
                                                    {{ form.errors.password }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4 form-check">
                                            <input
                                                class="form-check-input"
                                                id="remember"
                                                type="checkbox"
                                            />
                                            <label
                                                class="form-check-label small"
                                                for="remember"
                                                >Ingat saya di perangkat
                                                ini</label
                                            >
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-primary w-100"
                                            :disabled="form.processing"
                                        >
                                            Masuk
                                        </button>
                                        <div
                                            class="position-relative text-center my-3"
                                        >
                                            <span class="text-secondary small">
                                                Atau masuk dengan
                                            </span>
                                        </div>
                                        <div class="row g-3 mb-4">
                                            <div class="col-12">
                                                <button
                                                    type="button"
                                                    class="btn btn-light text-dark w-100 d-flex align-items-center justify-content-center"
                                                >
                                                    <img
                                                        width="16"
                                                        class="me-2"
                                                        alt="Google"
                                                        src="https://www.google.com/favicon.ico"
                                                    />
                                                    Google
                                                </button>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <p
                                                class="small text-secondary mb-0"
                                            >
                                                Belum memiliki akun?
                                                <a
                                                    class="text-decoration-none fw-bold"
                                                    href="/register"
                                                    data-discover="true"
                                                    >Daftar Akun Baru</a
                                                >
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Head, useForm } from '@inertiajs/vue3';
import {
    CircleCheckBig,
    Clock,
    CreditCard,
    Eye,
    EyeClosed,
    Files,
    Lock,
    Mail,
} from '@lucide/vue';
import { ref } from 'vue';
import { login } from '@/routes';
import type { Meta } from '@/types/meta';
defineProps<{
    meta: Meta;
}>();

const show = ref(false);

const form = useForm({
    email: '',
    password: '',
});

const submit = () => {
    form.post(login().url, {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('password');
        },
    });
};

const showPassword = () => {
    show.value = !show.value;
};
</script>
