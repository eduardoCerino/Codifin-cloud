
export function findCandidateByStackAndId(stack, id) {
    return candidates.find(
      (candidate) => candidate.stack === stack && candidate.id.toString() === id
    );
  }

export const candidates = [
    {
        id:1,
        name: 'Eduardo Cerino',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'John@gmail.com',
        phone: '123456789',
        stack: 'Backend',
        status: 'Rejected',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:2,
        name: 'Juan Pere Morales',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Mrk@gmail.com' ,
        phone: '123456789',
        stack: 'Frontend',
        status: 'Rejected',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:3,
        name: 'Luis Perez Morales',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Offered',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:4,
        name: 'Juan Perz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Hired',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:5,
        name: 'Mike Lockeds',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Hired',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    // {
    //     id:5,
    //     name: 'Mike Lockeds',
    //     profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
    //     email: 'Freddy@gmail.com',
    //     phone: '123456789',
    //     stack: 'Hacking',
    //     status: 'Pending',
    //     date: '2021-05-01',
    //     time: '12:00',
    //     notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    // },
    {
        id:6,
        name: 'Juan Perz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Pending',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:7,
        name: 'Juan Perz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Pending',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:8,
        name: 'Juan Perz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Pending',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    }, {
        id:9,
        name: 'Juan Perz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Pending',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:10,
        name: 'Pepe Perez',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Hired',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
    {
        id:11,
        name: 'Lucas Cruz',
        profile: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png',
        email: 'Freddy@gmail.com',
        phone: '123456789',
        stack: 'Mobile',
        status: 'Hired',
        date: '2021-05-01',
        time: '12:00',
        notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        files: [ 
            {
                id: 1,
                name: 'CV.pdf',
                createdAt: '12/02/2022',
            },
            {
                id: 2,
                name: 'Weeks of contributions.doc',
                createdAt: '12/02/2022',
            },
            {
                id: 3,
                name: 'Weeks of contributions.xlsx',
                createdAt: '12/02/2022',
            }]
    },
]

