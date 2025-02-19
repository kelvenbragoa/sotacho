<script setup>
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { onBeforeMount, reactive, ref, onMounted, watch, onUnmounted } from 'vue';
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router';

// import { debounce } from 'lodash';
import { useToast } from 'primevue/usetoast';
import { debounce } from 'lodash-es';

import moment from 'moment';

let interval;
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
const cashregister = ref(null);
const openCashRegisterDialog = ref(false);
const closeCashRegisterDialog = ref(false);
const openListQuickSellDialog = ref(false);
const openingBalance = ref(0);
const closingBalance = ref(0);
const totalcash = ref(0);
const quicksells = ref([]);
const totalRecordsQuickSell = ref(0);
const isLoadingQuickSell = ref(false);
const showDialog = ref(false);

const selectedItemToDelete = ref(null);
const confirmationCode = ref(null);
const correct_code = '142502';

const expandedRows = ref([]);
const deleteDialog = ref(false); // Controla a visibilidade do dialog
const pdfUrl = ref(null);



function printPDF() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();  // Aciona a impressão do conteúdo do iframe
    }
}

function closeDialog() {
    showDialog.value = false;

}

// Definindo os itens do Menubar
const nestedMenuitems = [
  {
    label: 'Venda Rápida',
    items: [
      { 
        label: 'Inicar Venda Rápida', 
        icon: 'pi pi-fw pi-shopping-cart', 
        command: () => { router.push('/admin/pdv/quicksell') }  // Abre o dialog ao clicar
      },
      { 
        label: 'Lista', 
        icon: 'pi pi-fw pi-list', 
        command: () => { openListQuickSellDialog.value = true } // Abre o dialog ao clicar
      },
    ]
  },
//   {
//     label: 'Pedidos',
//     items: [
//       { 
//         label: 'Mesas', 
//         icon: 'pi pi-fw pi-folder-open', 
//         command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
//       },
//     ]
//   },
  {
    label: 'Caixa',
    items: [
    { 
        label: 'Abertura de caixa', 
        icon: 'pi pi-fw pi-unlock', 
        command: () => { openCashRegisterDialog.value = true }  // Abre o dialog ao clicar
      },
      { 
        label: 'Fecho de caixa', 
        icon: 'pi pi-fw pi-lock', 
        command: () => { closeCashRegisterDialog.value = true }  // Abre o dialog ao clicar
      },
      { 
        label: 'Relatório de caixa', 
        icon: 'pi pi-fw pi-check', 
        command: () => { router.push('/admin/cashregisters/dashboard') }  // Abre o dialog ao clicar
      },
    ]
  }
];

function goBackUsingBack() {
    if (router) {
        router.back();
    }
}

function printReceipt (id) {
    axios
    .post(`/api/getquickreceipt/${id}`, {}, { responseType: 'blob' })
        .then((response) => {

            const blob = new Blob([response.data], { type: 'application/pdf' });
            pdfUrl.value = URL.createObjectURL(blob);  // Armazena o URL do PDF
            showDialog.value = true;  // Abre o diálogo modal
            openPrintReceipt.value = false;
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Consumo Impresso com sucesso!', life: 3000 });

        })
        .catch(async (error) => {
            isLoadingDiv.value = false;
            // isLoadingButton.value = false;
            let errorMessage = 'Ocorreu um erro inesperado.';

            if (error.response && error.response.data instanceof Blob) {
                try {
                    const text = await error.response.data.text();
                    const json = JSON.parse(text);
                    errorMessage = json.message || json.error || errorMessage;
                } catch (e) {
                    console.error('Erro ao processar o blob:', e);
                }
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }

            toast.add({ severity: 'error', summary: 'Erro', detail: errorMessage, life: 3000 });
                    if (error.response.data.errors) {
                        setErrors(error.response.data.errors);
                    }
        });
};

const openCashRegisterConfirmation = () => {
    openCashRegisterDialog.value = true;
};

const openCloseCashRegisterConfirmation = () => {
    closeCashRegisterDialog.value = true;
};

const closeCashRegisterConfirmation = () => {
    openCashRegisterDialog.value = false;
};

const closeCloseCashRegisterConfirmation = () => {
    closeCashRegisterDialog.value = false;
};

const closeConfirmation = () => {
    displayConfirmation.value = false;
};

const closeListQuickSellDialog = () =>{
    openListQuickSellDialog.value = false
}

const closeCloseConfirmation = () => {
    displayConfirmation.value = false;
};
const confirmDelete = (id) => {
    selectedItemToDelete.value = id;
    deleteDialog.value = true;
};

