const EventEmitter = require('events')


/*
const emitter = new EventEmitter()

emitter.on('any', (data)=> {
    console.log('ON: any', data)
})

emitter.emit('any', {a:1})

setTimeout(()=>{
    emitter.emit('any', {b:2})
}, 1000)
*/
class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    Dispatch (eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}


const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON: aa', data)
})

dis.Dispatch('aa', {aa: 22})
