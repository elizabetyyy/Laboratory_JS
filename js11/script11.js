class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    register() {
        console.log(`Користувач ${this.username} успішно зареєстрований!`);
    }

    login(inputPassword) {
        if (inputPassword === this.password) {
            console.log(`Користувач ${this.username} увійшов успішно!`);
        } else {
            console.log("Невірний пароль!");
        }
    }
}


