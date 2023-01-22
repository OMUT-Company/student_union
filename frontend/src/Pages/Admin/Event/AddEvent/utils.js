const formStructure = {
    name: {
        am: "",
        en: "",
        ru: ""
    },
    type: {
        am: {label: "", value: ""},
        en: {label: "", value: ""},
        ru: {label: "", value: ""},
    },
    place: {
        am: {label: "", value: ""},
        en: {label: "", value: ""},
        ru: {label: "", value: ""}
    },
    date: {
        from: "",
        to: ""
    },
    description: {
        am: "",
        en: "",
        ru: ""
    },
    financiers: []
}

const typeStructure = [
    {
        field: {label: "Support to organs' education", value: "support to organs' education"},
        translation: {
            am: "Աջակցություն որբ երեխաների կրթությանը",
            en: "Support to organs' education",
            ru: "Поддержка образования детей-сирот"
        }
    },
    {
        field: {label: "Visiting nursing homes", value: "visiting nursing homes"},
        translation: {
            am: "Այցելություն ծերանոցներ",
            en: "Visiting nursing homes",
            ru: "Посещение домов престарелых"
        }
    },
    {
        field: {label: "Green life", value: "green life"},
        translation: {
            am: "Ապրենք 'կանաչ'",
            en: "Green life",
            ru: "Экологически чистая жизнь"
        }
    },
    {
        field: {label: "Volunteering in sports", value: "volunteering in sports"},
        translation: {
            am: "Կամավորություն սպորտում",
            en: "Volunteering in sports",
            ru: " Волонтерство в спорте"
        }
    }
]

const placeStructure = [
    {
        field: {value: "aragatsotn", label: "Aragatsotn"},
        translation: {
            am: "Արագածոտն",
            en: "Aragatsotn",
            ru: "Арагацот"
        }
    },
    {
        field: {value: "ararat", label: "Ararat"},
        translation: {
            am: "Արարատ",
            en: "Ararat",
            ru: "Арарат"
        }
    },
    {
        field: {value: "armavir", label: "Armavir"},
        translation: {
            am: "Արմավիր",
            en: "Armavir",
            ru: "Армавир"
        }
    },
    {
        field: {value: "gegharkunik", label: "Gegharkunik"},
        translation: {
            am: "Գեղարքունիք",
            en: "Gegharkunik",
            ru: "Гехаркуник"
        }
    },
    {
        field: {value: "kotayk", label: "Kotayk"},
        translation: {
            am: "Կոտայք",
            en: "Kotayk",
            ru: "Котайк"
        }
    },
    {
        field: {value: "lori", label: "Lori"},
        translation: {
            am: "Լոռի",
            en: "Lori",
            ru: "Лори"
        }
    },
    {
        field: {value: "shirak", label: "Shirak"},
        translation: {
            am: "Շիրակ",
            en: "Shirak",
            ru: "Ширак"
        }
    },
    {
        field: {value: "syunik", label: "Syunik"},
        translation: {
            am: "Սյունիք",
            en: "Syunik",
            ru: "Сюник"
        }
    },
    {
        field: {value: "tavush", label: "Tavush"},
        translation: {
            am: "Տավուշ",
            en: "Tavush",
            ru: "Тавушс"
        }
    },
    {
        field: {value: "vayots Dzor", label: "Vayots Dzor"},
        translation: {
            am: "Վայոց Ձոր",
            en: "Vayots Dzor",
            ru: "Вайоцдзор"
        }
    },
    {
        field: {value: "yerevan", label: "Yerevan"},
        translation: {
            am: "Երևան",
            en: "Yerevan",
            ru: "Ереван"
        }
    }
]

export const addEventUtils = {
    formStructure,
    typeStructure,
    placeStructure
}