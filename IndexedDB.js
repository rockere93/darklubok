let db;
let dbReq = indexedDB.open('story', 1);
dbReq.onupgradeneeded = (event) => {
  // Зададим переменной db ссылку на базу данных
  db = event.target.result;
  // Создадим хранилище объектов с именем notes.
  let storyCards = db.createObjectStore('storyCards',);
}
dbReq.onsuccess = (event) => {
  db = event.target.result;
  let tx = db.transaction('storyCards', 'readwrite'); 
let cards = tx.objectStore('storyCards'); // (2)

let storyCard0 = {
  get text() { return `${player.gender}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.` },
  actions: {
      get names() {
          this.goToNext._name = "Продолжить";
          Object.defineProperty(this, "names", {
              enumerable: false
          });
          return Object.keys(this);
      },
      goToNext() {
          story.goToStoryCard(story.storyCard2);
      }

  }
};

let request = cards.put(storyCard0, 'storyCard0'); // (3)

request.onsuccess = function() { // (4)
  console.log("История добавлена в хранилище", request.result);
};

request.onerror = function() {
  console.log("Ошибка", request.error);
};
}
dbReq.onerror = (event) => {
  alert('error opening database ' + event.target.errorCode);
}

