var async = require("async");

const data = [
  {
    primary_task: 5,
    secundary_task: 8
  },
  {
    primary_task: Math.round(Math.random() * 50),
    secundary_task: Math.round(Math.random() * 50)
  },
  {
    primary_task: [1, 2, 3],
    secundary_task: [2, 3 , 4]
  },
  {
    primary_task: "its string",
    secundary_task: "async series"
  },
  {
    primary_task: true,
    secundary_task: true
  },
  {
    primary_task: Math.round(Math.random() * 50),
    secundary_task: Math.round(Math.random() * 50)
  },
]

const tasksFunction = (data) => async.series([

  function compare(callback) {
    setTimeout(function() {
      console.log("task 1");
      if(data[0].primary_task <= data[0].secundary_task){
        callback(null, true);
      } else {
        callback(new Error(`${data[0].primary_task} é maior que ${data[0].secundary_task}`), "Stop");
      }
    }, 2000);
  },

  function compareRandom(callback) {
    setTimeout(function() {
      console.log("task 2");
      if(data[1].primary_task <= data[1].secundary_task){
        callback(null, true);
      } else {
        callback(new Error(`${data[1].primary_task} é maior que ${data[1].secundary_task}`), "Stop");
      }
    }, 2000);
  },

  function compareLength(callback) {
    setTimeout(function() {
      console.log("task 3");
      if(data[2].primary_task.length === data[2].secundary_task.length){
        callback(null, true);
      } else {
        callback(new Error("Esses dois Arrays não possuem o mesmo comprimento"), "Stop");
      }
    }, 2000);
  },

  function compareTypeOf(callback) {
    setTimeout(function() {
      console.log("task 4");
      if(typeof(data[3].primary_task) === typeof(data[3].secundary_task)){
        callback(null, true);
      } else {
        callback(new Error("Os tipos desses dois valores não são iguais"), "Stop");
      }
    }, 2000);
  },

  function compareBoolean(callback) {
    setTimeout(function() {
      console.log("task 5");
      if(data[4].primary_task && data[4].secundary_task){
        callback(null, true);
      } else {
        callback(new Error("As duas afirmações não são verdadeiras"), "Stop");
      }
    }, 2000);
  },

  function addTask(callback) {
    setTimeout(function() {
      console.log("task 6");
      const total = data[5].primary_task + data[5].secundary_task;
      if(total <= 50) {
        callback(null, true);
      } else {
        callback(new Error("A soma ela é acima de 50"), "Stop");
      }
    }, 2000);
  },
  
], function ResultTask(error, result) {
  if(error === null) {
    console.log(result)
  } else {
    console.log(error)
  }
});

tasksFunction(data);
