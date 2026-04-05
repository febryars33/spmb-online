<template>
    <div>
        <Head>
            <title>{{ meta.title }}</title>
            <meta name="description" :content="meta.description" />
        </Head>
        <div class="card bg-body-tertiary border-0">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h4 class="fw-bold mb-1">{{ meta.title }}</h4>
                        <p class="text-secondary small mb-0">
                            Unggah berkas dalam format PDF <strong>(Direkomendasikan)</strong> atau Gambar (Maks. 2MB)
                        </p>
                    </div>
                    <div
                        class="badge rounded-pill px-3 py-2 fw-bold"
                        :class="{
                            'bg-success-subtle text-success':
                                candidate.documentable.filter((document) => document.name !== null).length === candidate.documentable.length,
                            'bg-danger-subtle text-danger':
                                candidate.documentable.filter((document) => document.name !== null).length !== candidate.documentable.length,
                        }"
                    >
                        {{ candidate.documentable.filter((document) => document.name !== null).length }}/{{ candidate.documentable.length }}
                        Dokumen Terunggah
                    </div>
                </div>

                <div v-if="mount" class="row g-4">
                    <div v-for="document in candidate.documentable" class="col-md-6" :key="document.id">
                        <BOverlay rounded="lg" variant="transparent" :show="overlay.id === document.id">
                            <div class="card border-0 rounded-5 h-100 shadow-sm border-0">
                                <div v-if="document.name" class="p-4">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <label class="form-label small fw-bold d-block mb-1">{{ document.document_type.name }}</label>
                                            <div class="d-flex align-items-center text-success small fw-bold">
                                                <CircleCheckBig :size="16" class="me-2" />
                                                Terverifikasi Sistem
                                            </div>
                                        </div>
                                        <div class="p-2 rounded-circle bg-success-subtle text-success">
                                            <Check />
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <div class="rounded-4 p-3 border">
                                            <div class="d-flex align-items-center mb-3">
                                                <div
                                                    v-if="document.mime === 'application/pdf'"
                                                    class="bg-danger-subtle p-2 rounded-3 me-3 text-danger"
                                                >
                                                    <FileText />
                                                </div>
                                                <div v-else class="bg-success-subtle p-2 rounded-3 me-3 text-success">
                                                    <Image />
                                                </div>
                                                <div class="overflow-hidden">
                                                    <h6 class="small fw-bold mb-0 text-truncate">
                                                        {{ document.mime === 'application/pdf' ? 'PDF' : 'Gambar' }}
                                                    </h6>
                                                    <small class="text-secondary">
                                                        {{
                                                            typeof document.size === 'number'
                                                                ? (document.size / (1024 * 1024)).toFixed(2)
                                                                : 'Tidak diketahui'
                                                        }}
                                                        MB
                                                    </small>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <button type="button" class="btn btn-sm btn-primary">
                                                    <Search :size="16" />
                                                </button>
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-danger"
                                                    @click="trash(candidate.id, document.id, document.document_type.name)"
                                                    :disabled="form.processing"
                                                >
                                                    <Trash :size="16" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="p-4">
                                    <div class="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <label class="form-label small fw-bold d-block mb-1">{{ document.document_type.name }}</label>
                                            <div class="d-flex align-items-center text-secondary small">
                                                <CircleAlert :size="16" class="me-2" />
                                                Belum diunggah
                                            </div>
                                        </div>
                                        <div class="p-2 rounded-circle text-primary shadow-sm">
                                            <Upload />
                                        </div>
                                    </div>
                                    <Dropzone :item-id="document.document_type.id" @dropped="handleUpload" />
                                </div>
                            </div>
                        </BOverlay>
                    </div>
                </div>

                <div class="mt-5 d-flex justify-content-between">
                    <Link :href="dashboard.form.form(candidate.id)" class="btn btn-sm btn-outline-secondary px-4 rounded-pill">Kembali</Link>
                    <button type="submit" class="btn btn-sm btn-primary px-5 rounded-pill">Lanjutkan</button>
                </div>
            </div>
        </div>
        <Teleport v-if="mount" to="body">
            <Toaster />
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import Dropzone from '@/Components/Forms/Dropzone.vue'
import Form from '@/Layouts/Form.vue'
import dashboard from '@/routes/dashboard'
import document from '@/routes/document'
import type { Meta } from '@/types/meta'
import type { Candidate } from '@/types/models/candidate'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { Check, CircleAlert, CircleCheckBig, FileText, Image, Search, Trash, Upload } from '@lucide/vue'
import { useModal } from 'bootstrap-vue-next'
import { onMounted, ref } from 'vue'
import { Toaster } from 'vue-sonner'

defineOptions({
    layout: Form,
})

defineProps<{
    meta: Meta
    candidate: Candidate
}>()

const mount = ref(false)

onMounted(() => {
    mount.value = true
})

const { create } = useModal()

const overlay = ref({
    id: 0,
    show: false,
})

const form = useForm({
    id: 0,
    file: null,
})

const handleUpload = ({ id, files }: { id: string; files: FileList }) => {
    if (!files.length) return

    form.id = Number(id)
    form.file = files[0]

    overlay.value = {
        id: Number(id),
        show: true,
    }

    form.post(document.upload().url, {
        preserveScroll: true,
        forceFormData: true,
        onFinish: () => {
            form.reset()
            overlay.value = {
                id: 0,
                show: false,
            }
        },
    })
}

const trash = (uuid: string, id: number, title: string) => {
    create({
        size: 'md',
        body: 'Apakah anda yakin ingin menghapus file ini?',
        bodyClass: 'small text-muted',
        title: title,
        okClass: 'btn-danger',
        okTitle: 'Hapus',
        centered: true,
        cancelTitle: 'Batal',
        onOk: () => {
            form.processing = true
            useForm().patch(
                dashboard.form.document.null({
                    candidate: uuid,
                    document: id,
                }).url,
                {
                    preserveScroll: true,
                    onFinish: () => {
                        form.reset()
                        form.processing = false
                    },
                },
            )
        },
    }).show()
}
</script>
