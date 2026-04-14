<template>
    <Head>
        <title>{{ meta.title }}</title>
        <meta name="description" :content="meta.description" />
    </Head>

    <BCard rounded="lg">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h4 class="fw-bold mb-1">{{ meta.title }}</h4>
                <p class="text-secondary small mb-0">
                    Unggah berkas dalam format PDF
                    <strong>(Direkomendasikan)</strong>
                    atau Gambar (Maks. 2MB)
                </p>
            </div>
            <span
                class="badge rounded-pill px-3 py-2 fw-bold"
                :class="
                    uploadedCount === totalCount
                        ? 'bg-success-subtle text-success'
                        : 'bg-danger-subtle text-danger'
                "
            >
                {{ uploadedCount }}/{{ totalCount }} Dokumen Terunggah
            </span>
        </div>

        <div v-if="mount" class="row g-4">
            <div
                v-for="doc in candidate.documentable"
                :key="doc.id"
                class="col-md-6"
            >
                <BOverlay
                    rounded="lg"
                    variant="transparent"
                    :show="activeOverlayId === doc.id"
                >
                    <div class="card border-0 rounded-5 h-100 shadow-sm">
                        <div class="p-4">
                            <div
                                class="d-flex justify-content-between align-items-start mb-3"
                            >
                                <div>
                                    <p class="small fw-bold mb-1">
                                        {{ doc.document_type.name }}
                                        <sup
                                            v-if="doc.is_required"
                                            class="text-danger"
                                            >*</sup
                                        >
                                    </p>
                                    <div
                                        class="d-flex align-items-center small fw-bold"
                                        :class="
                                            doc.name
                                                ? 'text-success'
                                                : 'text-secondary'
                                        "
                                    >
                                        <component
                                            :is="
                                                doc.name
                                                    ? CircleCheckBig
                                                    : CircleAlert
                                            "
                                            :size="16"
                                            class="me-2"
                                        />
                                        {{
                                            doc.name
                                                ? 'Terverifikasi Sistem'
                                                : 'Belum diunggah'
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="p-2 rounded-circle"
                                    :class="
                                        doc.name
                                            ? 'bg-success-subtle text-success'
                                            : 'text-primary shadow-sm'
                                    "
                                >
                                    <component
                                        :is="doc.name ? Check : Upload"
                                    />
                                </div>
                            </div>

                            <template v-if="doc.name">
                                <div class="rounded-4 p-3 border">
                                    <div class="d-flex align-items-center mb-3">
                                        <div
                                            class="p-2 rounded-3 me-3"
                                            :class="
                                                doc.mime === 'application/pdf'
                                                    ? 'bg-danger-subtle text-danger'
                                                    : 'bg-success-subtle text-success'
                                            "
                                        >
                                            <component
                                                :is="
                                                    doc.mime ===
                                                    'application/pdf'
                                                        ? FileText
                                                        : ImageIcon
                                                "
                                            />
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="fw-bold mb-0">
                                                {{
                                                    doc.mime ===
                                                    'application/pdf'
                                                        ? 'PDF'
                                                        : 'Gambar'
                                                }}
                                            </p>
                                            <small class="text-secondary">
                                                {{ formatSize(doc.size) }}
                                                MB
                                            </small>
                                        </div>
                                    </div>

                                    <div class="d-flex gap-2">
                                        <button
                                            class="btn btn-sm btn-primary flex-grow-1 fw-bold"
                                        >
                                            Lihat
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-danger"
                                            :disabled="
                                                form.processing ||
                                                candidate.is_locked
                                            "
                                            @click="
                                                confirmDelete(
                                                    candidate.id,
                                                    doc.id,
                                                    doc.document_type.name,
                                                )
                                            "
                                        >
                                            <Trash :size="16" />
                                        </button>
                                    </div>
                                </div>
                            </template>

                            <Dropzone
                                v-else
                                :item-id="doc.id"
                                @dropped="handleUpload"
                            />
                        </div>
                    </div>
                </BOverlay>
            </div>
        </div>
    </BCard>

    <Teleport v-if="mount" to="body">
        <Toaster />
    </Teleport>
</template>

<script lang="ts" setup>
import { Head, useForm } from '@inertiajs/vue3';
import {
    Check,
    CircleAlert,
    CircleCheckBig,
    FileText,
    Image as ImageIcon,
    Trash,
    Upload,
} from '@lucide/vue';
import { useModal } from 'bootstrap-vue-next';
import { computed, onMounted, ref } from 'vue';
import { toast, Toaster } from 'vue-sonner';
import Dropzone from '@/components/Forms/Dropzone.vue';
import Form from '@/layouts/Form.vue';
import dashboard from '@/routes/dashboard';
import type { Meta } from '@/types/meta';
import type { Candidate } from '@/types/models/candidate';

defineOptions({ layout: Form });

const props = defineProps<{
    meta: Meta;
    candidate: Candidate;
}>();

const mount = ref(false);
const activeOverlayId = ref<number | null>(null);

const form = useForm<{ file: File | null }>({
    file: null,
});

const uploadedCount = computed(
    () => props.candidate.documentable.filter((d) => d.name !== null).length,
);

const totalCount = computed(() => props.candidate.documentable.length);

const formatSize = (size: unknown): string =>
    typeof size === 'number'
        ? (size / (1024 * 1024)).toFixed(2)
        : 'Tidak diketahui';

onMounted(() => {
    mount.value = true;
});

const handleUpload = ({ id, files }: { id: string; files: FileList }) => {
    if (!files.length || props.candidate.is_locked) {
        return;
    }

    form.file = files[0];
    activeOverlayId.value = Number(id);

    form.post(
        dashboard.form.document.upload({
            candidate: props.candidate.id,
            document: Number(id),
        }).url,
        {
            preserveScroll: true,
            forceFormData: true,
            onFinish: () => {
                form.reset();
                activeOverlayId.value = null;
            },
            onSuccess: (success) => {
                toast.success(success.flash.message, {
                    style: {
                        background: 'var(--bs-success)',
                        color: '#fff',
                        border: 'none',
                        fontFamily: 'Rubik',
                    },
                    position: 'top-right',
                });
            },
            onError: (errors) => {
                if (errors.file || errors.message) {
                    toast.error(errors.file, {
                        style: {
                            background: 'var(--bs-danger)',
                            color: '#fff',
                            border: 'none',
                            fontFamily: 'Rubik',
                        },
                        position: 'top-right',
                    });
                }
            },
        },
    );
};

const { create } = useModal();

const confirmDelete = (uuid: string, id: number, title: string) => {
    if (props.candidate.is_locked) {
        return;
    }

    create({
        size: 'md',
        title,
        body: 'Apakah anda yakin ingin menghapus file ini?',
        bodyClass: 'small text-muted',
        okClass: 'btn-danger',
        okTitle: 'Hapus',
        cancelTitle: 'Batal',
        centered: true,
        onOk: () => {
            form.processing = true;
            useForm().patch(
                dashboard.form.document.null({ candidate: uuid, document: id })
                    .url,
                {
                    preserveScroll: true,
                    onFinish: () => {
                        form.reset();
                        form.processing = false;
                    },
                },
            );
        },
    }).show();
};
</script>
