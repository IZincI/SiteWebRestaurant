var users = [{email:"elmatador@outlook.fr",mdp:"cabron"},
         {email:"jessicapotedansmonsac@outlook.fr",mdp:"lasalopedu95"},
         {email:"jacquieindustrie@orange.fr",mdp:"lebonplaisir"},
         {email:"ysf@gmail.com",mdp:"lalala"},
         {email:"magicsystem@outlook.fr",mdp:"zougloudance"}];


         

function verifCompte(){
    let monEmail = document.getElementById("Email").value ;
    let monMDP = document.getElementById("password").value ;
    let message = document.getElementById("lol");

    if (validateEmail(monEmail)){
        console.log("Ton mail est valide");
    }
    else{
        console.log("Ton mail n'est pas bien écrit");
    }

    for (let i=0;i<users.length;i++){
        if (users[i].email == monEmail && users[i].mdp == monMDP){
            console.log ("valide");
            message.innerHTML = "valide";
            break;
        }
        
        else if(users[i].email != monEmail || users[i].mdp != monMDP){
            console.log("aucune adresse");
            message.innerHTML = "email ou mot de passe incorrect";
        }
    }
}

function validateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {       
        return (true)
    }
    else{
        return (false)
    }
}