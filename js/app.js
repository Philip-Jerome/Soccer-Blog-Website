let postWrapper = document.querySelector('#post-holder');


let postBox = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
      console.log(postBox)
      postBox = data
      let postHolder = '';
      postBox.forEach(post => {
        postHolder += `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3 mb-sm-3">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <p>${post.id}</p>
                <h3 class="card-title" id="post-title">${post.title}</h3>
                <p class="card-text" id="post-body">${post.body}</p>
                <a href="#" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></a>
                <a href="#" class="btn btn-outline-primary"><i class="bi bi-eye"></i></a>
                <a href="#" class="btn btn-outline-primary"><i class="bi bi-trash"></i></a>
              </div>
            </div>
        
        
        
        `
            
      });

      postWrapper.innerHTML = postHolder;
      
    })
}
    getposts();