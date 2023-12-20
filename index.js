const formItem = document.querySelectorAll('.form_list ');

const labellingEl = document.querySelectorAll(".labelling")
console.log(labellingEl);

const wrapperEl = document.querySelector(".wrapper")
console.log(wrapperEl);

const btnEl = document.querySelector('.btn');

const inputs = document.querySelectorAll('#input');

const errorElements = document.querySelectorAll('.error_message');

const years = document.querySelector('#years-ans');

const months = document.querySelector('#months-ans');

const days = document.querySelector('#days-ans');

const currrentDate = new Date().getDate();

const currentYear = new Date().getFullYear();

const currentMonth = new Date().getMonth() + 1;

const formListEL = [firstFrom, secondForm, ThirdForm] = formItem;

const errorMessageEL = [dayError, monthError, yearError] = errorElements;

const inputsEl = [dayInput, monthInput, YearInput] = inputs;

const labellingEls = [labelDay, labelMonth, labelYear] = labellingEl;

let hasError = false;

let empty = false;

btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    // error for days
    if(inputsEl[0].value == '') {
        errorMessageEL[0].style.visibility = "visible";
        errorMessageEL[0].style.opacity = 1;
        errorMessageEL[0].innerHTML = "This field is required";
        inputsEl[0].style.border = "1px solid red";
        inputsEl[0].style.backgroundColor = "#ff53531c";
        labellingEls[0].style.color = "red";
        empty = true;
        hasError = false;
    }else if(inputsEl[0].value <= 0 || inputsEl[0].value > 31) {
        errorMessageEL[0].style.visibility = "visible";
        errorMessageEL[0].style.opacity = 1;
        inputsEl[0].style.border = "1px solid red";
        inputsEl[0].style.backgroundColor = "#ff53531c";
        labellingEls[0].style.color = "red";
        days.innerHTML = "- -";
        hasError = true;
        empty = false;
        errorMessageEL[0].innerHTML = 'Must be a valid day'} else {
        errorMessageEL[0].style.visibility = "hidden";
        errorMessageEL[0].style.opacity = 0;
        inputsEl[0].style.border = "1px solid #bcbcbc";
        inputsEl[0].style.backgroundColor = "transparent";
        empty = false;
        hasError = true;
        days.innerHTML = Math.abs(currrentDate - inputsEl[0].value);
        days.style.opacity = 1.5;
    }

    // error for months
    if(inputsEl[1].value == '') {
        errorMessageEL[1].style.visibility = "visible";
        errorMessageEL[1].style.opacity = 1;
        errorMessageEL[1].innerHTML = "This field is required";
        inputsEl[1].style.border = "1px solid red";
        inputsEl[1].style.backgroundColor = "#ff53531c";
        labellingEls[1].style.color = "red";
        empty = true;
        hasError = false;
    }else if(inputsEl[1].value <= 0 || inputsEl[1].value > 12) {
        errorMessageEL[1].style.visibility = "visible";
        errorMessageEL[1].style.opacity = 1;
        inputsEl[1].style.border = "1px solid red";
        inputsEl[1].style.backgroundColor = "#ff53531c";
        labellingEls[1].style.color = "red";
        months.innerHTML = "- -";
        hasError = true;
        empty = false;
        errorMessageEL[1].innerHTML = 'Must be a valid month'} else {
        errorMessageEL[1].style.visibility = "hidden";
        errorMessageEL[1].style.opacity = 0;
        inputsEl[1].style.border = "1px solid #bcbcbc";
        inputsEl[1].style.backgroundColor = "transparent";
        empty = false;
        hasError = true;
        months.innerHTML = currentMonth - inputsEl[1].value;
        months.style.opacity = 1;
    }

    // error for years
    if(inputsEl[2].value == '') {
        errorMessageEL[2].style.visibility = "visible";
        errorMessageEL[2].style.opacity = 1;
        errorMessageEL[2].innerHTML = "This field is required";
        inputsEl[2].style.border = "1px solid red";
        inputsEl[2].style.backgroundColor = "#ff53531c";
        labellingEls[2].style.color = "red";
        empty = true;
        hasError = false;
    }else if(inputsEl[2].value <= 0 || inputsEl[2].value > currentYear) {
        errorMessageEL[2].style.visibility = "visible";
        errorMessageEL[2].style.opacity = 1;
        inputsEl[2].style.border = "1px solid red";
        inputsEl[2].style.backgroundColor = "#ff53531c";
        labellingEls[2].style.color = "red";
        years.innerHTML = "- -";
        hasError = true;
        empty = false;
        errorMessageEL[2].innerHTML = 'must be in the past'} else {
        errorMessageEL[2].style.visibility = "hidden";
        errorMessageEL[2].style.opacity = 0;
        inputsEl[2].style.border = "1px solid #bcbcbc";
        inputsEl[2].style.backgroundColor = "transparent";
        empty = false;
        hasError = true;
        years.innerHTML = currentYear - inputsEl[2].value;
        years.style.opacity = 1;
    }

    // error februrary

    if(inputsEl[1].value == 2 && inputsEl[0].value > 29) {
        errorMessageEL[1].style.visibility = "visible";
        errorMessageEL[1].style.opacity = 1;
        errorMessageEL[0].style.visibility = "visible";
        errorMessageEL[0].style.opacity = 1;
        errorMessageEL[1].innerHTML = "Must be a valid month";
        errorMessageEL[0].innerHTML = "Must be a valid day";
        inputsEl[1].style.border = "1px solid red";
        inputsEl[1].style.backgroundColor = "#ff53531c";
        inputsEl[0].style.border = "1px solid red";
        labellingEls[0].style.color = "red";
        labellingEls[1].style.color = "red";
        inputsEl[0].style.backgroundColor = "#ff53531c";
        months.innerHTML = "- -";
        months.style.opacity = .5;
        days.innerHTML = "- -";
        days.style.opacity = .5;
    }

    // error sept, april, june, nov

    let monthsWith30Days = ["4", "6", "9", "11"];

    if(monthsWith30Days.includes(inputsEl[1].value)  && inputsEl[0].value > 30) {
        errorMessageEL[1].style.visibility = "visible";
        errorMessageEL[1].style.opacity = 1;
        errorMessageEL[0].style.visibility = "visible";
        errorMessageEL[0].style.opacity = 1;
        errorMessageEL[1].innerHTML = "Must be a valid month";
        errorMessageEL[0].innerHTML = "Must be a valid day";
        inputsEl[1].style.border = "1px solid red";
        inputsEl[1].style.backgroundColor = "#ff53531c";
        inputsEl[0].style.border = "1px solid red";
        inputsEl[0].style.backgroundColor = "#ff53531c";
        labellingEls[0].style.color = "red";
        labellingEls[1].style.color = "red";
        months.innerHTML = "- -";
        months.style.opacity = .5;
        days.innerHTML = "- -";
        days.style.opacity = .5;
    }
})

console.log(currrentDate);



