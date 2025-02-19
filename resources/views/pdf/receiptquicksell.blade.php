<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recibo</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            background: #fff;
        }
        .recibo {
            padding: 10px;
            width: 80mm;
            height: auto; /* Garante que a altura se ajuste ao conteúdo */
            overflow: hidden;
        }
        .header, .footer {
            text-align: center;
        }
        .header h1, .footer p {
            margin: 0;
            padding: 2px 0;
        }
        hr {
            border: 1px dashed #000;
            margin: 5px 0;
        }
        .content {
            margin: 3px 0;
        }
        .details p {
            margin: 2px 0;
        }
        .items {
            width: 100%;
            border-collapse: collapse;
        }
        .items th, .items td {
            text-align: left;
            padding: 3px 0;
        }
        .items th {
            border-bottom: 1px solid #000;
        }
        .total {
            margin-top: 5px;
            font-weight: bold;
        }
        .footer {
            margin-top: 10px;
        }
        @page {
            size: auto;
            margin: 0;
        }
        .break-page {
            page-break-after: always;
        }
    </style>
</head>
<body>
    <div class="recibo">
        @if($kitchenItems->isNotEmpty())
        <div class="header">
            <h1>LIV BEIRA</h1>
            <p>Maquinino, Beira</p>
            <p>Telefone: +258 84 000 000</p>
        </div>
        <hr>
        <div class="content">
            <div class="details">
                <p>Data: {{ $order->created_at->format('d-m-Y H:i') }}</p>
                <p>Pedido Nº: {{ $order->id }}</p>
                <p>Atendente: {{ $order->user->name }}</p>
                <p>Departamento: Cozinha</p>
                <p>Pedido Rápido</p>
            </div>
            <table class="items">
                <thead>
                    <tr>
                        <th>Qtd</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Total</th>
                    </tr>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($kitchenItems as $item)
                        <tr>
                            <td>{{ $item->quantity }}</td>
                            <td>{{ $item->product->name }}</td>
                            <td>{{ number_format($item->price, 2) }}</td>
                            <td>{{ number_format($item->quantity * $item->price, 2) }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="total">
                <p>Total Geral: MZN {{ number_format($order->total, 2) }}</p>
                <p>Método Pagamento: {{ $payment->method->name }}</p>
            </div>
        </div>
        <hr>
        <div class="footer">
            <p>Obrigado pela preferência!</p>
            <p>Visite-nos novamente!</p>
        </div>
        @if($barItems->isNotEmpty())
        <div class="break-page"></div>
        @endif
        @endif

        @if($barItems->isNotEmpty())
        <div class="header">
            <h1>LIV BEIRA</h1>
            <p>Maquinino, Beira</p>
            <p>Telefone: +258 84 000 000</p>
            <p>Departamento: Bar</p>
        </div>
        <hr>
        <div class="content">
            <div class="details">
                <p>Data: {{ $order->created_at->format('d-m-Y H:i') }}</p>
                <p>Pedido Nº: {{ $order->id }}</p>
                <p>Atendente: {{ $order->user->name }}</p>
                <p>Pedido Rápido</p>
            </div>
            <table class="items">
                <thead>
                    <tr>
                        <th>Qtd</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($barItems as $item)
                    <tr>
                        <td>{{ $item->quantity }}</td>
                        <td>{{ $item->product->name }}</td>
                        <td>{{ number_format($item->price, 2) }}</td>
                        <td>{{ number_format($item->quantity * $item->price, 2) }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="total">
                <p>Total Geral: MZN {{ number_format($order->total, 2) }}</p>
                <p>Método Pagamento: {{ $payment->method->name }}</p>
            </div>
        </div>
        <hr>
        <div class="footer">
            <p>Obrigado pela preferência!</p>
            <p>Visite-nos novamente!</p>
        </div>
        @endif
    </div>
</body>
</html>
