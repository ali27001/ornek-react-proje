import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
i18n.use(initReactI18next)

.init({
    resources: {
        en: {
            translation: {
                "hi": "Welcome to Derinkod.com",
            }
        },
        tr: {
            translation: {
                "hi": "Derinkod.com'a hoş geldiniz",

            }
        }
    },
    lng: "tr",
    fallbackLng: "tr",
    interpolation: {
        escapeValue: false
    }
});
export default i18n;
