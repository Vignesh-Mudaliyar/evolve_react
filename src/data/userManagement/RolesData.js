export const data = [{
    id:1,
    UserName: 1234567890,
    Reference: 'AdminRole',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
},
{
    id:2,
    UserName: 1234567890,
    Reference: 'UM_ROLE_4',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
},
{
    id:3,
    UserName: 1234567890,
    Reference: 'AdminRole',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
},
{
    id:4,
    UserName: 1234567890,
    Reference: 'UM_ROLE_4',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
},
{
    id:5,
    UserName: 1234567890,
    Reference: 'AdminRole',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
},
{
    id:6,
    UserName: 1234567890,
    Reference: 'UM_ROLE_4',
    modify_on: 'Aug 11, 2021, 04:46:42 PM IST',
    
}];

const styles = {
    
    background: {backgroundColor: '#f8f9fe'},
     header: {fontSize: '1.5em',color:'#2588F2'},
    

}
export const column = [{
    name: <span style={styles.header}>User Name</span>,
    selector: row => row.UserName,
    center:true,
    style:styles.background,
},
{
    name: <span style={styles.header}>Reference</span>,
    selector: row => row.Reference,
    center:true,
    style:styles.background,

},
{
    name: <span style={styles.header}>Modify On</span>,
    selector: row => row.modify_on,
    center:true,
    style:styles.background,
    format: row => `${row.modify_on.slice(0, 20)}...`

},
{
    name: <span style={styles.header}>Action</span>,
    selector: () => {
        return (
            <>
            <div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
                <div class="actopt disabledbtn"><a class="recdbtn" href="#" data-toggle="tooltip" data-placement="top" title="History"></a></div>
                <div class="actopt disabledbtn" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
								
            </>
        );
    },
    center:true,
    style:styles.background,

    
}
];

export const CheckBoxData = [{
    id:'ropt1',
    name:"Lorem Ispum is simple",
    checked:false,
},
{
    id:'ropt2',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt3',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt4',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt5',
    name:"Lorem Ispum",
    checked:false
},
{
    id:'ropt6',
    name:"Lorem Ispum ",
    checked:false
},
{
    id:'ropt7',
    name:"Lorem Ispum ",
    checked:false
},
{
    id:'ropt8',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt9',
    name:"Lorem Ispum ",
    checked:false
},
{
    id:'ropt10',
    name:"Lorem Ispum is simple dummy",
    checked:false
},
{
    id:'ropt11',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt12',
    name:"Lorem Ispum is simple dummy",
    checked:false
},
{
    id:'ropt13',
    name:"Lorem Ispum is simple dummy",
    checked:false
},
{
    id:'ropt14',
    name:"Lorem Ispum is simple dummy",
    checked:false
},
{
    id:'ropt15',
    name:"Lorem Ispum is simple",
    checked:false
},
{
    id:'ropt16',
    name:"Lorem Ispum is simple dummy",
    checked:false
}
]