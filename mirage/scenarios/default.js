export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  

  server.create('todo', {title: "first TODO", description: "it's a pretty great todo!"});
  server.create('todo', {title: "second todo", description: "it's also a pretty great todo!"});
  server.create('todo', {title: "Third Todo", description: "testing description"});


  server.createList('todo', 5, {title: "todo"});
}

