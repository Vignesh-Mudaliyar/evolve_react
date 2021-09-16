 export const data = [{
    id:1,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
},
{
    id:2,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
},
{
    id:3,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
},
{
    id:4,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
},
{
    id:5,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
},
{
    id:6,
    number: 1234567890,
    category: 'Postpaid',
    service_provider: 'Airtel',
    associated_resources: 'Lorem Ispum'
}];

export const column = [{
    name: <span className="datatableHeader">Number</span>,
    selector: row => row.number,
    sortable:true,
},
{
    name: 'Category',
    selector: row => row.category,
    sortable:true,
},
{
    name: 'Service Provider',
    selector: row => row.service_provider,
    sortable:true,
},
{
    name: 'Associated Resources',
    selector: row => row.associated_resources,
    sortable:true,
},
{
    name: 'State',
    selector: () => <a className="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a>,
    sortable:true,
},
{
    name: 'Action',
    selector: () => <div className="actopt"><a className="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>,
    sortable:true,
}
];