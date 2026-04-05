<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>
        <div class="container py-5">
            <div class="row justify-content-between align-items-center mb-5">
                <div class="col-lg-6">
                    <h2 class="fw-bold mb-1">Dashboard Orang Tua</h2>
                    <p class="text-muted m-0">Kelola pendaftaran anak-anak Anda di sini.</p>
                </div>
                <div class="col-lg-6">
                    <button
                        class="btn btn-primary rounded-pill d-flex align-items-center ms-0 ms-lg-auto"
                        @click="modal = true"
                        :disabled="form.processing"
                    >
                        <UserPlus :size="24" class="me-2" />
                        Tambah Pendaftaran
                    </button>
                </div>
            </div>

            <InfiniteScroll data="candidates">
                <div v-if="candidates.data.length" class="row g-4">
                    <TransitionGroup name="fadeLeft">
                        <div v-for="candidate in candidates.data" class="col-md-6 col-lg-4" :key="candidate.id" style="--animate-duration: 0.3s">
                            <div class="card card-hover bg-body-tertiary border-0 shadow-sm rounded-4 overflow-hidden h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div
                                            class="bg-primary-subtle rounded-4 d-flex align-items-center justify-content-center"
                                            style="width: 60px; height: 60px"
                                        >
                                            <ArrowLeftRight v-if="candidate.type === 'transfer'" class="text-primary" />
                                            <UserPlus v-if="candidate.type === 'new'" class="text-primary" />
                                        </div>
                                        <span class="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary">DRAFT</span>
                                    </div>
                                    <h5 class="fw-bold mb-1" :class="{ 'fst-italic opacity-50': !candidate.name }">
                                        {{ candidate.name || 'Nama Belum Diisi' }}
                                    </h5>
                                    <p class="small text-secondary mb-3">
                                        Jenis Pendaftaran:
                                        <template v-if="!candidate.type">Belum Dipilih</template>
                                        <template v-else>
                                            <span class="fw-bold">{{ candidate.type === 'new' ? 'Siswa Baru' : 'Siswa Pindahan' }}</span>
                                        </template>
                                    </p>
                                    <div class="mb-4">
                                        <div class="d-flex justify-content-between mb-1">
                                            <span class="small text-secondary">Progress</span
                                            ><span class="small fw-bold">{{ candidate.progress }}%</span>
                                        </div>
                                        <div class="progress" style="height: 6px">
                                            <div
                                                class="progress-bar"
                                                :style="{
                                                    'background-color': `hsl(${candidate.progress * 1.2}, 60%, 50%)`,
                                                    width: candidate.progress + '%',
                                                }"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-auto">
                                        <div class="d-flex gap-2">
                                            <Link :href="dashboard.form.guide(candidate.id)" class="btn btn-sm btn-primary px-3 rounded-pill">
                                                Lengkapi
                                            </Link>
                                            <button
                                                class="btn btn-sm btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                title="Hapus Pendaftaran"
                                                :disabled="form.processing"
                                                @click="trash(candidate.id)"
                                            >
                                                <Trash :size="18" />
                                            </button>
                                        </div>
                                        <small class="text-secondary">Update: 02 April 2026</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TransitionGroup>
                </div>
                <div v-else class="alert alert-warning">Belum ada pendaftaran.</div>
            </InfiniteScroll>
        </div>
        <Teleport v-if="mount" to="body">
            <Toaster />
            <BModal v-model="modal" title="Pilih Tipe Pendaftaran" @ok="ok" @hide="hide" size="lg" :ok-disabled="form.type === null">
                <div class="row g-4 justify-content-center">
                    <div class="col-md-5">
                        <div
                            class="card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary"
                            :class="{ 'bg-primary-subtle': form.type === 'new' }"
                            @click="choose('new')"
                        >
                            <UserPlus :size="48" class="text-primary mx-auto mb-2" />
                            <h5 class="fw-bold">Siswa Baru</h5>
                            <p class="small text-muted mb-0">Lulusan SMP/MTS yang akan masuk ke kelas X.</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div
                            class="card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary"
                            :class="{ 'bg-primary-subtle': form.type === 'transfer' }"
                            @click="choose('transfer')"
                        >
                            <ArrowLeftRight :size="48" class="text-primary mx-auto mb-2" />
                            <h5 class="fw-bold">Siswa Pindahan</h5>
                            <p class="small text-muted mb-0">Siswa dari SMA lain yang ingin pindah ke sekolah kami.</p>
                        </div>
                    </div>
                </div>
            </BModal>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import dashboard from '@/routes/dashboard'
import home from '@/routes/dashboard/home'
import type { Meta } from '@/types/meta'
import type { Candidate } from '@/types/models/candidate'
import type { Pagination } from '@/types/pagination'
import { Head, InfiniteScroll, Link, useForm } from '@inertiajs/vue3'
import { ArrowLeftRight, Trash, UserPlus } from '@lucide/vue'
import { useModal } from 'bootstrap-vue-next'
import { onMounted, ref } from 'vue'
import { toast, Toaster } from 'vue-sonner'

defineProps<{
    meta: Meta
    candidates: Pagination<Candidate>
}>()

const mount = ref(false)

const { create } = useModal()

onMounted(() => {
    mount.value = true
})

const modal = ref(false)

const form = useForm<{
    type: string | null
}>({
    type: null,
})

const ok = () => {
    form.post(home.store().url, {
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        },
    })
}

const hide = () => {
    form.type = null
}

const choose = (type: string) => {
    form.type = type
}

const trash = (uuid: string) => {
    create({
        size: 'md',
        body: 'Semua data yang terkait dengan pendaftaran ini akan hilang secara permanen termasuk data Isi Formulir & Berkas Persyaratan. Tindakan ini tidak dapat dikembalikan.',
        bodyClass: 'small text-muted',
        title: 'Hapus Pendaftaran?',
        okClass: 'btn-danger',
        okTitle: 'Hapus',
        centered: true,
        cancelTitle: 'Batal',
        onOk: () => {
            useForm().delete(dashboard.form.destroy(uuid).url, {
                preserveScroll: true,
                onSuccess: (page) => {
                    toast.success(String(page.flash.message), {
                        style: {
                            background: 'var(--bs-success)',
                            color: '#fff',
                            border: 'none',
                            fontFamily: 'Poppins',
                        },
                        position: 'top-right',
                    })
                },
                onError: () => {
                    toast.error('Gagal menghapus pendaftaran', {
                        style: {
                            background: 'var(--bs-danger)',
                            color: '#fff',
                            border: 'none',
                            fontFamily: 'Poppins',
                        },
                        position: 'top-right',
                    })
                },
                onFinish: () => {
                    form.reset()
                },
            })
        },
    }).show()
}
</script>
