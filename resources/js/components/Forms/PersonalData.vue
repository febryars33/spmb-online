<template>
    <form>
        <div class="mb-5">
            <div class="mb-5">
                <h4
                    class="text-primary-emphasis border-start border-primary ps-2"
                >
                    Identitas Anak
                </h4>
                <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label" for="name"
                        >Nama Lengkap</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            id="name"
                            size="sm"
                            v-model="model.name"
                            v-uppercase
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="gender"
                        >Jenis Kelamin</label
                    >
                    <div class="col-sm-9">
                        <BFormRadioGroup id="gender" v-model="model.gender">
                            <BFormRadio value="male">Laki-laki</BFormRadio>
                            <BFormRadio value="female">Perempuan</BFormRadio>
                        </BFormRadioGroup>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="religion"
                        >Agama</label
                    >
                    <div class="col-sm-9">
                        <Select
                            label="Agama"
                            v-model="model.religion_id"
                            :options="religions"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="birth_place"
                        >Tempat Lahir</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            id="birth_place"
                            size="sm"
                            v-model="model.birth_place"
                            v-uppercase
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="birth_date"
                        >Tanggal Lahir</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="date"
                            id="birth_date"
                            size="sm"
                            v-model="model.birth_date"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="nisn"
                        >NISN</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="tel"
                            id="nisn"
                            size="sm"
                            v-model="model.nisn"
                            @keypress="number($event)"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="nik_number"
                        >No. NIK</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="tel"
                            id="nik_number"
                            size="sm"
                            v-model="model.nik_number"
                            @keypress="number($event)"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-3 col-form-label" for="kk_number"
                        >No. KK</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            id="kk_number"
                            size="sm"
                            v-model="model.kk_number"
                            @keypress="number($event)"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label
                        class="col-sm-3 col-form-label"
                        for="birth-certificate-number"
                        >No. Registrasi Akta Lahir</label
                    >
                    <div class="col-sm-9">
                        <BFormInput
                            type="text"
                            id="birth-certificate-number"
                            size="sm"
                            v-model="model.birth_certificate_number"
                            v-uppercase
                        />
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <h4
                    class="text-primary-emphasis text-primary-emphasis border-start border-primary ps-2"
                >
                    Pendidikan Sebelumnya
                </h4>
                <div class="row mb-3">
                    <label for="school" class="col-sm-3 col-form-label">
                        Asal Sekolah
                    </label>
                    <div class="col-sm-9">
                        <div class="mb-5">
                            <SchoolInput v-model="model.school" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <h4 class="text-primary-emphasis border-start border-primary ps-2">
                Status Tempat Tinggal dan Alamat
            </h4>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label" for="address"
                    >Alamat Lengkap</label
                >
                <div class="col-sm-9">
                    <BFormTextarea
                        id="address"
                        v-model="model.address"
                        size="sm"
                        rows="3"
                    />
                </div>
            </div>
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label" for="live-with"
                    >Tinggal Bersama</label
                >
                <div class="col-sm-9">
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
import type { Religion } from '@/types/models/religion';
import type { School } from '@/types/models/school';
import SchoolInput from './SchoolInput.vue';
import Select from './Select.vue';

interface PersonalData {
    kk_number: string | null;
    nik_number: string | null;
    name: string | null;
    nisn: string | null;
    birth_place: string | null;
    birth_date: string | null;
    father_name: string | null;
    mother_name: string | null;
    address: string | null;
    gender: string | null;
    religion_id: number | null;
    birth_certificate_number: string | null;
    school: School | null;
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
        school: null,
    },
});

defineProps<{
    religions: Religion[];
}>();

const number = (e: KeyboardEvent) => {
    const charCode = e.which ? e.which : e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
    }
};

const vUppercase = {
    updated(el: { value: string }) {
        el.value = el.value.toUpperCase();
    },
};
</script>
