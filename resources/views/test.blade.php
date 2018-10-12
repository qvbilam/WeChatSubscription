<html>
<body>
<table>
    @foreach($data as $val)
        <tr>
            <td>
                <div>{{ $val['created_at'] }}}</div>
                <div>
                    {{ $val['minute'] }}}({{ $val['fee'] }}})&nbsp;&nbsp;&nbsp;&nbsp;
                    @if($val['refund'] == 1)
                        完成
                    @else
                        用户退款
                    @endif
                </div>
            </td>
        </tr>
    @endforeach
        {{ $users->links() }}
</table>
</body>
</html>