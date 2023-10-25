import React from 'react';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import cls from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classnames/classnames";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
};
