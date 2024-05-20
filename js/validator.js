function validateForm() {
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    // Проверка на пустые поля
    if (phone == "" || password == "") {
        alert("Пожалуйста, заполните все обязательные поля.");
        return false;
    }

    // Проверка на наличие только цифр в поле телефона
    if (!/^\d+$/.test(phone)) {
        alert("Пожалуйста, введите только цифры в поле телефона.");
        return false;
    }

    return true;
}


function validateFormReg() {
    var surname = document.getElementById("surname").value;
    var name = document.getElementById("name").value;
    var patronymic = document.getElementById("patronymic").value;
    var birthdate = document.getElementById("birthdate").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var passport = document.getElementById("passport").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (surname == "" || name == "" || patronymic == "" || birthdate == "" || phone == "" || passport == "" || password == "" || confirmPassword == "") {
        alert("Пожалуйста, заполните все обязательные поля.");
        return false;
    }

    var russianRegex = /^[а-яА-ЯёЁ\s]+$/; // Регулярное выражение для проверки на русские буквы
    if (!russianRegex.test(surname) || !russianRegex.test(name) || !russianRegex.test(patronymic)) {
        alert("Фамилия, имя и отчество должны содержать только русские буквы.");
        return false;
    }

    var passportRegex = /^\d+$/; // Регулярное выражение для проверки на цифры
    if (!passportRegex.test(passport)) {
        alert("Паспортные данные должны содержать только цифры.");
        return false;
    }

    var phoneRegex = /^\d*$/; // Регулярное выражение для проверки на наличие только цифр
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").style.display = "block";
        return false;
    }

    if (password !== confirmPassword) {
        alert("Пароли не совпадают.");
        return false;
    }

    return true;
}