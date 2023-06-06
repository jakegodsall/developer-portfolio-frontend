import { useState } from 'react';
import styles from './TextAreaInput.module.scss';

const TextAreaInput = ({ className, name, errorText, ...rest }) => {
    const [validationMessage, setValidationMessage] = useState('');

    const onInvalidHandler = (e) => {
        const target = e.target;
        setValidationMessage(target.validationMessage);
    };

    const onBlurHandler = (e) => {
        const target = e.target;

        if (validationMessage) {
            setValidationMessage(target.validatioinMessage);
        }
    };

    const onChangeHandler = (e) => {
        const target = e.target;
        target.classList.remove(styles.textInput_initial);
    };

    return (
        <div className={styles.textAreaInput}>
            <textarea
                className={`${styles.textAreaInput_initial} ${styles.textAreaInput_input}`}
                id={name}
                placeholder={name}
                onBlur={onBlurHandler}
                onInvalid={onInvalidHandler}
                onChange={onChangeHandler}
                {...rest}
            />

            {!!validationMessage && (
                <p className={styles.textAreaInput_validationMessage}>
                    {errorText || validationMessage}
                </p>
            )}
        </div>
    );
};

export default TextAreaInput;
