//Init
const github = new GitHub();
const ui = new UI();

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if(userText !== ''){
       //Make call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                }else {
                    //Show profile
                    ui.showProfile(data.profile);
                    console.log(ui.showRepos(data.repos));
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }
})
