const db = require('../utils/database');
const {Users, Participants, Messages, Conversations} = require('../models');
const initModels = require('../models/initModels');

initModels();
const users = [
    {
        firstname: 'Maria', 
        lastname: 'Godoy', 
        email: 'maria@gmail.com', 
        password: '1234', 
        phone: '000000000'
    },
    {
        firstname: 'German', 
        lastname: 'Silva', 
        email: 'german@gmail.com', 
        password: '123456', 
        phone: '00000001456'
    },
    {
        firstname: 'jose', 
        lastname: 'tejero', 
        email: 'jose@gmail.com', 
        password: '1234', 
        phone: '999999999'
    },
];

const conversations = [
    {
        title: 'Con el compa',
        createdBy: 2,
    },
    {
        title: 'Con los compas',
        type: 'group',
        createdBy: 1
    },
    {
        title: 'No idea',
        createdBy: 3,
    }
]

const participants = [
    {
        conversationId: 1,
        userId: 2
    },
    {
        conversationId: 1,
        userId: 1
    },
    {
        conversationId: 2,
        userId: 1
    },
    {
        conversationId: 2,
        userId: 2
    },
    {
        conversationId: 2,
        userId: 3
    },
    {
        conversationId: 3,
        userId: 3
    },
    {
        conversationId: 3,
        userId: 1
    },
]

const messages = [
    {
        senderId: 2,
        conversationId: 1,
        message: 'Hola'
    },
    {
        senderId: 1,
        conversationId: 1,
        message: 'Quien eres'
    },
    {
        senderId: 2,
        conversationId: 1,
        message: 'No lo se, dime tu!'
    },
    {
        senderId: 3,
        conversationId: 2,
        message: 'salimos o k?'
    },
    {
        senderId: 1,
        conversationId: 2,
        message: 'No puedo ando con express y sequelize'
    },
    {
        senderId: 3,
        conversationId: 2,
        message: 'No me Digas!'
    },
    {
        senderId: 2,
        conversationId: 2,
        message: 'Yo ya envie los proyectos'
    },
    {
        senderId: 3,
        conversationId: 3,
        message: 'Ya estoy aqui'
    },
    {
        senderId: 1,
        conversationId: 3,
        message: 'Voy bajando'
    },
];

db.sync({ force: true }).then(() => {
    console.log("Sinronizado");
    users.forEach(async (user) => await Users.create(user));
    setTimeout(() => {
      conversations.forEach(
        async (conversation) => await Conversations.create(conversation)
      );
    }, 100);
    setTimeout(() => {
      participants.forEach(
        async (participant) => await Participants.create(participant)
      );
    }, 200);
    setTimeout(() => {
      messages.forEach(async (message) => await Messages.create(message));
    }, 300);
  });