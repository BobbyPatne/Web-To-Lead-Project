function beforesubmit() {
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log(inputdate.value);
    let formattedDate = new Date(inputdate.value).toDateString(en - IN);
    /* we need to convert date to store data in salesforce org, so we get the locale from anonymous by system.debug(userInfo.getLocale()) -- en_IN 
    and replace hypen with the */
}
function bobby() {
    console.log("Playboy");
} 