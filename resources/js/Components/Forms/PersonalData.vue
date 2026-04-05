<template>
    <form>
        <div class="mb-5">
            <h4 class="text-primary-emphasis border-start border-primary ps-2">Identitas Anak</h4>
            <div class="mb-3">
                <label class="form-label" for="name">Nama Lengkap</label>
                <BFormInput type="text" id="name" size="sm" v-model="model.name" v-uppercase />
            </div>
            <div class="row mb-3">
                <div class="col-lg-6">
                    <label class="form-label" for="gender">Jenis Kelamin</label>
                    <BFormRadioGroup id="gender" v-model="model.gender">
                        <BFormRadio value="male">Laki-laki</BFormRadio>
                        <BFormRadio value="female">Perempuan</BFormRadio>
                    </BFormRadioGroup>
                </div>
                <div class="col-lg-6">
                    <label class="form-label" for="religion">Agama</label>
                    <Select label="Agama" v-model="model.religion_id" :options="religions" />
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-lg-6 mb-lg-0 mb-3">
                        <label class="form-label" for="birth_place">Tempat Lahir</label>
                        <BFormInput type="text" id="birth_place" size="sm" v-model="model.birth_place" v-uppercase />
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label" for="birth_date">Tanggal Lahir</label>
                        <BFormInput type="date" id="birth_date" size="sm" v-model="model.birth_date" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="nisn">NISN</label>
                <BFormInput type="tel" id="nisn" size="sm" v-model="model.nisn" @keypress="number($event)" />
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-lg-6">
                        <label class="form-label" for="nik_number">No. NIK</label>
                        <BFormInput type="tel" id="nik_number" size="sm" v-model="model.nik_number" @keypress="number($event)" />
                    </div>
                    <div class="col-lg-6 mb-lg-0 mb-3">
                        <label class="form-label" for="kk_number">No. KK</label>
                        <BFormInput type="text" id="kk_number" size="sm" v-model="model.kk_number" @keypress="number($event)" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label" for="birth-certificate-number">No. Registrasi Akta Lahir</label>
                <BFormInput type="text" id="birth-certificate-number" size="sm" v-model="model.birth_certificate_number" v-uppercase />
            </div>
            <h4 class="text-primary-emphasis text-primary-emphasis border-start border-primary ps-2">Pendidikan Sebelumnya</h4>
            <div class="mb-3">
                <label class="form-label" for="school-origin-name">Asal Sekolah</label>
                <BFormInput type="text" id="school-origin-name" size="sm" placeholder="Contoh: SMP Negeri 1 Bandung" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="school-origin-address">Alamat Sekolah</label>
                <BFormTextarea id="school-origin-address" size="sm" rows="3" />
            </div>
        </div>

        <div class="mb-5">
            <h4 class="text-primary-emphasis text-primary-emphasis border-start border-primary ps-2">Identitas Orang Tua</h4>
            <div class="mb-3">
                <div class="row">
                    <div class="col-lg-6">
                        <h6 class="text-primary">Identitas Ayah</h6>
                        <div class="mb-3">
                            <label class="form-label" for="father-name">Nama Ayah</label>
                            <BFormInput type="text" id="father-name" size="sm" v-model="model.father_name" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="father-nik">No. NIK</label>
                            <BFormInput type="text" id="father-nik" size="sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="father-job">Pekerjaan</label>
                            <BFormInput type="text" id="father-job" size="sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="father-address">Alamat Lengkap</label>
                            <BFormTextarea id="father-address" size="sm" rows="3" />
                        </div>
                        <div class="mb-lg-0 mb-3">
                            <label class="form-label" for="father-phone">No. Telepon</label>
                            <BFormInput type="text" id="father-phone" size="sm" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="text-primary">Identitas Ibu</h6>
                        <div class="mb-3">
                            <label class="form-label" for="mother-name">Nama Ibu</label>
                            <BFormInput type="text" id="mother-name" size="sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="mother-nik">No. NIK</label>
                            <BFormInput type="text" id="mother-nik" size="sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="mother-job">Pekerjaan</label>
                            <BFormInput type="text" id="mother-job" size="sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="mother-address">Alamat Lengkap</label>
                            <BFormTextarea id="mother-address" size="sm" rows="3" />
                        </div>
                        <div class="mb-lg-0 mb-3">
                            <label class="form-label" for="mother-phone">No. Telepon</label>
                            <BFormInput type="text" id="mother-phone" size="sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <h4 class="text-primary-emphasis border-start border-primary ps-2">Status Tempat Tinggal dan Alamat</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="mb-3">
                        <label class="form-label" for="address">Alamat Lengkap</label>
                        <BFormTextarea id="address" v-model="model.address" size="sm" rows="3" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <label class="form-label" for="live-with">Tinggal Bersama</label>
                    <BFormRadioGroup id="live-with" stacked>
                        <BFormRadio :value="null">Orang Tua</BFormRadio>
                        <BFormRadio :value="null">Wali</BFormRadio>
                        <BFormRadio :value="null">Saudara</BFormRadio>
                        <BFormRadio :value="null">Pesantren</BFormRadio>
                    </BFormRadioGroup>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts" setup>
import type { Religion } from '@/types/models/religion'
import Select from './Select.vue'

interface PersonalData {
    kk_number: string | null
    nik_number: string | null
    name: string | null
    nisn: string | null
    birth_place: string | null
    birth_date: string | null
    father_name: string | null
    mother_name: string | null
    address: string | null
    gender: string | null
    religion_id: number | null
    birth_certificate_number: string | null
}

const model = defineModel<PersonalData>({
    default: {
        kk_number: null,
        nik_number: null,
        name: null,
        nisn: null,
        birth_place: null,
        birth_date: null,
        father_name: null,
        mother_name: null,
        address: null,
        gender: null,
        religion_id: null,
        birth_certificate_number: null,
    },
})

defineProps<{
    religions: Religion[]
}>()

const number = (e: KeyboardEvent) => {
    const charCode = e.which ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault()
    }
}

const vUppercase = {
    updated(el: { value: string }) {
        el.value = el.value.toUpperCase()
    },
}
</script>
