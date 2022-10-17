import React from 'react';
import style from './Test.module.scss'
import SuperInputText from '../../common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../common/c3-SuperCheckbox/SuperCheckbox';

const Test = () => {
    return (
        <div className={style.wrapper}>
            <SuperInputText placeholder={'Test input'}/>
            <SuperButton>Test Button</SuperButton>
            <SuperCheckbox>Test Checkbox</SuperCheckbox>
        </div>
    );
};

export default Test;
