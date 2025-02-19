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
import * as yup from 'yup';
import moment from 'moment';

const router = useRouter();
const toast = useToast();
const loading1 = ref(null);
const isLoadingDiv = ref(true);

const isLoadingPaymentTab = ref(false);
const isLoadingQuickSellTab = ref(false);
const isLoadingTableTab = ref(false);

const quicksellreport = ref([])
const tablesellreport = ref([])
const paymentreport = ref([])
const totalRecordsQuickSell = ref(0);
const totalRecordsTable = ref(0);
const totalRecordsPayments = ref(0);


const loadingButtonDelete = ref(false);
let dataIdBeingDeleted = ref(null);
const searchQuery = ref('');
const retriviedData = ref(null);
const currentPageQuickSell = ref(1);
const currentPageTableSell = ref(1);
const currentPagePayments = ref(1);
const currentPage = ref(1);

const rowsPerPage = ref(100);
const totalamount = ref(0);
const displayConfirmation = ref(false);
const categories = ref(null);
const selectedProducts = ref([]);
const total = ref(0);
const totalsales = ref(0);
const payment_methods = ref([]);
const isLoadingButton = ref(false);
const payment_method_id = ref(1);
const showDialog = ref(false);
const pdfUrl = ref(null);
const activeIndex = ref(0);


const cash_register = ref(0)
const total_sales = ref(0)
const total_orders = ref(0)
const average_ticket = ref(0)
const total_tables = ref(0)
const total_quick_sell_amount= ref(0)
const total_tables_amount = ref(0)
const total_quick_sell = ref(0)
const total_payments = ref(0)
const total_payments_amount = ref(0)


const statusCaixa = ref('Aberto')
const historicoVendas = ref([])

const showDialogOrder = ref(false);
const selectedOrder = ref(null);

// Função para abrir o dialog com os itens do pedido
const seeOrderItens = (order) => {
  selectedOrder.value = order;
  showDialogOrder.value = true;
};


const openFileDialog = ref(false); // Controla a visibilidade do dialog

// Definindo os itens do Menubar
const nestedMenuitems = [
  {
    label: 'Consumo',
    items: [
      { 
        label: 'Ver consumo', 
        icon: 'pi pi-fw pi-folder-open', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
      { 
        label: 'Imprimir Consumo', 
        icon: 'pi pi-fw pi-print', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
    ]
  },
];

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

function printPDF() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();  // Aciona a impressão do conteúdo do iframe
    }
}
function closeDialog() {
    showDialog.value = true;
    router.back();

}

function saveCart() {
    // Exemplo de dados para salvar
    const cartData = {
      products: selectedProducts.value.map(product => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        total: product.price * product.quantity
      })),
      total: total.value,
      payment_method_id: payment_method_id.value
    };

    isLoadingButton.value = true;
    axios.post(`/api/pdv/quicksell`, cartData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    responseType:'blob'
    })
    .then((response) => {
        
        const blob = new Blob([response.data], { type: 'application/pdf' });
        pdfUrl.value = URL.createObjectURL(blob);  // Armazena o URL do PDF
        showDialog.value = true;  // Abre o diálogo modal
        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'recibo.pdf');
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url); // Libera a URL criada
        // loadingprint.value = false;
        toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto encomendado com sucesso!', life: 3000 });
        // router.back();
        // 

    })
    .catch((error) => {
        console.log(error)
        toast.add({ severity: 'error', summary: 'Erro', detail: error.response.data.message, life: 3000 });
        if (error.response.data.errors) {
            setErrors(error.response.data.errors);
        }
    })
    .finally(() => {
        isLoadingButton.value = false;
    });
  }

