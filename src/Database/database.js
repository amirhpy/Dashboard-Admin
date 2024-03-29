import alcides from '../Assets/Images/avatar/avatar-alcides-antonio.png'
import marcus from '../Assets/Images/avatar/avatar-marcus-finn.png'
import carson from '../Assets/Images/avatar/avatar-carson-darrin.png'
import fran from '../Assets/Images/avatar/avatar-fran-perez.png'
import jie from '../Assets/Images/avatar/avatar-jie-yan-song.png'
import penjani from '../Assets/Images/avatar/avatar-penjani-inyene.png'
import omar from '../Assets/Images/avatar/avatar-omar-darboe.png'
import siegbert from '../Assets/Images/avatar/avatar-siegbert-gottfried.png'
import iulia from '../Assets/Images/avatar/avatar-iulia-albu.png'
import nasimiyu from '../Assets/Images/avatar/avatar-nasimiyu-danai.png'

import healthcare from '../Assets/Images/products/product-1.png'
import makeup from '../Assets/Images/products/product-2.png'
import Necessaire from '../Assets/Images/products/product-4.png'
import soja from '../Assets/Images/products/product-5.png'
import makeupLipstick from '../Assets/Images/products/product-6.png'
import healthcareRitual from '../Assets/Images/products/product-7.png'

let inboxData = [
    { id: 1, profile: alcides, userName: 'Alcides Antonio', massege: 'Hello, we spoke earlier on the phone' },
    { id: 2, profile: marcus, userName: 'Marcus Finn', massege: 'Is the job still available?' },
    { id: 3, profile: carson, userName: 'Carson Darrin', massege: 'What is a screening task? I’d like to' },
    { id: 4, profile: fran, userName: 'Fran Perez', massege: 'Fran Perez' },
    { id: 5, profile: jie, userName: 'Jie Yan Song', massege: 'Need more information about campaigns' }
]

let sellingProducts = [
    { id: 1, img: healthcare, name: 'Healthcare Erbology', category: 'healthcare' },
    { id: 2, img: makeup, name: 'Makeup Lancome Rouge', category: 'makeup' },
    { id: 3, img: Necessaire, name: 'Skincare Necessaire', category: 'skincare' },
    { id: 4, img: soja, name: 'Skincare Soja CO', category: 'skincare' }
]

let products = [
    { id: 1, img: healthcare, name: 'Healthcare Erbology', category: 'healthcare', stock: '12', price: '$21,00', sku: '164_DKSEKD', status: 'published' },
    { id: 2, img: makeup, name: 'Makeup Lancome Rouge', category: 'makeup', stock: '31', price: '$56,00', sku: '351_DKSEKD', status: 'draft' },
    { id: 3, img: Necessaire, name: 'Skincare Necessaire', category: 'skincare', stock: '43', price: '$32,00', sku: '874_DKSEKD', status: 'published' },
    { id: 4, img: soja, name: 'Skincare Soja CO', category: 'skincare', stock: '5', price: '$98,00', sku: '291_DKSEKD', status: 'published' },
    { id: 5, img: makeupLipstick, name: 'Makeup Lipstick', category: 'makeup', stock: '27', price: '$63,00', sku: '982_DKSEKD', status: 'published' },
    { id: 6, img: healthcareRitual, name: 'Healthcare Ritual', category: 'healthcare', stock: '3', price: '$44,00', sku: '126_DKSEKD', status: 'draft' }
]

