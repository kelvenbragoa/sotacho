<script setup>
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { onBeforeMount, reactive, ref, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';
import { useForm } from 'vee-validate';
// import { debounce } from 'lodash';
import { useToast } from 'primevue/usetoast';
import { debounce } from 'lodash-es';
import moment from 'moment';
// import { object, string, number, date } from 'yup';
import * as yup from 'yup';


const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(false);
const loadingButtonDelete = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const departments = ref(null);
const isLoadingButton = ref(false);


const schema = yup.object({
    name: yup.string().required().trim().label('Name'),
    code: yup.string().required().trim().label('Codigo'),
    location: yup.string().required().trim().label('Localizacao'),
    maximum_capacity: yup.string().required().trim().label('Capacidade'),
    is_principal_stock: yup.string().required().trim().label('StockPrincipal'),

});
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: schema
});
const [name] = defineField('name');
const [code] = defineField('code');
const [location] = defineField('location');
const [maximum_capacity] = defineField('maximum_capacity');
const [is_principal_stock] = defineField('is_principal_stock');

const image = ref();



function goBackUsingBack() {
    if (router) {
        router.back();
    }
}

const closeConfirmation = () => {
    displayConfirmation.value = false;
};
const confirmDeletion = (id) => {
    displayConfirmation.value = true;
    dataIdBeingDeleted.value = id;
};

function getSeverity(status) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warn';

        case 'renewal':
            return null;
    }
}

const onSubmit = handleSubmit((values) => {
    if (image.value != null) {
        values.image = image.value;
    }
    isLoadingButton.value = true;
    axios
        .post(`/api/centerstocks`, values,{
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
            // resetForm();
            router.back();
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Categoria criado com sucesso', life: 3000 });
        })
        .catch((error) => {
            isLoadingButton.value = false;
            toast.add({ severity: 'error', summary: `Erro`, detail: `${error.response.data.message}`, life: 3000 });
            if (error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        })
        .finally(() => {
            isLoadingButton.value = false;
        });
});

const getData = async (page = 1) => {
    axios
        .get(`/api/centerstocks/create`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            retriviedData.value = response.data.departments;
            departments.value = response.data.departments;

            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            goBackUsingBack();
        });
};

const deleteData = () => {
    loadingButtonDelete.value = true;

    axios
        .delete(`/api/centerstocks/${dataIdBeingDeleted.value}`)
        .then(() => {
            retriviedData.value.data = retriviedData.value.data.filter((data) => data.id !== dataIdBeingDeleted.value);
            closeConfirmation();
            toast.add({ severity: 'success', summary: `Sucesso`, detail: 'Sucesso ao apagar', life: 3000 });
        })
        .catch((error) => {
            toast.add({ severity: 'error', summary: `Erro`, detail: `${error}`, life: 3000 });
            loadingButtonDelete.value = false;
        })
        .finally(() => {
            loadingButtonDelete.value = false;
        });
};

const onPageChange = (event) => {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getData(currentPage.value);
};

const debouncedSearch = debounce(() => {
    getData(currentPage.value);
}, 300);

watch(searchQuery,debouncedSearch);

// onMounted(() => {
//     getData();
// });

</script>

<template>
    <div class="flex flex-col md:flex-row gap-12 min-h-screen items-center justify-center"  v-if="isLoadingDiv">
            <div class="w-full">
                <div class="flex flex-col gap-4 text-center">
                    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                    <p>Por Favor Aguarde...</p>
                </div>
            </div>
    </div>
    
    <div class="flex flex-col md:flex-row gap-12" v-else>
        <div class="w-full">
            
            <div class="card flex flex-col gap-4">
                <div class="w-full">
                    <Button label="Voltar" class="mr-2 mb-2" @click="goBackUsingBack"><i class="pi pi-angle-left"></i> Voltar</Button>
                </div>
                <div class="font-semibold text-xl">Centro de Stock</div>
                <small class="p-error">Os campos marcados * sao considerados campos obrigatorios.</small>
                <form @submit="onSubmit">
                    <div class="flex flex-col gap-2">
                        <label for="name">Nome</label>
                        <InputText v-model="name" id="name" placeholder="Nome" :class="{ 'p-invalid': errors.name }" type="text" />
                        <small id="name-help" class="p-error">{{ errors.name }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="code">Código</label>
                        <InputText v-model="code" id="code" placeholder="Codigo" :class="{ 'p-invalid': errors.code }" type="text" />
                        <small id="code-help" class="p-error">{{ errors.code }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="location">Localização</label>
                        <InputText v-model="location" id="location" placeholder="Localização" :class="{ 'p-invalid': errors.location }" type="text" />
                        <small id="location-help" class="p-error">{{ errors.location }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="maximum_capacity">Capacidade Máxima</label>
                        <InputText v-model="maximum_capacity" id="maximum_capacity" placeholder="Capacidade Máxima" :class="{ 'p-invalid': errors.maximum_capacity }" type="text" />
                        <small id="maximum_capacity-help" class="p-error">{{ errors.maximum_capacity }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="is_principal_stock">Stock Principal</label>
                        <Select v-model="is_principal_stock" id="is_principal_stock" :options="[{ label: 'Sim', value: 1 }, { label: 'Não', value: 0 }]" optionLabel="label" optionValue="value" placeholder="Selecionar" :class="{ 'p-invalid': errors.is_principal_stock }" />                        
                        <small id="is_principal_stock-help" class="p-error">{{ errors.is_principal_stock }}</small>
                    </div>
                    <Button label="Submeter" class="mr-2 mb-2" @click="onSubmit" :disabled="isLoadingButton"></Button>
                    <ProgressSpinner style="width: 35px; height: 35px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" v-if="isLoadingButton" />
                </form>
            </div>
        </div>
    </div>
    
    <Dialog header="Confirmação" v-model:visible="displayConfirmation" :style="{ width: '350px' }" :modal="true">
        <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>Tem certeza que deseja proceder?</span>
        </div>
        <template #footer>
            <Button label="Não" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
            <Button label="Sim" icon="pi pi-check" @click="deleteData" class="p-button-text" autofocus />
        </template>
    </Dialog>
</template>


