<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recibo</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 80mm; /* Largura para impressoras térmicas de 80mm */
        }
        .header, .footer {
            text-align: center;
            margin-bottom: 10px;
        }
        .header h1, .footer p {
            margin: 0;
            padding: 0;
        }
        hr {
            border: 1px dashed #000;
        }
        .content {
            margin: 5px 0;
        }
        .details {
            margin-bottom: 10px;
        }
        .details p {
            margin: 2px 0;
        }
        .items {
            width: 100%;
        }
        .items th, .items td {
            text-align: left;
            padding: 5px 0;
        }
        .items th {
            border-bottom: 1px solid #000;
        }
        .total {
            margin-top: 10px;
            font-weight: bold;
        }
        .footer {
            margin-top: 20px;
        }
        @page {
            margin: 0px;
        }
        .break-page{
          page-break-after: always;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>LIV BEIRA</h1>
        <p>Maquinino,Beira</p>
        <p>Telefone: +258 84 000 000</p>
    </div>
    <hr>
    <div class="content">
        <div class="details">
            <p>Data: {{ $order->created_at->format('d-m-Y H:i') }}</p>
            <p>Pedido Nº: {{ $order->id }}</p>
            <p>Mesa Nº: {{ $order->table->name }}</p>
            <p>Atendente:{{$order->user->name}}</p>

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
                @foreach ($orderitens as $item)
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
            <p>Metódo Pagamento: {{ $payment->method->name}}</p>
        </div>
    </div>
    <hr>
    <div class="footer">
        <p>Obrigado pela preferência!</p>
        <p>Visite-nos novamente!</p>
    </div>


</body>
</html>
