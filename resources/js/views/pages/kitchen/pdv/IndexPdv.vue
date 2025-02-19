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

const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(true);
const loadingButtonDelete = ref(false);
let dataIdBeingChange = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPage = ref(1);
const rowsPerPage = ref(15);
const totalRecords = ref(0);
const displayConfirmation = ref(false);
const openChangeStatusDialog = ref(false); // Controla a visibilidade do dialog
let interval;


const pending = ref([]);
const gettingready = ref([]);
const ready = ref([]);
const delivered = ref([]);


const products = ref(null);
const picklistProducts = ref(null);
const orderlistProducts = ref(null);

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
    ]
  },
  {
    label: 'Pedidos',
    items: [
      { 
        label: 'Mesas', 
        icon: 'pi pi-fw pi-folder-open', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
    ]
  },
  {
    label: 'Caixa',
    items: [
      { 
        label: 'Fecho de caixa', 
        icon: 'pi pi-fw pi-lock', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
      { 
        label: 'Relatório de caixa', 
        icon: 'pi pi-fw pi-check', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
    ]
  }
];

function goBackUsingBack() {
    if (router) {
        router.back();
    }
}

const closeConfirmation = () => {
    openChangeStatusDialog.value = false;
};
const confirmChangeStatus = (id) => {
    openChangeStatusDialog.value = true;
    dataIdBeingChange.value = id;
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
        .get(`/api/pdvkitchen?page=${page}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            pending.value = response.data.order_itens_pending;
            gettingready.value = response.data.order_itens_getting_ready;
            ready.value = response.data.order_itens_ready;
            delivered.value = response.data.order_itens_delivered;

            totalRecords.value = response.data.total;
            isLoadingDiv.value = false;
        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: `${error}`, detail: 'Message Detail', life: 3000 });
            goBackUsingBack();
        });
};

// const deleteData = () => {
//     loadingButtonDelete.value = true;

//     axios
//         .delete(`/api/tables/${dataIdBeingChange.value}`)
//         .then(() => {
//             pending.value = response.data.order_itens_pending;
//             gettingready.value = response.data.order_itens_getting_ready;
//             ready.value = response.data.order_itens_ready;
//             delivered.value = response.data.order_itens_delivered;
//             closeConfirmation();
//             toast.add({ severity: 'success', summary: `Sucesso`, detail: 'Sucesso ao apagar', life: 3000 });
//         })
//         .catch((error) => {
//             toast.add({ severity: 'error', summary: `Erro`, detail: `${error}`, life: 3000 });
//             loadingButtonDelete.value = false;
//         })
//         .finally(() => {
//             loadingButtonDelete.value = false;
//         });
// };

const changeStatus = () => {
    loadingButtonDelete.value = true;

    axios
        .get(`/api/changestatus/${dataIdBeingChange.value}`)
        .then((response) => {
            pending.value = response.data.order_itens_pending;
            gettingready.value = response.data.order_itens_getting_ready;
            ready.value = response.data.order_itens_ready;
            delivered.value = response.data.order_itens_delivered;
            loadingButtonDelete.value = false;
            closeConfirmation();
            toast.add({ severity: 'success', summary: `Sucesso`, detail: 'Sucesso ao transitar o estado.', life: 3000 });
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
    interval = setInterval(() => {
    getData();
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

            
        <div class="grid grid-cols-12 gap-4">
            <div class="card col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="font-semibold text-xl">Pendentes({{ pending.length }})</div>
                <DataView :value="pending" paginator :rows="50" layout="list">

                    <template #list="slotProps">
                        <div class="flex flex-col">
                            <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface': index !== 0 }">
                                    
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.order.table ? item.order.table.name : "Pedido Rápido" }} | #{{ item.order.id }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.quantity }} * {{ item.product.name }}</div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ moment(item.created_at).format('DD-MM-YYYY H:mm') }}</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button @click="confirmChangeStatus(item.id)" icon="pi pi-check" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    
                </DataView>
            </div>




            <div class="card col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="font-semibold text-xl">Preparando({{ gettingready.length }})</div>
            <DataView :value="gettingready" paginator :rows="50" layout="list">

                <template #list="slotProps">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface': index !== 0 }">
                                    
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.order.table ? item.order.table.name : "Pedido Rápido" }} | #{{ item.order.id }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.product.name }}</div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ moment(item.created_at).format('DD-MM-YYYY H:mm') }}</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button @click="confirmChangeStatus(item.id)" icon="pi pi-check" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </template>

                
            </DataView>
        </div>


        <div class="card col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="font-semibold text-xl">Pronto({{ ready.length }})</div>
            <DataView :value="ready" paginator :rows="50" layout="list">

                <template #list="slotProps">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface': index !== 0 }">
                                    
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.order.table ? item.order.table.name : "Pedido Rápido" }} | #{{ item.order.id }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.product.name }}</div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ moment(item.created_at).format('DD-MM-YYYY H:mm') }}</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button @click="confirmChangeStatus(item.id)" icon="pi pi-check" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </template>

                
            </DataView>
        </div>

        <div class="card col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="font-semibold text-xl">Entregue({{ delivered.length }})</div>
            <DataView :value="delivered" paginator :rows="50" layout="list">

                <template #list="slotProps">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface': index !== 0 }">
                                    
                                    <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                            <div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.order.table ? item.order.table.name : "Pedido Rápido" }} | #{{ item.order.id }}</span>
                                                <div class="text-lg font-medium mt-2">{{ item.product.name }}</div>
                                                <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ moment(item.created_at).format('DD-MM-YYYY H:mm') }}</span>
                                            </div>
                                        </div>
                                        <div class="flex flex-col md:items-end gap-8">
                                            
                                            <!-- <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button @click="confirmChangeStatus(item.id)" icon="pi pi-check" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </template>

                
            </DataView>
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

    <Dialog header="Deseja avançar o pedido para o próximo estado?" v-model:visible="openChangeStatusDialog" style="width: 30vw">
        <p>Ao clicar em avançar, seu pedido será adicionado em outra tabela de referência.</p>
        <Button class="m-4" label="Fechar" severity="danger" @click="openChangeStatusDialog = false" />
        <Button class="m-4" label="Proximo Estado" :disabled="loadingButtonDelete == true"  @click="changeStatus" />
    </Dialog>
</template>