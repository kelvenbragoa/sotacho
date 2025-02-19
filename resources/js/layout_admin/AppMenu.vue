<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
                    {
                        label: 'Home',
                        items: [
                            { label: 'Dashboard Caixa', icon: 'pi pi-fw pi-chart-bar', to: '/admin/dashboard' },
                            // { label: 'Dashboard Cozinha', icon: 'pi pi-fw pi-chart-bar', to: '/admin/dashboard' },
                            // { label: 'Dashboard Bar', icon: 'pi pi-fw pi-chart-bar', to: '/admin/dashboard' },
                        ]
                    },
                    {
                        label: 'Produtos',
                        items: [
                            { label: 'Categorias', icon: 'pi pi-fw pi-tags', to: '/admin/categories' },
                            { label: 'SubCategorias', icon: 'pi pi-fw pi-sitemap', to: '/admin/subcategories' },
                            { label: 'Produtos', icon: 'pi pi-fw pi-box', to: '/admin/products' },
                        ]
                    },
                    {
                        label: 'Clientes e Mesas',
                        items: [
                            { label: 'Clientes', icon: 'pi pi-fw pi-users', to: '/admin/customers' },
                            { label: 'Mesas', icon: 'pi pi-fw pi-table', to: '/admin/tables' },
                        ]
                    },
                    {
                        label: 'Pagamentos',
                        items: [
                            { label: 'Métodos de Pagamento', icon: 'pi pi-fw pi-wallet', to: '/admin/paymentmethods' },
                            { label: 'Pagamentos', icon: 'pi pi-fw pi-money-bill', to: '/admin/payments' },
                        ]
                    },
                    {
                        label: 'Pedidos',
                        items: [
                            { label: 'Encomendas', icon: 'pi pi-fw pi-clipboard', to: '/admin/orders' },
                        ]
                    },
                    {
                        label: 'Administração',
                        items: [
                            { label: 'Usuários', icon: 'pi pi-fw pi-user', to: '/admin/users' },
                            { label: 'Ponto de Venda', icon: 'pi pi-fw pi-shopping-cart', to: '/admin/pdv' },
                            { label: 'Caixa', icon: 'pi pi-fw pi-box', to: '/admin/cashregisters' },
                        ]
                    },
                    {
                        label: 'Stock',
                        items: [
                            { label: 'Centro de Stock', icon: 'pi pi-fw pi-box', to: '/admin/centerstocks' },
                            { label: 'Transferência de Stock', icon: 'pi pi-sync', to: '/admin/stocktransfers' },
                            { label: 'Nota de Entrada', icon: 'pi pi-fw pi-sign-in', to: '/admin/entrynotes' },
                            { label: 'Nota de Saída', icon: 'pi pi-fw pi-sign-out', to: '/admin/exitnotes' },
                            { label: 'Inventário', icon: 'pi pi-fw pi-clipboard', to: '/admin/inventories' },
                            { label: 'Fornecedores', icon: 'pi pi-fw pi-users', to: '/admin/suppliers' },
                        ]
                    }

    // {
    //     label: 'Home',
    //     items: [
    //         { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', to: '/admin/dashboard' },  // Indicador de dashboard
    //         { label: 'Categorias', icon: 'pi pi-fw pi-tags', to: '/admin/categories' },  // Ícone de tags para categorias
    //         { label: 'SubCategorias', icon: 'pi pi-fw pi-sitemap', to: '/admin/subcategories' },  // Representação hierárquica
    //         { label: 'Produtos', icon: 'pi pi-fw pi-box', to: '/admin/products' },  // Ícone de caixa para produtos
    //         { label: 'Clientes', icon: 'pi pi-fw pi-users', to: '/admin/customers' },  // Ícone de usuários para clientes
    //         { label: 'Mesas', icon: 'pi pi-fw pi-table', to: '/admin/tables' },  // Ícone de mesa
    //         { label: 'Métodos de Pagamento', icon: 'pi pi-fw pi-wallet', to: '/admin/paymentmethods' },  // Ícone de carteira
    //         { label: 'Usuários', icon: 'pi pi-fw pi-user', to: '/admin/users' },  // Ícone de usuário para gerenciamento de usuários
    //         { label: 'Pagamentos', icon: 'pi pi-fw pi-money-bill', to: '/admin/payments' },  // Nota de dinheiro para pagamentos
    //         { label: 'Encomendas', icon: 'pi pi-fw pi-clipboard', to: '/admin/orders' },  // Ícone de lista para encomendas
    //         { label: 'Ponto de Venda', icon: 'pi pi-fw pi-shopping-cart', to: '/admin/pdv' },  // Carrinho de compras para PDV

    //     ]
    // },

    // {
    //     label: 'UI Components',
    //     items: [
    //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
    //         { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
    //         { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
    //         { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
    //         { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
    //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
    //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
    //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
    //         { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
    //         { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu' },
    //         { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
    //         { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
    //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
    //         { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/uikit/timeline' },
    //         { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     icon: 'pi pi-fw pi-briefcase',
    //     to: '/pages',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi pi-fw pi-globe',
    //             to: '/landing'
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi pi-fw pi-sign-in',
    //                     to: '/auth/login'
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi pi-fw pi-times-circle',
    //                     to: '/auth/error'
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi pi-fw pi-lock',
    //                     to: '/auth/access'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi pi-fw pi-pencil',
    //             to: '/pages/crud'
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi pi-fw pi-exclamation-circle',
    //             to: '/pages/notfound'
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi pi-fw pi-circle-off',
    //             to: '/pages/empty'
    //         }
    //     ]
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation',
    //             icon: 'pi pi-fw pi-book',
    //             to: '/documentation'
    //         },
    //         {
    //             label: 'View Source',
    //             icon: 'pi pi-fw pi-github',
    //             url: 'https://github.com/primefaces/sakai-vue',
    //             target: '_blank'
    //         }
    //     ]
    // }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