function getSeverity2(status) {
    switch (status) {
        case 1:
            return 'red';

        case 2:
            return 'red';

        case 3:
            return 'warn';

        case 4:
            return 'danger';

        case 5:
            return 'info';
        
        case 6:
            return 'info';
    }
}
function getSeverity(status) {
    switch (status) {
        case 1:
            return 'success';

        case 2:
            return 'danger';

        case 3:
            return 'warn';

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
        .get(`/api/pdv?page=${page}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            retriviedData.value = response.data.tables;
            totalRecords.value = retriviedData.value.total;
            cashregister.value = response.data.cash_register;
            totalcash.value = response.data.totalcash;
            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            goBackUsingBack();
        });
};

const getDataQuickSells = async (page = 1) => {
    axios
        .get(`/api/pdvquicksellslist?page=${page}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            quicksells.value = response.data.quicksells;
            totalRecordsQuickSell.value = response.data.quicksells.total;
        })
        .catch((error) => {
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
        });
};

function openCashRegister() {
    axios.post('/api/cashregisters/open', {
        opening_balance: openingBalance.value
    })
    .then((response) => {
        openCashRegisterDialog.value = false;
        openingBalance.value = null;
        cashregister.value = response.data;
        toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Caixa aberto com sucesso!', life: 3000 });
    })
    .catch(error => {
        toast.add({ severity: 'error', summary: 'Erro', detail: `Falha ao abrir o caixa. ${error.response.data.message}`, life: 3000 });
        console.error(error);
    });
}

function closeCashRegister() {
    axios.post('/api/cashregisters/close', {
        closing_balance: totalcash.value
    })
    .then((response) => {
        closeCashRegisterDialog.value = false;
        closingBalance.value = null;
        cashregister.value = null;
        totalcash.value = 0;
        toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Caixa Fechado com sucesso!', life: 3000 });
    })
    .catch(error => {
        toast.add({ severity: 'error', summary: 'Erro', detail: `Falha ao fechar o caixa. ${error.response.data.message}`, life: 3000 });
        console.error(error);
    });
}
const deleteData = () => {
    loadingButtonDelete.value = true;

    axios
        .delete(`/api/tables/${dataIdBeingDeleted.value}`)
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

const deleteItem = () => {
    // loadingButtonDelete.value = true;

    if (confirmationCode.value !== correct_code) {
        toast.add({ severity: 'error', summary: `Erro`, detail: 'Código de confirmação inválido', life: 3000 });
        return;
    }else{

    axios
        .post(`/api/quickorderdelete/${selectedItemToDelete.value}`)
        .then((response) => {
            deleteDialog.value = false;
            getData();
            getDataQuickSells();
            toast.add({ severity: 'success', summary: `Sucesso`, detail: 'Sucesso ao apagar', life: 3000 });
        })
        .catch((error) => {
            toast.add({ severity: 'error', summary: `Erro`, detail: `${error}`, life: 3000 });
            // loadingButtonDelete.value = false;
        })
        .finally(() => {
            // loadingButtonDelete.value = false;
        });
    }
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
    getDataQuickSells();
interval = setInterval(() => {
    getData();
    getDataQuickSells();
  }, 30000); 
});

