export const commentsData = [
    {
        id: 1,
        parentID: null,
        userID: 1,
        username: 'Иванов И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'После того как ВПО отображает WebView, оно отправляет SMS-сообщение в службу Сбербанка AutoPay (79262000900) со словом «баланс». Получив ответ, ВПО парсит SMS сообщение, чтобы определить баланс счета. Если он меньше 3000 руб, троянец ничего не сделает. Если он превышает 68 тыс руб, троянец запрашивает  66 тыс, в противном случае он запросит доступную сумму минус 1000.',
    }, {
        id: 2,
        parentID: 1,
        userID: 2,
        username: 'Длиннаяфамилия И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'Если он меньше 3000 руб, троянец ничего не сделает'
    }, {
        id: 3,
        parentID: null,
        userID: 1,
        username: 'Иванов И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'После того как ВПО отображает WebView, оно отправляет SMS-сообщение в службу Сбербанка AutoPay (79262000900) со словом «баланс». Получив ответ, ВПО парсит SMS сообщение, чтобы определить баланс счета.',
    }, {
        id: 4,
        parentID: null,
        userID: null,
        username: null,
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: null,
    }, {
        id: 5,
        parentID: 4,
        userID: 1,
        username: 'Петров И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
    }, {
        id: 6,
        parentID: 5,
        userID: 1,
        username: 'Петров И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
    }, {
        id: 7,
        parentID: 5,
        userID: 1,
        username: 'Петров И. И.',
        imgSource: '',
        datetime: '10.12.18 15:00',
        comment: 'Если он меньше 3000 руб, троянец ничего не сделает',
    }]