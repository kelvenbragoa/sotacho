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
const isLoadingDiv = ref(true);
const loadingButtonDelete = ref(false);
const loadingproduct = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const departments = ref(null);
const isLoadingButton = ref(false);
const stockcenters = ref([]);
const suppliers = ref([]);

const stockcenterproducts = ref([]);


const schema = yup.object({
    reference: yup.string().required().trim().label('Codigo'),
    stock_center_id: yup.string().required().trim().label('CentrodeStock'),
    document_reference: yup.string().required().trim().label('Documente'),
    serie: yup.string().required().trim().label('serie'),
    stock_supplier_id: yup.string().required().trim().label('CentrodeStock'),

});
const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
    validationSchema: schema
});

const [stock_center_id] = defineField('stock_center_id');
const [document_reference] = defineField('document_reference');
const [serie] = defineField('serie');
const [stock_supplier_id] = defineField('stock_supplier_id');
const [reference] = defineField('reference');


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

    const transferData = stockcenterproducts.value.map(product => ({
                id: product.id,
                product_id: product.product.id,
                stock_center_id: product.stock_center_id,
                quantity: product.transferQuantity, // transferQuantity será enviado
    }));
    values.stockcenterproducts = transferData;


    if (image.value != null) {
        values.image = image.value;
    }
    isLoadingButton.value = true;
    axios
        .post(`/api/exitnotes`, values,{
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
            // resetForm();
            router.back();
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Criado com sucesso', life: 3000 });
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
        .get(`/api/exitnotes/create`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            stockcenters.value = response.data.stockcenters;
            suppliers.value = response.data.suppliers


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
        .delete(`/api/exitnotes/${dataIdBeingDeleted.value}`)
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

const getProducts = (stockcenter) => {
    loadingproduct.value=true;
    axios.get(`/api/auxiliar-product/${stockcenter}`)
   .then((response)=>{

    stockcenterproducts.value = response.data.stockcenterproducts;
    stockcenterproducts.value.forEach(product => {
        product.transferQuantity = 0;
    });
    loadingproduct.value=false;
   })
   .catch((error)=>{
    toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
    loadingproduct.value=false;
   })
}

const onPageChange = (event) => {
    currentPage.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getData(currentPage.value);
};

const debouncedSearch = debounce(() => {
    getData(currentPage.value);
}, 300);

watch(searchQuery,debouncedSearch);

onMounted(() => {
    getData();
});

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
                <div class="font-semibold text-xl">Nota de Saída de Stock</div>
                <small class="p-error">Os campos marcados * sao considerados campos obrigatorios.</small>
                <form @submit="onSubmit">
                    <div class="flex flex-col gap-2">
                        <label for="reference">REF</label>
                        <InputText v-model="reference" id="reference" placeholder="Referencia" :class="{ 'p-invalid': errors.reference }" type="text" />
                        <small id="reference-help" class="p-error">{{ errors.reference }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="document_reference">Documento</label>
                        <InputText v-model="document_reference" id="document_reference" placeholder="Documento" :class="{ 'p-invalid': errors.document_reference }" type="text" />
                        <small id="document_reference-help" class="p-error">{{ errors.document_reference }}</small>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="serie">Serie</label>
                        <InputText v-model="serie" id="serie" placeholder="Serie" :class="{ 'p-invalid': errors.serie }" type="text" />
                        <small id="serie-help" class="p-error">{{ errors.serie }}</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="stock_supplier_id">Supplier</label>
                        <Select v-model="stock_supplier_id" :options="suppliers" optionLabel="name" optionValue="id" placeholder="Selecionar" :class="{ 'p-invalid': errors.stock_supplier_id }" />
                        <small id="stock_supplier_id-help" class="p-error">{{ errors.stock_supplier_id }}</small>
                    </div>
                    
                    <div class="flex flex-col gap-2">
                        <label for="stock_center_id">Centro de Sock </label>
                        <Select v-model="stock_center_id" :options="stockcenters" optionLabel="name" optionValue="id" placeholder="Selecionar" :class="{ 'p-invalid': errors.stock_center_id }" @change="getProducts(stock_center_id)" />
                        <small id="stock_center_id-help" class="p-error">{{ errors.stock_center_id }}</small>
                    </div>

                    <hr>
                    <DataTable
                    :value="stockcenterproducts"
                    dataKey="id"
                    :rowHover="true"
                    :loading="isLoadingDiv"
                    showGridlines
                    >
                    <template #header>
                        
                    </template>
                    <template #empty>Nenhuma registro encontrado. </template>
                    <template #loading> Carregando, por favor espere. </template>
                    <Column header="ID" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column header="Nome" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.product.name }}
                        </template>
                    </Column>
                    <Column header="Categoria" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.product.category.name }}
                        </template>
                    </Column>
                    <Column header="SubCategoria" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.product.subcategory.name }}
                        </template>
                    </Column>
                    <Column header="Stock Atual" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.quantity }}
                        </template>
                    </Column>
                    <Column header="Quantidade" dataType="number" style="min-width: 10rem">
                        <template #body="{ data }">
                            <InputText v-model="data.transferQuantity" placeholder="Quantidade" :min="0" :max="data.quantity"  type="number" :style="{ 'width': '100%' }"/>
                        </template>
                    </Column>
                </DataTable>
                   
                    
                    <Button label="Submeter" class="mr-2 mb-2 mt-2" @click="onSubmit" :disabled="isLoadingButton"></Button>
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


