var agora = new Date()
var hora = agora.getHours
if(hora < 13){
    console.log('BOM DIA!')
}
else if(hora <= 18){
    console.log('BOA TARDE!')
}
else{
    console.log('BOA NOITE!')
}