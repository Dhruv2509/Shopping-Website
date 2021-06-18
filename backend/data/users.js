import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Dhruv Swami',
        email: 'dhruv@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Yash',
        email: 'yash@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users