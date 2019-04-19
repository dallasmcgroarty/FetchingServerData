// onload fetch posts and add them to page
window.onload = function () {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      var obj;
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newPost = document.createElement('div');
      html += '<h2 data-posts="title">' + obj.title + '</h2>';
      html += '<p data-posts="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      newPost.innerHTML = html;
      var target = document.querySelector('.append1');
      target.appendChild(newPost, target);
    });

  fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      var obj;
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newPost = document.createElement('div');
      html += '<h2 data-posts="title">' + obj.title + '</h2>';
      html += '<p data-posts="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      newPost.innerHTML = html;
      var target = document.querySelector('.append2');
      target.appendChild(newPost, target);
    });
};

(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  // booleans to check if the button has been pressed before
  var buttonOne = false;
  var buttonTwo = false;

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (!buttonOne) { // fetch first comment if first button hasnt been pressed
        fetchComments1();
        buttonOne = true;
      }
      if (!buttonTwo) { // fetch second comment if second button hasnt been pressed
        fetchComments2();
        buttonTwo = true;
      }
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }
      event.preventDefault();
    });
  });
})(window);

// function to fetch first comments and add them to page
function fetchComments1 () {
  var obj = '';
  fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newComment = document.createElement('div');
      html += '<p data-comments="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      html += '<address data-comments="name">';
      html += '<a data-comments="email" href=' + obj.email + '>' + obj.name + '</a>';
      html += '</address>';
      newComment.innerHTML = html;
      var target = document.querySelector('#comments-1');
      target.appendChild(newComment, target);
    });

  fetch('https://jsonplaceholder.typicode.com/comments/2')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newComment = document.createElement('div');
      html += '<p data-comments="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      html += '<address data-comments="name">';
      html += '<a data-comments="email" href=' + obj.email + '>' + obj.name + '</a>';
      html += '</address>';
      newComment.innerHTML = html;
      var target = document.querySelector('#comments-1');
      target.appendChild(newComment, target);
    });
}

// function to fetch second comments and add them to page
function fetchComments2 () {
  var obj = '';
  fetch('https://jsonplaceholder.typicode.com/comments/6')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newComment = document.createElement('div');
      html += '<p data-comments="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      html += '<address data-comments="name">';
      html += '<a data-comments="email" href=' + obj.email + '>' + obj.name + '</a>';
      html += '</address>';
      newComment.innerHTML = html;
      var target = document.querySelector('#comments-2');
      target.appendChild(newComment, target);
    });
  fetch('https://jsonplaceholder.typicode.com/comments/7')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      obj = JSON.stringify(myJson);
      obj = JSON.parse(obj);
      var html = '';
      var newComment = document.createElement('div');
      html += '<p data-comments="body">' + obj.body.replace(/\n/g, '<br>') + '</p>';
      html += '<address data-comments="name">';
      html += '<a data-comments="email" href=' + obj.email + '>' + obj.name + '</a>';
      html += '</address>';
      newComment.innerHTML = html;
      var target = document.querySelector('#comments-2');
      target.appendChild(newComment, target);
    });
}
