import alcides from '../Assets/Images/avatar/avatar-alcides-antonio.png'
import marcus from '../Assets/Images/avatar/avatar-marcus-finn.png'
import carson from '../Assets/Images/avatar/avatar-carson-darrin.png'
import fran from '../Assets/Images/avatar/avatar-fran-perez.png'
import jie from '../Assets/Images/avatar/avatar-jie-yan-song.png'

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
    {id: 1, img: healthcare, name: 'Healthcare Erbology', category: 'healthcare'},
    {id: 2, img: makeup, name: 'Makeup Lancome Rouge', category: 'makeup'},
    {id: 3, img: Necessaire, name: 'Skincare Necessaire', category: 'skincare'},
    {id: 4, img: soja, name: 'Skincare Soja CO', category: 'skincare'}
]

export { inboxData, sellingProducts }