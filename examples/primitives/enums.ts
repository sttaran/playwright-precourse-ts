/*
* Enum with reservation statuses
* */
enum ReservationStatus {
    New = 1,
    Confirmed,
    Canceled = 5
}

console.log(ReservationStatus.New); // 1
console.log(ReservationStatus.Confirmed); // 2
console.log(ReservationStatus.Canceled); // 5


/*
* Enum with language codes
* */
enum Language {
    English = 'en',
    Ukrainian = 'ua',
    Chinese = 'ch'
}

console.log(Language.English); // en
console.log(Language.Ukrainian); // ua
console.log(Language.Chinese); // ch


/*
* Function that returns menu translation based on language
* */
function getMenuTranslation(language: Language) {
    switch (language) {
        case Language.English:
            return 'Menu';
        case Language.Ukrainian:
            return 'Меню';
        case Language.Chinese:
            return '菜单';
    }
}

console.log(getMenuTranslation(Language.English)); // Menu
console.log(getMenuTranslation(Language.Ukrainian)); // Меню
console.log(getMenuTranslation(Language.Chinese)); // 菜单