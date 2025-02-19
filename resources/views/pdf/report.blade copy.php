<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Relatório</title>

    <style type="text/css">
        @page {
            margin: 0px;
        }
        html {
            margin-top: 30px ;
            
        
        }
        body {
            margin-top: 50px;
        }
        * {
            font-family: Verdana, Arial, sans-serif;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        table {
            font-size: x-small;
        }
        tfoot tr td {
            font-weight: bold;
            font-size: x-small;
        }
        .invoice table {
            margin: 15px;
        }
        .invoice h3 {
            margin-left: 15px;
        }

        .invoice h2 {
            
            margin-left: 15px;
        }
        .invoice h5 {
            
            margin-left: 15px;
        }

        .information p {
            color: rgb(255, 255, 255);
        }
        .information {
            background-color: #01090e;
            color: #FFF;
            position:relative;
 
        }

        .informationbar {
            background-color: #1795ee;
            color: #FFF;
            position:relative;
 
        }
        .information .logo {
           
        }
        .information table {
            padding: 15px;
        }
    </style>

</head>
<body>

<div class="information" style="width:100%; position: absolute; top: -50;">
    <table width="100%">
        <tr>
            <td align="left" style="width: 40%;">
                <p><strong> Liv Beira</strong></p>
                {{-- <p>{{$event->name}}</p>
                <p>{{$event->user->name}}</p>
                <p>{{$event->user->email}}</p> --}}


            </td>
            <td align="center">
                <img src="https://liv.mtaxas.co.mz/image/liv.png" alt="Logo" width="256" class="logo"/>
            </td> 
            <td align="right" style="width: 40%;">
                
                <h3>Liv Beira</h3>
                
                   <p> https://liv.mtaxas.co.mz</p>
                   <p> +258 84 000 0000</p>
                    <p> Beira, Mozambique</p>
               
            </td>
        </tr>

    </table>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<br/>

<div class="invoice">

    <h3 style="text-align:center" >Relatório do venda dos produtos do bar</h3>
    <h5><strong>Número de Mesas</strong>: {{$tables->count()}}</h5>
    <h5><strong>Número de Produtos</strong>: {{$products->count()}}</h5>
    <h5><strong>Valor de Venda</strong>: {{$orders->sum('total')}} MT</h5>

    <h2>Produtos Registrados</h2>
    <div>
        <table style="table-layout: fixed; width: 95%;">
            <thead>
                <tr>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Nome
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Quantidade Vendida
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                       Preço de Venda
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Valor Venda
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $item)
                <tr>
                    <td style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->name}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->orderitens->sum('quantity')}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->price}} MT
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->orderitens->sum('total')}} MT
                    </td>
                    
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div>

    <h2>Garçom</h2>
    <div>
        <table style="table-layout: fixed; width: 95%;">
            <thead>
                <tr>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Nome
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Numero de Vendas
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                       Valor de Venda
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $item)
                <tr>
                    <td style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->name}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->orderitens->sum('quantity')}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->orderitens->sum('total')}} MT
                    </td>
                    
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div>

    {{-- <h5><strong>Lucro esperado</strong>: {{$profit}} MT</h5>
    <h5><strong>Valor de Venda</strong>: {{ $event->sell_bar_detail->sum('total') }} MT</h5>
    <h5><strong>Lucro</strong>: {{$event->sell_bar_detail->sum('total')-$investment}} MT</h5> --}}
{{-- 
    <hr>
    <br>

    <h2>Bares Registrados</h2>
    <div>
        <table style="table-layout: fixed; width: 95%;">
            <thead>
                <tr>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Nome
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Qtd Vendas
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                       Valor de Venda
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                @foreach ($event->barstores as $item)
                <tr>
                    <td style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->name}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{ $item->sells->sum('qtd') }}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{ $item->sells->sum('total') }} MT
                    </td>
                   
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div>

    <hr>

    <h2>Produtos Registrados</h2>
    <div>
        <table style="table-layout: fixed; width: 95%;">
            <thead>
                <tr>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Nome
                    </th>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Stock Inicial
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Qtd
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                       Preço de Venda
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Preço de Compra
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Qtd Venda
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Valor Venda
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Lucro
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Bar
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($event->products as $item)
                <tr>
                    <td style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->name}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->qtd + $item->sells->sum('qtd')}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->qtd}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->sell_price}} MT
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->buy_price}} MT
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->sells->sum('qtd')}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->sells->sum('qtd') * $item->sell_price}} MT
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{($item->sells->sum('qtd') * $item->sell_price) - ( ($item->sells->sum('qtd') * $item->buy_price) + ($item->qtd*$item->buy_price)) }} MT
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        <td>{{$item->barstore->name}}</td>
                    </td>
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div>

    <hr>

    <br>
    <h2>Barman Operadores do Sistema</h2>
    <h2>Número de Operadores: {{$event->barman->count()}}</h2>
    <div>
        <table style="table-layout: fixed; width: 95%;">
            <thead>
                <tr>
                    <th  width="20%" align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Nome
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Telefone
                    </th>
                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                       Usuário
                    </th>

                    <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Número de Vendas
                     </th>

                     <th align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        Valor de Vendas
                     </th>
                  
                </tr>
            </thead>
            <tbody>
                @foreach ($event->barman as $item)
                <tr>
                    <td style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->name}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->mobile}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->user}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->sells->count()}}
                    </td>
                    <td align="left" style="border-top: 1px solid #eee; padding: 5px;">
                        {{$item->sells->sum('total')}} MT
                    </td>
                    
                   
                </tr>
                @endforeach
                
            </tbody>
        </table>
    </div> --}}
 
</div>

<div class="informationbar" style="width:100%; position: absolute; bottom: 0;">
    <table width="100%">
        <tr>
            <td align="left" style="width: 50%;">
                &copy; {{ date('Y') }} LIV Beira. Todos direitos reservado. 
            </td>
            <td align="right" style="width: 60%;">
                        Beira, Mozambique 
            </td>
        </tr>

    </table>
</div>
</body>
</html>