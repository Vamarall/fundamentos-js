const scheduler = require('node-schedule');

// '*/5 * 18 * * 6' significa: a cada 5 segundos, às 18 horas, todos os sábados
const tarefa = scheduler.scheduleJob('*/5 * 18 * * 6', function(){
    console.log('Executando tarefa', new Date().getSeconds());
})

setTimeout(function(){
    tarefa.cancel(); // Cancela a tarefa agendada
    console.log('Tarefa cancelada');
}, 20000); // Cancela após 20 segundos


const novaTarefa = new scheduler.RecurrenceRule();
novaTarefa.dayOfWeek = [new scheduler.Range(5,6)] // De sexta a sábado
novaTarefa.hour = 18; // Às 18 horas
novaTarefa.second = 30; // No segundo 30

const tarefa2 = scheduler.scheduleJob(novaTarefa, function(){
    console.log('Executando nova tarefa', new Date().getSeconds());
})