<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Relatório de Vendas</title>
    <style type="text/css">
        @page {
            margin: 20px;
        }
        body {
            font-family: Verdana, Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            margin: auto;
        }
        .header, .footer {
            background-color: #01090e;
            color: white;
            padding: 10px;
            text-align: center;
        }
        .header img {
            max-width: 150px;
        }
        .info-table {
            width: 100%;
            margin-bottom: 20px;
        }
        .info-table td {
            padding: 5px;
        }
        .content {
            text-align: center;
            margin-top: 30px;
        }
        .content h3 {
            margin-bottom: 10px;
            font-size: 18px;
        }
        .details, .cards {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .details th, .details td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        .details th {
            background-color: #1795ee;
            color: white;
        }
        
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <table class="info-table">
            <tr>
                <td align="left" style="width: 40%; font-weight: bold;">Liv Beira</td>
                <td align="center">
                    <img src="https://liv.mtaxas.co.mz/image/liv.png" alt="Logo" class="logo"/>
                </td>
                <td align="right" style="width: 40%;">
                    <strong>Liv Beira</strong><br>
                    <a href="https://liv.mtaxas.co.mz" style="color:white;">liv.mtaxas.co.mz</a><br>
                    +258 84 000 0000<br>
                    Beira, Mozambique
                </td>
            </tr>
        </table>
    </div>

    <div class="container">
        <div class="content">
            <h3>Relatório de Vendas - Bar</h3>
            <table class="details">
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Número de Mesas</td>
                    <td>{{$totalOrderTables}}</td>
                </tr>
                <tr>
                    <td>Número de Produtos</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Valor de Venda</td>
                    <td>0 MT</td>
                </tr>
                <tr>
                    <td>Total de Pedidos Em Mesa</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Total de Pedidos Venda Rápida</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Média de Venda por Mesa</td>
                    <td>0 MT</td>
                </tr>
                <tr>
                    <td>Total Pagamentos</td>
                    <td>-</td>
                </tr>
            </table>

            <h3>Caixa</h3>
            <table class="details">
                <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Valor</th>
                    <th>Valor Final</th>
                    <th>Estado</th>
                    <th>Abertura</th>
                    <th>Fechamento</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>

            <h3>Pagamentos Efetuados</h3>
            <table class="details">
                <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Valor</th>
                    <th>Valor Final</th>
                    <th>Estado</th>
                    <th>Abertura</th>
                    <th>Fechamento</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>

            <h3>Vendas Em Mesa</h3>
            <table class="details">
                <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Valor</th>
                    <th>Valor Final</th>
                    <th>Estado</th>
                    <th>Abertura</th>
                    <th>Fechamento</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>

            <h3>Vendas Rápidas</h3>
            <table class="details">
                <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Valor</th>
                    <th>Valor Final</th>
                    <th>Estado</th>
                    <th>Abertura</th>
                    <th>Fechamento</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    </div>
    
    <div class="footer">
        &copy; {{ date('Y') }} LIV Beira. Todos os direitos reservados. | Beira, Mozambique
    </div>
</body>
</html>
