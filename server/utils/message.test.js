var expect = require('expect');
var {generateMessage, generateLocationMessage}  = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = 'Annna';
        var text = 'some text';
        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object',()=>{
    var from = 'Dev';
    var latitude = 15;
    var longitude = 25;
    var url = 'https://www.google.com/maps?q=15,25';
    var message = generateLocationMessage(from, latitude, longitude);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
    
    });
});
