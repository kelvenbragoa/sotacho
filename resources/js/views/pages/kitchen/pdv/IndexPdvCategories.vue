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
const totalamount = ref(0);
const displayConfirmation = ref(false);
const categories = ref(null);
const selectedProducts = ref([]);
const total = ref(0);
const total_consumed = ref(0);
const isLoadingButton = ref(false);

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
  {
    label: 'Opções',
    items: [
      { 
        label: 'Agrupar Mesa', 
        icon: 'pi pi-fw pi-folder-open', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
    ]
  },
  {
    label: 'Conta',
    items: [
      { 
        label: 'Fechamento da Conta', 
        icon: 'pi pi-fw pi-lock', 
        command: () => { openFileDialog.value = true }  // Abre o dialog ao clicar
      },
      { 
        label: 'Finalizar da Conta', 
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
      table_id: router.currentRoute.value.params.id
    };

    isLoadingButton.value = true;
    axios
        .post(`/api/pdv`, cartData,{
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
            // resetForm();
            router.back();
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'recibo.pdf');
            document.body.appendChild(link);
            link.click();
            loadingprint.value = false;
            toast.add({ severity: 'success', summary: `Successo`, detail: 'Produto encomedado sucesso!', life: 3000 });
        })
        .catch((error) => {
            isLoadingButton.value = false;
            toast.add({ severity: 'error', summary: `Erro}`, detail: `${error.response.data.message}`, life: 3000 });
            if (error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        })
        .finally(() => {
            isLoadingButton.value = false;
        });
  }

  // axios({
    //     url:`/download-mcscr/+${router.currentRoute.value.params.id}`,
    //     responseType:'blob'
    // }).then((response)=>{
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'mcscr-nr-'+retrievedData.value.id+'.pdf');
    //     document.body.appendChild(link);
    //     link.click();
    //     loadingprint.value = false;
    //     toastr.success('Documento baixado com sucesso');
    // }).catch((error)=>{
    
    //     loadingprint.value = false;
    //     toastr.error('Ocorreu um erro ao tentar baixar o documento. '+error.response.data.message);
       
    // }).finally(()=>{
    //     loadingprint.value = false;
    // })
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
        .get(`/api/pdv/${router.currentRoute.value.params.id}`, {
            params: {
                query: searchQuery.value
            }
        })
        .then((response) => {
            retriviedData.value = response.data;
            total_consumed.value = response.data.total_consumed;
            categories.value = response.data.categories;


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
    
        
        <div v-else>
            <div class="grid grid-cols-12 gap-4 h-screen">
                <div class="col-span-12 lg:col-span-3 h-full">
                    <div class="card flex flex-col gap-4 h-full">
                    <h2>Resumo da venda 
                    <div v-if="total > 0">
                        <strong>Total: {{ total }} MT</strong>
                    </div>
                    </h2>
                    <!-- <div class="grid grid-cols-3 gap-4"> -->
                    <!-- Exibir produtos selecionados -->
                    <div v-for="(item, index) in selectedProducts" :key="index" class="card bg-gray-100 p-4">
                        <div>
                            <strong>{{ item.name }} </strong> 
                            <button @click="removeFromCart(index)" class="rounded-full bg-red-100"  style="width: 2.5rem; height: 2.5rem">X</button>
                            </div>
                        <div class="flex justify-between mb-4">
                            <div>{{ item.quantity }} x {{ item.price }} MT</div>
                            <div>{{ item.price * item.quantity }} MT</div>
                        </div>
                        
                    </div>
                    <!-- </div> -->
                    <div v-if="total > 0" class="mt-4">
                        <strong>Total: {{ total }} MT</strong>
                        <button :disabled="isLoadingButton" @click="saveCart" class="bg-blue-500 text-white px-4 py-2 rounded-full mt-1" style="width: 100%">Adicionar a conta<i class="pi pi-print"></i></button>
                        <div class="flex flex-col gap-4 text-center" v-if="isLoadingButton">
                            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                            <!-- <p>Por Favor Aguarde...</p> -->
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-9">
                    <div class="mb-2">
                        <Menubar :model="nestedMenuitems">
                            <template #end>
                                <p>Total Consumo: {{ total_consumed }} MT</p>
                            </template>
                        </Menubar>
                    </div>
                    <div class="card flex flex-col gap-4">
                        <Tabs :value="1">
                    <TabList class="flex overflow-x-auto space-x-4 pb-2">
                        <Tab v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel v-for="category in categories" :key="category.id" :value="category.id">
                        <!-- Subcategory Tabs -->
                        <Tabs :value="0">
                            <TabList class="flex overflow-x-auto space-x-4 pb-2">
                            <Tab v-for="subcategory in category.sub_categories" :key="subcategory.id" :value="subcategory.id">
                                {{ subcategory.name }}
                            </Tab>
                            </TabList>

                            <TabPanels>
                            <TabPanel v-for="subcategory in category.sub_categories" :key="subcategory.id" :value="subcategory.id">
                                <div v-if="subcategory.products.length > 0">
                                <div class="grid grid-cols-12 gap-8">
                                    <div v-for="product in subcategory.products" :key="product.id" class="col-span-12 lg:col-span-6 xl:col-span-3">
                                        <div class="card mb-0 bg-gray-100">
                                        <!-- Imagem do Produto -->
                                        <div class="mb-4">
                                            <img :src="product.image_url || '/image/image.png'" alt="Imagem do Produto" class="w-full h-32 object-cover rounded-t-lg">
                                        </div>

                                        <!-- Informações do Produto -->
                                        <div class="flex justify-between mb-4">
                                            <div>
                                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">
                                                {{ product.name }}
                                            </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-between mb-4">
                                            <span class="text-primary font-medium">Preço: {{ product.price }} MT</span>
                                        </div>
                                        <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded-full mt-1">
                                            Adicionar
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div v-else>
                                <p>No products available.</p>
                                </div>
                            </TabPanel>
                            </TabPanels>
                        </Tabs>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
                        

                    </div>
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
      <!-- Dialog -->
    <Dialog header="Open File" v-model:visible="openFileDialog" style="width: 30vw">
        <p>Here you can manage your files or perform specific actions.</p>
        <Button label="Close" @click="openFileDialog = false" />
    </Dialog>
</template>