function addToCart(product) {
    // Verifica se o produto já foi adicionado ao carrinho
    const existingProduct = selectedProducts.value.find(item => item.id === product.id);

if (existingProduct) {
  // Se o produto já estiver no carrinho, aumenta a quantidade
  existingProduct.quantity += 1;
} else {
  // Caso contrário, adiciona o produto com a quantidade 1
  selectedProducts.value.push({ ...product, quantity: 1 });
}

// Atualiza o total
updateTotal();
}

function removeFromCart(index) {
    selectedProducts.value.splice(index, 1);
    updateTotal();
  }

function updateTotal() {
    // Calcula o total com base nas quantidades dos produtos
    total.value = selectedProducts.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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
        .get(`/api/cashregister/${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            cash_register.value = response.data.cash_register;
            total_sales.value = response.data.total_sales;
            total_orders.value = response.data.total_orders;
            total_tables.value = response.data.total_tables;
            total_quick_sell.value = response.data.total_quick_sell;
            average_ticket.value = response.data.average_ticket;
            total_quick_sell_amount.value = response.data.total_quick_sell_amount;
            total_tables_amount.value = response.data.total_tables_amount;
            total_payments.value = response.data.total_payments;
            total_payments_amount.value = response.data.total_payments_amount;


            // categories.value = response.data.categories;
            // payment_methods.value = response.data.payment_methods;
            // payment_method_id.value = 1;

            isLoadingDiv.value = false;

        })
        .catch((error) => {
            isLoadingDiv.value = false;
            toast.add({ severity: 'error', summary: 'Erro', detail: `${error.response.data.message}`, life: 3000 });
            goBackUsingBack();
        });
};

const getPaymentsData = async (page = 1) => {
    axios
        .get(`/api/cashregisters/paymentreport?page=${page}&user=${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            paymentreport.value = response.data;
            totalRecordsPayments.value = response.data.total;
            isLoadingPaymentTab.value = false;
        })
        .catch((error) => {
            isLoadingPaymentTab.value = false;
            toast.add({ severity: 'error', summary: 'Erro', detail: `${error.response.data.message}`, life: 3000 });
        });
};

const getTableData = async (page = 1) => {
    axios
        .get(`/api/cashregisters/tablesellreport?page=${page}&user=${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            tablesellreport.value = response.data;
            totalRecordsTable.value = response.data.total;
            isLoadingTableTab.value = false;
        })
        .catch((error) => {
            isLoadingTableTab.value = false;
            toast.add({ severity: 'error', summary: 'Erro', detail: `${error.response.data.message}`, life: 3000 });
        });
};

const getQuickSellData = async (page = 1) => {
    axios
        .get(`/api/cashregisters/quicksellreport?page=${page}&user=${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            quicksellreport.value = response.data;
            totalRecordsQuickSell.value = response.data.total;
            isLoadingQuickSellTab.value = false;
        })
        .catch((error) => {
            isLoadingQuickSellTab.value = false;
            toast.add({ severity: 'error', summary: 'Erro', detail: `${error.response.data.message}`, life: 3000 });
        });
};

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

const onPageChangeQuickSell = (event) => {
    currentPageQuickSell.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getQuickSellData(currentPageQuickSell.value);
};
const onPageChangeTableSell = (event) => {
    currentPageTableSell.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getTableData(currentPageTableSell.value);
};
const onPageChangePayments = (event) => {
    currentPagePayments.value = event.page + 1;
    rowsPerPage.value = event.rows;
    getPaymentsData(currentPagePayments.value);
};

const debouncedSearch = debounce(() => {
    getData(currentPage.value);
}, 300);

watch(searchQuery,debouncedSearch);

