const expect = require('expect')
const {User, Users} = require('./user');



describe('User', ()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id:'1',
            name:'jal',
            room: 'Notice'
        },{
            id:'2',
            name:'jen',
            room: 'club'
        },{
            id:'3',
            name:'takkar',
            room: 'Notice'
        }]
    })
    it('should add new user', ()=>{
        var users = new Users();
        var user = {
            id:'123',
            name:'Jck',
            room: 'fanClub'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
    
    it('should remove user', ()=>{
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', ()=>{
        var userId = '55';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);

    });

    it('should find user', ()=>{
        var userId ='2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', ()=>{
        var userId ='33';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    })

    it('should return names for Notice',()=>{
        var userList = users.getUserList('Notice');

        expect(userList).toEqual(['jal', 'takkar']);
    });
    it('should return names for club', ()=>{
        var userList  = users.getUserList('club')
        expect(userList).toEqual(['jen']);
    })
});