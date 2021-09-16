export const data = [{
    id:1,
    number: 1234567890,
    quantity: '1034',
    created_on: '',
    last_updated: ''
},
{
    id:2,
    number: 1234567890,
    quantity: '11223344',
    created_on: '',
    last_updated: ''
},
{
    id:3,
    number: 1234567890,
    quantity: '93469',
    created_on: '',
    last_updated: ''
},
{
    id:4,
    number: 1234567890,
    quantity: '6374627',
    created_on: '',
    last_updated: ''
},
{
    id:5,
    number: 1234567890,
    quantity: '212366',
    created_on: '',
    last_updated: ''
},
{
    id:6,
    number: 1234567890,
    quantity: '5252435',
    created_on: '',
    last_updated: ''
}];

export const column = [{
    name: <span className="datatableHeader">Number</span>,
    selector: row => row.number,
    sortable:true,
},
{
    name: 'Category',
    selector: row => row.quantity,
    sortable:true,
},
{
    name: 'Service Provider',
    selector: row => row.created_on,
    sortable:true,
},
{
    name: 'Associated Resources',
    selector: row => row.last_updated,
    sortable:true,
},
{
    name: 'State',
    selector: () => <a className="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a>,
    sortable:true,
},
{
    name: 'Action',
    selector: () => {
        return (
            <>
    <div className="actopt"><a className="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
    <div className="actopt" data-toggle="modal" data-target="#editorder"><a className="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
    <div className="actopt"><a className="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
    <div className="actopt"><a className="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
    <div className="actopt"><a className="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
            </>
        );
    },
    sortable:true,
}
];