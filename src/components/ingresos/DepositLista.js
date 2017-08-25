import React, {Component} from 'react';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';
import './Deposit.css';



class DepositPage extends Component{
    render(){
        const expandedRowRender = () => {
            const columns = [
                { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
                { title: 'Tipo', dataIndex: 'tipo', key: 'tipo' },
                { title: 'Descripción', dataIndex: 'descripcion', key: 'descripcion'},
                { title: 'Monto', dataIndex: 'monto', key: 'monto' },
                {
                    title: 'Action',
                    dataIndex: 'operation',
                    key: 'operation',

                    render: () => (
                        <span className={'table-operation'}>
            <a href="#">Editar</a>
            <a href="#">Eliminar</a>
          </span>
                    ),
                },
            ];

            const data = [];
            for (let i = 0; i < 3; ++i) {
                data.push({
                    key: i,
                    fecha: '2014-12-24 23:12:00',
                    tipo: 'Ingreso avanzado',
                    descripcion: 'Pago deuda señora Mejía',
                    monto: '$750',
                });
            }
            return (
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            );
        };

        const columns = [
            { title: 'Tipo', dataIndex: 'tipo', key: 'tipo' },
            { title: 'Fecha', dataIndex: 'createdAt', key: 'createdAt' },
            { title: 'Total', dataIndex: 'total', key: 'total' },
            { title: 'Acción', key: 'operation', render: () => <a href="#">Editar</a> },
        ];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                tipo: 'Ingreso',
                total: '$9,500',
                createdAt: '2014-12-24 23:12:00',
            });
        }

        return(


            <Table
                className="components-table-demo-nested"
                columns={columns}
                expandedRowRender={expandedRowRender}
                dataSource={data}
            />


        );
    }
}    

export default DepositPage;