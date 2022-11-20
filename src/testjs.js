const ar = document.querySelector('textarea')

console.log('adss')
ar.addEventListener('input',throttle(fnc,1000))
function fnc (e)
{
    console.log(e.target.value)
}