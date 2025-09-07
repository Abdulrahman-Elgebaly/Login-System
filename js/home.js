document.getElementById('userName').innerHTML= `Welcome ${localStorage.getItem('userName')}`
document.getElementById('logoutBTN').addEventListener('click',function(){
    localStorage.removeItem('userName')
})