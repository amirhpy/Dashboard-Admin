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

let users = [
    { id: 1, profile: carson, name: 'Carson Darrin', email: 'Carson@gmail.com', location: 'Cleveland, Ohio, USA', orders: '3', spent: '$300,00' },
    { id: 2, profile: fran, name: 'Fran Perez', email: 'Fran@gmail.com', location: 'Atlanta, Georgia, USA', orders: '4', spent: '$420,00' },
    { id: 3, profile: jie, name: 'Jie Yan Song', email: 'Jie@gmail.com', location: 'North Canton, Ohio, USA', orders: '1', spent: '$110,00' },
    { id: 4, profile: marcus, name: 'Marcus Finn', email: 'Marcus@gmail.com', location: 'Madrid, Madrid, Spain', orders: '2', spent: '$287,00' },
    { id: 5, profile: penjani, name: 'Penjani Inyene', email: 'Penjani@gmail.com', location: 'Berkeley, California, USA', orders: '0', spent: '$0,00' },
    { id: 6, profile: omar, name: 'Omar Darobe', email: 'Omar@gmail.com', location: 'Carson City, Nevada, USA', orders: '10', spent: '$110,00' },
    { id: 7, profile: siegbert, name: 'Siegbert Gottfried', email: 'Siegbert@gmail.com', location: 'Los Angeles, California, USA', orders: '2', spent: '$1,000,000' },
    { id: 8, profile: iulia, name: 'Iulia Albu', email: 'Iulia@gmail.com', location: 'Murray, Utah, USA', orders: '0', spent: '$0,00' },
    { id: 9, profile: nasimiyu, name: 'Nasimiyu Danai', email: 'Nasimiyu@gmail.com', location: 'Salt Lake City, Utah, USA', orders: '7', spent: '$200,00' },
]

export { inboxData, sellingProducts, users }