onMounted(() => {
    getData();
    getPaymentsData();
    getQuickSellData();
    getTableData();

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
            <div class="w-full">
                    <Button label="Voltar" class="mr-2 mb-2" @click="goBackUsingBack"><i class="pi pi-angle-left"></i> Voltar</Button>
                </div>
            <div class="grid grid-cols-12 gap-8 mb-3">
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Caixa</span>
                                <small>Aberto ás: {{ moment(cash_register.created_at).format('DD-MM-YYYY H:mm') }}</small> <br>
                                <small>Fechado ás: {{cash_register.closed_at ?  moment(cash_register.closed_at).format('DD-MM-YYYY H:mm') : '-' }}</small> <br>
                                <small>Valor Declarado: {{cash_register.closing_balance }} MT</small> <br>
                                <small>Valor Sistema: {{cash_register.automatic_closing_balance }} MT</small> <br>
                                <small>Diferenca: {{cash_register.difference }} MT</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Total de Vendas</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_sales}} MT</div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Pedidos</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_orders}}</div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Ticket Médio</span>
                                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{average_ticket}} MT</div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Total Mesas Abertas</span>
                                <div class="flex justify-between mb-4">
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_tables}}</span>
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_tables_amount}} MT</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Total Pedidos/Venda Rápido</span>
                                <div class="flex justify-between mb-4">
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_quick_sell}}</span>
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_quick_sell_amount}} MT</span>
                                </div>

                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                    <div class="card mb-0">
                        <div class="flex justify-between mb-4">
                            <div>
                                <span class="block text-muted-color font-medium mb-4">Total Pagamentos</span>
                                <div class="flex justify-between mb-4">
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_payments}}</span>- -
                                    <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{total_payments_amount}} MT</span>
                                </div>

                            </div>
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Tabs value="0">
                <TabList>
                    <Tab value="0">Vendas Rápidas</Tab>
                    <Tab value="1">Vendas em Mesas</Tab>
                    <Tab value="2">Pagamentos Efetuados</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <DataTable
                        :value="quicksellreport.data"
                        :paginator="true"
                        :rows="rowsPerPage"
                        :totalRecords="totalRecordsQuickSell"
                        dataKey="id"
                        :lazy="true"
                        :rowHover="true"
                        :loading="isLoadingQuickSellTab"
                        :first="(currentPageQuickSell - 1) * rowsPerPage"
                        :onPage="onPageChangeQuickSell"
                        showGridlines
                        >
                        <template #header>
                        </template>
                        <template #empty>Nenhuma registro encontrado. </template>
                        <template #loading> Carregando, por favor espere. </template>
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
                        <Column header="Valor" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.total }} MT
                            </template>
                        </Column>
                        <Column header="Data" dataType="date" style="min-width: 10rem">
                            <template #body="{ data }">
                                {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                            </template>
                        </Column>
                        <Column header="Ações" style="min-width: 12rem">
                        <template #body="{ data }">
                            <a class="m-3" href="#" @click.prevent="seeOrderItens(data)"><i class="pi pi-eye"></i></a>
                        </template>
                        </Column>
                    </DataTable>
                    </TabPanel>
                    <TabPanel value="1">
                        <DataTable
                        :value="tablesellreport.data"
                        :paginator="true"
                        :rows="rowsPerPage"
                        :totalRecords="totalRecordsTable"
                        dataKey="id"
                        :lazy="true"
                        :rowHover="true"
                        :loading="isLoadingTableTab"
                        :first="(currentPageTableSell - 1) * rowsPerPage"
                        :onPage="onPageChangeTableSell"
                        showGridlines
                        >
                        <template #header>
                        </template>
                        <template #empty>Nenhuma registro encontrado. </template>
                        <template #loading> Carregando, por favor espere. </template>
                        <Column header="ID" style="min-width: 12rem">
                            <template #body="{ data }">
                                #{{ data.id }}
                            </template>
                        </Column>
                        <Column header="Pedido" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{data.table.name}}
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
                        <Column header="Valor" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.total }} MT
                            </template>
                        </Column>
                        <Column header="Data" dataType="date" style="min-width: 10rem">
                            <template #body="{ data }">
                                {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                            </template>
                        </Column>
                        <Column header="Ações" style="min-width: 12rem">
                        <template #body="{ data }">
                            <a class="m-3" href="#" @click.prevent="seeOrderItens(data)"><i class="pi pi-eye"></i></a>
                        </template>
                        </Column>
                    </DataTable>
                    </TabPanel>
                    <TabPanel value="2">
                        <DataTable
                        :value="paymentreport.data"
                        :paginator="true"
                        :rows="rowsPerPage"
                        :totalRecords="totalRecordsPayments"
                        dataKey="id"
                        :lazy="true"
                        :rowHover="true"
                        :loading="isLoadingPaymentTab"
                        :first="(currentPagePayments - 1) * rowsPerPage"
                        :onPage="onPageChangePayments"
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
                        <Column header="Venda" style="min-width: 12rem">
                            <template #body="{ data }">
                                #{{ data.order_id }}
                            </template>
                        </Column>
                        <Column header="Pedido" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.order.table_id == null ? "Pedido Rápido" : data.order.table.name}}
                            </template>
                        </Column>
                        <Column header="Metodo de Pagamento" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.method.name }}
                            </template>
                        </Column>
                        <Column header="Valor" style="min-width: 12rem">
                            <template #body="{ data }">
                                {{ data.amount }} MT
                            </template>
                        </Column>
                        <Column header="Data" dataType="date" style="min-width: 10rem">
                            <template #body="{ data }">
                                {{ moment(data.created_at).format('DD-MM-YYYY H:mm') }}
                            </template>
                        </Column>
                        <!-- <Column header="Ações" style="min-width: 12rem">
                        <template #body="{ data }">
                            <router-link class="m-3" :to="'/admin/entrynotes/' + data.id + '/edit'"><i class="pi pi-file-edit"></i></router-link>  
                            <router-link class="m-3" :to="'/admin/entrynotes/' + data.id"><i class="pi pi-eye"></i></router-link>
                            <a class="m-3" href="#" @click.prevent="confirmDeletion(data.id)"><i class="pi pi-trash"></i></a>
                        </template>
                        </Column> -->
                    </DataTable>
                    </TabPanel>
                </TabPanels>
            </Tabs>
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
      <!-- Dialog -->
    <Dialog header="Open File" v-model:visible="openFileDialog" style="width: 30vw">
        <p>Here you can manage your files or perform specific actions.</p>
        <Button label="Close" @click="openFileDialog = false" />
    </Dialog>
    <Dialog v-model:visible="showDialog" header="Recibo" :modal="true" :style="{ width: '600px' }" :closable="false">
      <iframe v-if="pdfUrl" :src="pdfUrl" style="width: 100%; height: 500px;" frameborder="0"></iframe>
      
      <template #footer>
        <Button label="Imprimir" icon="pi pi-print" @click="printPDF" />
        <Button label="Fechar" icon="pi pi-times" class="p-button-text" @click="closeDialog" />
      </template>
    </Dialog>

    <!-- Dialog para exibir os itens do pedido -->
    <Dialog
      v-model:visible="showDialogOrder"
      :header="'Itens do Pedido #'"
      :modal="true"
      :style="{ width: '50vw' }"
    >
      <template v-if="selectedOrder">
        <DataTable :value="selectedOrder.itens" responsiveLayout="scroll">
          <Column header="Produto" style="min-width: 12rem">
            <template #body="{ data }">{{ data.product.name }}</template>
          </Column>

          <Column header="Quantidade" style="min-width: 8rem">
            <template #body="{ data }">{{ data.quantity }}</template>
          </Column>

          <Column header="Preço Unitário" style="min-width: 8rem">
            <template #body="{ data }">{{ data.price }} MT</template>
          </Column>

          <Column header="Total" style="min-width: 8rem">
            <template #body="{ data }">{{ data.total }} MT</template>
          </Column>
        </DataTable>
      </template>

      <template v-else>
        <p>Nenhum item encontrado para este pedido.</p>
      </template>
    </Dialog>
</template>