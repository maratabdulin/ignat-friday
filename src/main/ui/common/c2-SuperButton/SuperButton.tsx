import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from './SuperButton.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type DefaultButtonPropsTypeWithoutClassName = Omit<DefaultButtonPropsType, 'className'>
type SuperButtonPropsType = DefaultButtonPropsTypeWithoutClassName & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    return (
        <button
            className={styles.button}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