let users = [
    { id: 1, profile: carson, name: 'Carson Darrin', email: 'Carson@gmail.com', location: 'Cleveland, Ohio, USA', orders: '3', spent: '$300,00', uuid: '74nrfn57312n37', phone: '0936-293-1516', cart: '**** **** **** 4164' },
    { id: 2, profile: fran, name: 'Fran Perez', email: 'Fran@gmail.com', location: 'Atlanta, Georgia, USA', orders: '4', spent: '$420,00', uuid: 'cmfjrg948gjfns', phone: '0936-293-1516', cart: '**** **** **** 3320' },
    { id: 3, profile: jie, name: 'Jie Yan Song', email: 'Jie@gmail.com', location: 'North Canton, Ohio, USA', orders: '1', spent: '$110,00', uuid: 'mv12mf34042cv6', phone: '0936-293-1516', cart: '**** **** **** 0167' },
    { id: 4, profile: marcus, name: 'Marcus Finn', email: 'Marcus@gmail.com', location: 'Madrid, Madrid, Spain', orders: '2', spent: '$287,00', uuid: 'nvm34f8245nv4', phone: '0936-293-1516', cart: '**** **** **** 3092' },
    { id: 5, profile: penjani, name: 'Penjani Inyene', email: 'Penjani@gmail.com', location: 'Berkeley, California, USA', orders: '0', spent: '$0,00', uuid: 'f4fm3438dn12', phone: '0936-293-1516', cart: '**** **** **** 1629' },
    { id: 6, profile: omar, name: 'Omar Darobe', email: 'Omar@gmail.com', location: 'Carson City, Nevada, USA', orders: '10', spent: '$110,00', uuid: '12mf8f34f4ng', phone: '0936-293-1516', cart: '**** **** **** 8264' },
    { id: 7, profile: siegbert, name: 'Siegbert Gottfried', email: 'Siegbert@gmail.com', location: 'Los Angeles, California, USA', orders: '2', spent: '$1,000,000', uuid: 'emf4384nc123', phone: '0936-293-1516', cart: '**** **** **** 1625' },
    { id: 8, profile: iulia, name: 'Iulia Albu', email: 'Iulia@gmail.com', location: 'Murray, Utah, USA', orders: '0', spent: '$0,00', uuid: '12fgky59y4mv0', phone: '0936-293-1516', cart: '**** **** **** 9047' },
    { id: 9, profile: nasimiyu, name: 'Nasimiyu Danai', email: 'Nasimiyu@gmail.com', location: 'Salt Lake City, Utah, USA', orders: '7', spent: '$200,00', uuid: '22enf83ng5jl9', phone: '0936-293-1516', cart: '**** **** **** 2760' },
]

const xAxisData = [
    {
        name: 'Jan',
        thisYear: 4300
    },
    {
        name: 'Feb',
        thisYear: 3700
    },
    {
        name: 'Mar',
        thisYear: 4100
    },
    {
        name: 'Apr',
        thisYear: 4400
    },
    {
        name: 'May',
        thisYear: 3500
    },
    {
        name: 'Jun',
        thisYear: 4500
    },
    {
        name: 'Jul',
        thisYear: 4100
    },
    {
        name: 'Aug',
        thisYear: 3900
    },
    {
        name: 'Sep',
        thisYear: 3800
    },
    {
        name: 'Oct',
        thisYear: 4100
    },
    {
        name: 'Nov',
        thisYear: 4000
    },
    {
        name: 'Dec',
        thisYear: 4100
    }
]

const eChartData = [
    {
        name: '27 Mar',
        newCustomers: 4000,
        crossSeling: 2400,
        amt: 2400,
    },
    {
        name: '28 Mar',
        newCustomers: 3000,
        crossSeling: 1398,
        amt: 2210,
    },
    {
        name: '29 Mar',
        newCustomers: 2000,
        crossSeling: 9800,
        amt: 2290,
    },
    {
        name: '30 Mar',
        newCustomers: 2780,
        crossSeling: 3908,
        amt: 2000,
    },
    {
        name: '31 Mar',
        newCustomers: 1890,
        crossSeling: 4800,
        amt: 2181,
    },
    {
        name: '01 Apr',
        newCustomers: 2390,
        crossSeling: 3800,
        amt: 2500,
    },
    {
        name: '02 Apr',
        newCustomers: 4490,
        crossSeling: 2300,
        amt: 2100,
    },
    {
        name: '03 Apr',
        newCustomers: 4250,
        crossSeling: 7800,
        amt: 2100,
    },
    {
        name: '04 Apr',
        newCustomers: 3849,
        crossSeling: 5172,
        amt: 2100,
    },
    {
        name: '05 Apr',
        newCustomers: 6481,
        crossSeling: 1720,
        amt: 2100,
    },
    {
        name: '06 Apr',
        newCustomers: 3590,
        crossSeling: 8420,
        amt: 2100,
    }
]

export { inboxData, sellingProducts, users, products, xAxisData, eChartData }