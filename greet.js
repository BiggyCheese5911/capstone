function greetUser(){
    console.log(document.cookie)
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if(hasVisitedBefore){
        alert("Welcome back to your Inventory Manager!📊");
    }else{
        const expDate = new Date();
        expDate.setDate(expDate.getDate() + 7);
        // console.log(expDate)
        document.cookie = `visitedBefore=true; expires=${expDate.toUTCString()}; path=/`;
        // console.log(document.cookie)
        alert("Welcome to Inventory Manager!📊");
    };
};
greetUser();