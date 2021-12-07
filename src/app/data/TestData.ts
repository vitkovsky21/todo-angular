import { Category } from "../classes/Category";
import { Priority } from "../classes/Priority";
import { Task } from "../classes/Task"

export class TestData {

    static categories: Category[] = [

        {id: 1, title: "Учёба"},
        {id: 2, title: "Работа"},
        {id: 3, title: "Еда"},
        {id: 4, title: "Семья"},
        {id: 5, title: "Отдых"}

    ];

    static priorities: Priority[] = [

        {id: 1, title: "Низкий", color: '#e5e5e5'},
        {id: 2, title: "Средний", color: '#85D1B2'},
        {id: 3, title: "Высокий", color: '#F1828D'}

    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Сделать домашнее задание по алгебре',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2022-04-05')
        },

        {
            id: 2,
            title: 'Успеть на смену в Макдак',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[1],
            date: new Date('2021-04-10')
        },
        
        {
            id: 3,
            title: 'Солидно отобедать',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2022-04-05')
        },
        
        {
            id: 4,
            title: 'Завести семью',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2022-04-15')
        },
        
        {
            id: 5,
            title: 'Поиграть в Playstation',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[4],
            date: new Date('2021-04-07')
        },

        {
            id: 6,
            title: 'Заполнить дневник',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2022-04-05')
        },

        {
            id: 7,
            title: 'Забрать зарплату',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2022-04-10')
        },
        
        {
            id: 8,
            title: 'Солидно поужинать',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2022-04-05')
        },
        
        {
            id: 9,
            title: 'Встретить вместе старость',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2052-04-15')
        },
        
        {
            id: 10,
            title: 'Поиграть в Xbox',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2022-04-07')
        }
    ]
}