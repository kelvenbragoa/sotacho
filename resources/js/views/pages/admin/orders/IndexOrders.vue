<script setup>
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { onBeforeMount, reactive, ref, onMounted, watch } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';

// import { debounce } from 'lodash';
import { useToast } from 'primevue/usetoast';
import { debounce } from 'lodash-es';

import moment from 'moment';

const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(true);
const loadingButtonDelete = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const openPrintReceipt = ref(false); // Controla a visibilidade do dialog
const showDialog = ref(false);
const pdfUrl = ref(null);

function closeDialog() {
    showDialog.value = false;
}

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
        case 1:
            return 'danger';

        case 2:
            return 'warn';

        case 3:
            return 'success';

        case 4:
            return 'danger';

        case 5:
            return 'info';
        
        case 6:
            return 'info';
    }
}

const getData = async (page = 1) => {
    axios
        .get(`/api/orders?page=${page}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            retriviedData.value = response.data;
            totalRecords.value = response.data.total;
            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            goBackUsingBack();
        });
};

function printPDF() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();  // Aciona a impressão do conteúdo do iframe
    }
}

function report () {
    axios
    .post(`/api/order/report`, {}, { responseType: 'blob' })
        .then((response) => {
            // router.back();
            // const url = window.URL.createObjectURL(new Blob([response.data]));
            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute('download', 'consumo.pdf');
            // document.body.appendChild(link);
            // link.click();
            // ✅ Garantir o tipo correto do Blob como PDF
            // const blob = new Blob([response.data], { type: 'application/pdf' });
            // const url = window.URL.createObjectURL(blob);

            // // 🖨️ Abre o PDF em uma nova aba
            // const printWindow = window.open(url, '_blank');
            // if (printWindow) {
            //     printWindow.onload = () => {
            //         printWindow.focus();
            //         printWindow.print();
            //     };
            // }
            const blob = new Blob([response.data], { type: 'application/pdf' });
            pdfUrl.value = URL.createObjectURL(blob);  // Armazena o URL do PDF
            showDialog.value = true;  // Abre o diálogo modal
            openPrintReceipt.value = false;
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Relatorio Gerado Com sucesso!', life: 3000 });

        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            // goBackUsingBack();
        });
};

const deleteData = () => {
    loadingButtonDelete.value = true;

    axios
        .delete(`/api/orders/${dataIdBeingDeleted.value}`)
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
                <div class="font-semibold text-xl">Encomendas</div>
                    <DataTable
                    :value="retriviedData.data"
                    :paginator="true"
                    :rows="rowsPerPage"
                    :totalRecords="totalRecords"
                    dataKey="id"
                    :lazy="true"
                    :rowHover="true"
                    :loading="isLoadingDiv"
                    :first="(currentPage - 1) * rowsPerPage"
                    :onPage="onPageChange"
                    showGridlines
                    >
                    <template #header>
                        <div class="flex justify-between">
                            
                                <!-- <Button label="Relatorio" class="mr-2 mb-2" @click="report()">Relatório<i class="pi pi-print"></i></Button> -->
                            
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <InputText v-model="searchQuery" placeholder="Pesquisa" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty>Nenhuma registro encontrado. </template>
                    <template #loading> Carregando, por favor espere. </template>
                    <Column header="ID" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.id }}
                        </template>
                    </Column>
                    <Column header="Valor" style="min-width: 12rem">
                        <template #body="{ data }">
                            MZN {{ data.total }}
                        </template>
                    </Column>
                    <Column header="Mesa" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.table ? data.table.name : "Venda Rápida" }}
                        </template>
                    </Column>
                    <Column header="Estado da Encomenda" style="min-width: 12rem">
                        <template #body="{ data }">
                            <Tag :value="data.status.name" :severity="getSeverity(data.order_status_id)" />
                        </template>
                    </Column>
                    <Column header="Efetuada por" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.user.name }}
                        </template>
                    </Column>
                    <Column header="Data" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                        </template>
                    </Column>
                    <Column header="Ações" style="min-width: 12rem">
                    <template #body="{ data }">
                         <router-link class="m-3" :to="'/admin/orders/' + data.id"><i class="pi pi-eye"></i></router-link>
                    </template>
                </Column>
                </DataTable>
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
    <Dialog v-model:visible="showDialog" header="Recibo" :modal="true" :style="{ width: '600px' }" :closable="false">
      <iframe v-if="pdfUrl" :src="pdfUrl" style="width: 100%; height: 500px;" frameborder="0"></iframe>
      
      <template #footer>
        <Button label="Imprimir" icon="pi pi-print" @click="printPDF" />
        <Button label="Fechar" icon="pi pi-times" class="p-button-text" @click="closeDialog" />
      </template>
    </Dialog>
</template>