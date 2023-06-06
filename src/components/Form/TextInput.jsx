import { useState } from 'react';
import styles from './TextInput.module.scss';

const FooterFormInput = ({ className, type, name, errorText, ...rest }) => {
    const [validationMessage, setValidationMessage] = useState('');

    const onInvalidHandler = (e) => {
        const target = e.target;
        setValidationMessage(target.validationMessage);
    };

    const onBlurHandler = (e) => {
        const target = e.target;

        if (validationMessage) {
            setValidationMessage(target.validationMessage);
        }
    };

    const onChangeHandler = (e) => {
        const target = e.target;
        target.classList.remove(styles.textInput_initial);
    };

    return (
        <div className={styles.textInput}>
            <input
                className={`${styles.textInput_initial} ${styles.textInput_input}`}
                id={name}
                type={type}
                placeholder={name}
                onBlur={onBlurHandler}
                onInvalid={onInvalidHandler}
                onChange={onChangeHandler}
                {...rest}
            />

            {!!validationMessage && (
                <div className={styles.textInput_validationMessage}>
                    {errorText || validationMessage}
                </div>
            )}
        </div>
    );
};

export default FooterFormInput;
