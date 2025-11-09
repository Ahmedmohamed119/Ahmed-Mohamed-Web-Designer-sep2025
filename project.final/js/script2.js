let form = document.getElementById('myForm')

let nameValidation = (input)=>{

    let inputValue = input.value.trim()

        let reg = /^[A-Za-z]{3,20}$/
         if(!reg.test(inputValue)) handleError(input , "enter a valid name && at list 3 character")
        else handleError(input)

}

let handleError = (input , msg = "")=>{
    input.nextElementSibling.innerText = msg
}

let emailValidation = (input)=>{
    let inputValue = input.value
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!reg.test(inputValue)) handleError(input , "enter a valid email")
        else handleError(input)

}

let phoneValidation = (input)=>{
    let inputValue = input.value
    let reg =  /^(010|011|012|015)[0-9]{8}$/;
    console.log(reg.test(inputValue))
    if(!reg.test(inputValue)) handleError(input , "enter a valid Phone Number")
        else handleError(input)

}

form.addEventListener('input' , (e)=>{
    if(e.target.id == "firstName" || e.target.id == "lastName" ||  e.target.id == "displayName" || e.target.id == "designation"){
        nameValidation(e.target)
    }
    else if (e.target.id == 'email')
        emailValidation(e.target)
    else if (e.target.id == 'phone')
        phoneValidation(e.target)
})

let input = document.getElementById('input-file');
let uploadBtn = document.getElementById('upload-btn');
uploadBtn.addEventListener('click', ()=>{
input.click();

})

let inputLogo = document.getElementById('input-file-logo');
let uploadLogo = document.getElementById('upload-btn-logo');
uploadLogo.addEventListener('click', ()=>{
inputLogo.click();
})

let inputCambridge = document.getElementById('input-file-cambridge');
let uploadCambridge = document.getElementById('upload-btn-cambridge');
uploadCambridge.addEventListener('click', ()=>{
inputCambridge.click();
})

const html = document.documentElement;
      const btn = document.getElementById('themeToggle');
      const icon = document.getElementById('themeIcon');

      btn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);

        if (newTheme === 'dark') {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        } else {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        }
      });

      var container = document.getElementById('membershipContainer');
    var addNewBtn = document.getElementById('addNewBtn');

    addNewBtn.addEventListener('click', () => {
      var newItem = document.createElement('div');
      newItem.classList.add('membership-item', 'mb-3');
      newItem.innerHTML = `
        <div class="row g-3 align-items-end">
          <div class="col-md-3">
            <label class="form-label small">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-2 " placeholder="Add Title">
          </div>
          <div class="col-md-8">
            <label class="form-label small">About Membership <span class="text-danger">*</span></label>
            <input type="text" class="form-control rounded-2" >
          </div>
          <div class="col-md-1 mb-2">
            <a class=" text-decoration-none text-danger w-100 delete-btn">Delete</a>
          </div>
        </div>
      `;
      container.appendChild(newItem);
    });

    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.membership-item').remove();
      }
    });