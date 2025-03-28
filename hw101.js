let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];


let emailRegex = /^[a-zA-Z0-9.]+(\.[a-zA-Z0-9]+)*@(gmail|yahoo)+\.[a-zA-Z]{3,}$/;


arr.forEach(obj => {
    console.log(`${obj.email}: ${emailRegex.test(obj.email)}`);
});