onUnmounted(() => {
  clearInterval(interval); // Para o intervalo ao destruir o componente
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
    
        
        <div v-else>
            <div class="mb-2">
                        <Menubar :model="nestedMenuitems">
                            <template #end>
                                <span>Total Venda Hoje: {{totalcash}} MT</span> | <span v-if="cashregister"> <Tag :value="'Caixa Iniciado ás: '+ moment(cashregister.created_at).format('DD-MM-YYYY H:mm')" severity="success" /></span><span v-else><Tag value="Caixa Não Iniciado" severity="danger" /></span>
                            </template>
                        </Menubar>
                    </div>
            <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-12 lg:col-span-6 xl:col-span-3" v-for="(table,index) in retriviedData.data" :key="table.id">
                        <router-link :to="'/admin/pdv/' + table.id + '/categories'">
                            <div class="card mb-0" :class="{
                                    'bg-green-100': table.table_status_id === 1, 
                                    'bg-red-100': table.table_status_id === 2
                                }">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <!-- <span class="block text-muted-color font-medium mb-4 text-xxl">{{table.name}}</span> -->
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{table.name}}</div>
                                    </div>
                                    <div :class="[
                                            'flex items-center justify-center rounded-full', 
                                            `bg-${getSeverity2(table.status_id)}-100`, 
                                            `dark:bg-${getSeverity2(table.status_id)}-400/10`
                                        ]" 
                                        style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-list text-blue-500 !text-xl" aria-label="Carrinho de Compras"></i>
                                    </div>
                                </div>
                                <div class="flex justify-between mb-4">
                                    <span class="text-primary font-medium">Capacidade: {{table.capacity}} </span>
                                    <span><Tag :value="table.status.name" :severity="getSeverity(table.table_status_id)" /></span>
                                </div>
                                <div class="flex justify-between mb-4">
                                    <small>Consumo: {{ table.last_order != null ? table.last_order.total : 0 }} MT</small>
                                    <small>{{ table.last_order != null ? table.last_order.user.name : '' }}</small>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    
            </div>
                <!-- <div class="card flex flex-col gap-4" v-for="(index,table) in retriviedData.data" :key="table.id">
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Orders</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                        <span class="text-primary font-medium">24 new </span>
                        <span class="text-muted-color">since last visit</span>
                    </div>
                </div>                   
            </div> -->
        </div>
        <Dialog header="Abertura de Caixa" v-model:visible="openCashRegisterDialog" :style="{ width: '400px' }" :modal="true">
            <div class="p-fluid">
                <div class="field">
                    <label for="opening_balance">Saldo Inicial (MZN)</label>
                    <InputNumber v-model="openingBalance" inputId="opening_balance" mode="currency" currency="MZN" locale="pt-MZ" :min="-1" placeholder="0.00" />
                </div>
            </div>

            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeCashRegisterConfirmation" class="p-button-text" />
                <Button label="Abrir Caixa" icon="pi pi-check" @click="openCashRegister" autofocus />
            </template>
        </Dialog>

        <Dialog header="Fechamento de Caixa" v-model:visible="closeCashRegisterDialog" :style="{ width: '400px' }" :modal="true">
            <div class="p-fluid">
                <div class="field">
                    <label for="closing_balance">Saldo Final (MZN)</label>
                    <InputNumber v-model="totalcash" inputId="closing_balance" mode="currency" currency="MZN" locale="pt-MZ" :min="-1" placeholder="0.00" />
                </div>
            </div>

            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeCloseCashRegisterConfirmation" class="p-button-text" />
                <Button label="Fechar Caixa" icon="pi pi-check" @click="closeCashRegister" autofocus />
            </template>
        </Dialog>

        <Dialog header="Lista de Vendas Rápidas" v-model:visible="openListQuickSellDialog" :style="{ width: '90vw', maxWidth: '940px' }"  :modal="true">
            <div class="p-fluid">
                <!-- <DataTable
                        :value="quicksells.data"
                        :paginator="true"
                        :rows="rowsPerPage"
                        :totalRecords="totalRecordsQuickSell"
                        dataKey="id"
                        :lazy="true"
                        :rowHover="true"
                        :loading="isLoadingQuickSell"
                        :first="(currentPage - 1) * rowsPerPage"
                        :onPage="onPageChange"
                        showGridlines
                        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem"
                        >
                        <template #header>
                        </template>
                        <template #empty>Nenhuma registro encontrado. </template>
                        <template #loading> Carregando, por favor espere. </template>
                        <Column header="Ações" style="min-width: 12rem">
                        <template #body="{ data }">
                            <a class="m-3" href="#" @click.prevent="seeOrderItens(data)"><i class="pi pi-eye"></i></a>
                        </template>
                        </Column>
                        <Column header="Valor" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.total }} MT
                            </template>
                        </Column>
                        <Column header="ID" style="min-width: 12rem">
                            <template #body="{ data }">
                                #{{ data.id }}
                            </template>
                        </Column>
                        <Column header="Pedido" style="min-width: 12rem">
                            <template #body="{ data }">
                                Pedido Rápido
                            </template>
                        </Column>
                        <Column header="Garçom" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.user.name }}
                            </template>
                        </Column>
                        <Column header="Estado" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.status.name }}
                            </template>
                        </Column>
                        <Column header="Itens" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.itens.length }}
                            </template>
                        </Column>
                        
                        <Column header="Data" dataType="date" style="min-width: 10rem">
                            <template #body="{ data }">
                                {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                            </template>
                        </Column>
                        <template #expansion="slotProps">
        <div class="p-3">
            <h5>Itens da Venda #{{ slotProps.data.id }}</h5>
            <DataTable :value="slotProps.data.itens" responsiveLayout="scroll">
                <Column field="id" header="ID" style="min-width: 4rem" />
                <Column field="name" header="Produto" style="min-width: 10rem" />
                <Column field="quantity" header="Quantidade" style="min-width: 6rem" />
                <Column field="price" header="Preço Unitário" style="min-width: 8rem">
                    <template #body="{ data }">
                        {{ data.price.toFixed(2) }} MT
                    </template>
                </Column>
                <Column header="Subtotal" style="min-width: 8rem">
                    <template #body="{ data }">
                        {{ (data.price * data.quantity).toFixed(2) }} MT
                    </template>
                </Column>
            </DataTable>
        </div>
    </template>
                        
                    </DataTable> -->
                    <DataTable 
                    v-model:expandedRows="expandedRows" 
                    :paginator="true"
                    :rows="rowsPerPage"
                        :totalRecords="totalRecordsQuickSell"
                        dataKey="id"
                        :lazy="true"
                        :rowHover="true"
                        :loading="isLoadingQuickSell"
                        :first="(currentPage - 1) * rowsPerPage"
                        :onPage="onPageChange"
                        showGridlines
                    :value="quicksells.data" 
                    tableStyle="min-width: 60rem">
                        <Column expander style="width: 5rem" />
                        <Column header="Ações" style="min-width: 12rem">
                        <template #body="{ data }">
                            <i class="pi pi-trash m-4" @click="confirmDelete(data.id)"></i>
                            <i class="pi pi-print m-4" @click="printReceipt(data.id)"></i>
                        </template>
                        </Column>
                        <Column header="ID" style="min-width: 12rem">
                            <template #body="{ data }">
                                #{{ data.id }}
                            </template>
                        </Column>
                        <Column header="Valor" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.total }} MT
                            </template>
                        </Column>
                        <Column header="Pedido" style="min-width: 12rem">
                            <template #body="{ data }">
                                Pedido Rápido
                            </template>
                        </Column>
                        <Column header="Garçom" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.user.name }}
                            </template>
                        </Column>
                        <Column header="Estado" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.status.name }}
                            </template>
                        </Column>
                        <Column header="Itens" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.itens.length }}
                            </template>
                        </Column>
                        
                        <Column header="Data" dataType="date" style="min-width: 10rem">
                            <template #body="{ data }">
                                {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                            </template>
                        </Column>
                        
                        <template #expansion="slotProps">
                            <div class="p-4">
                                <h5>Orders for #{{ slotProps.data.id }} ({{slotProps.data.itens.length}})</h5>
                                <DataTable :value="slotProps.data.itens">
                                    <Column field="id" header="Id" sortable></Column>
                                    <Column header="Produto" style="min-width: 12rem">
                                        <template #body="{ data }">
                                            {{ data.product.name }}
                                        </template>
                                    </Column>
                                    <Column header="Quantidade" style="min-width: 12rem">
                                        <template #body="{ data }">
                                            {{ data.quantity }}
                                        </template>
                                    </Column>
                                    <Column header="Preço" style="min-width: 12rem">
                                        <template #body="{ data }">
                                            {{ data.price }} MT
                                        </template>
                                    </Column>
                                    <Column header="Total" style="min-width: 12rem">
                                        <template #body="{ data }">
                                            {{ data.total }} MT
                                        </template>
                                    </Column>
                                </DataTable>
                            </div>
                        </template>
                    </DataTable>
                </div>

            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeListQuickSellDialog" class="p-button-text" />
            </template>
        </Dialog>

        <Dialog header="Confirmar Exclusão" v-model:visible="deleteDialog" style="width: 20vw">
            <div class="p-4">
            <p class="mb-4">Insira o código para confirmar a exclusão do item <strong></strong>.</p>
            <input v-model="confirmationCode" type="password" placeholder="Código de confirmação" class="w-full p-2 border rounded" />
            <div class="mt-4 flex justify-end space-x-2">
                <Button label="Cancelar" @click="deleteDialog = false" class="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded" />
                <Button label="Confirmar" @click="deleteItem" class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded" />
            </div>
            </div>
        </Dialog>
        <Dialog v-model:visible="showDialog" header="Recibo" :modal="true" :style="{ width: '600px' }" :closable="false">
      <iframe v-if="pdfUrl" :src="pdfUrl" style="width: 100%; height: 500px;" frameborder="0"></iframe>
      
      <template #footer>
        <Button label="Imprimir" icon="pi pi-print" @click="printPDF" />
        <Button label="Fechar" icon="pi pi-times" class="p-button-text" @click="closeDialog" />
      </template>
    </Dialog>
</template>