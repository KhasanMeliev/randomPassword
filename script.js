var password = document.getElementById("password")

function generatorPassword() {
    var chars = '0123456789abcdefghijklmnopqrstuvxyz'
    var passwordLength = 10;
    var password = ''
    for (var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    document.getElementById("password").value = password
}
function copyPassword() {
    var copyText = document.getElementById('password')
    copyText.select()
    copyText.selectSelectionRange(0, 999)
    document.exitCommand('copy')
    alert("copied")
}