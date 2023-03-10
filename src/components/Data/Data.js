import paypal from '../../images/paypal.png'
import mastercard from '../../images/mastercard.png'
import webmoney from '../../images/webmoney.png'
import qiwi from '../../images/qiwi.png'
import transferwise from '../../images/transferwise.png'
import logo1 from '../../images/logo-circle1.png'
import logo2 from '../../images/logo-circle2.png'
import logo3 from '../../images/logo-circle3.png'
import logo4 from '../../images/logo-circle4.png'
import { faColumns, faIdCardAlt,faGlobe,faLink,faTicket,faBullhorn} from '@fortawesome/free-solid-svg-icons'
export const SidebarDataOne =[
    {
        icon: faColumns,
        heading:"Proxy"
    },

    {
        icon: faIdCardAlt,
        heading:"Balance"
    },

    {
        icon: faGlobe,
        heading:"Online Check"
    },

    {
        icon: faLink,
        heading:"Affiliate System"
    },

]

export const SidebarDataTwo =[
    {
        icon:faTicket,
        heading:"Tickets"
    },

    {
        icon:faBullhorn,
        heading:"FAQ"
    }
]


export const rowsection2Data =[
    {
     name:'PayPal',
     btnText:'1-5%',
     img:paypal 
    },
    {
        name:'Mastercard',
        btnText:'1-5%',
        img:mastercard 
    },
    {
        name:'Webmoney',
        btnText:'1-5%',
        img:webmoney 
    },
    {
        name:'Qiwi',
        btnText:'1-5%',
        img:qiwi
    },
    {
        name:'Transferwise',
        btnText:'1-5%',
        img:transferwise
    },

]


export const transactionData =[
    {
     date:'17 Feb 2020, 16:30',
     img:logo1,
     paymentMethod:'Mastercard',
     status:'Pending',
     amount:'-400.00$'
    },

    {
        date:'14 Feb 2020, 12:39',
        img:logo2,
        paymentMethod:'Mastercard',
        status:'Pending',
        amount:'-250.00$'
       },

       {
        date:'12 Feb 2020, 09:45',
        img:logo3,
        paymentMethod:'Mastercard',
        status:'Done',
        amount:'+1000.00$'
       },

       {
        date:'10 Feb 2020, 12:39',
        img:logo4,
        paymentMethod:'Mastercard',
        status:'Pending',
        amount:'-250.00$'
       },
]