Vue.component('navbar_student',{
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-app-pry">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarApp" aria-controls="navbarApp" aria-expanded="false" aria-label="Toggle navigation">
                <img src="images/burger.png" alt="burger-icon" width="30px" height="30px">
            </button>
            
            <a class="navbar-brand" href="#">APP CLASSES</a>
          
            <div class="collapse navbar-collapse" id="navbarApp">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Materias</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Tareas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Avisos</a>
                </li>
                </ul>
            </div>
    </nav>
  `
});
Vue.component('card_student',{

  props:['content', 'title'],
  template:`
  <a class="card-link" href="">
    <div class="card">
      <div class="card-body">
          <h5 class="text-dark font-weight-bolder">{{title}}</h5>
          <p class="text-secondary">{{content}}</p>
      </div>
    </div>
   </a>
  `
})

