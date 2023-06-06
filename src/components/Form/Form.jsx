import { useState } from 'react';

import styles from './Form.module.scss';
import FooterFormInput from './TextInput';
import TextAreaInput from './TextAreaInput';

const FooterForm2 = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formElement = e.target;
        const isValid = formElement.checkValidity();

        const firstInvalidField = formElement.querySelector(':invalid');

        firstInvalidField?.focus();

        if (isValid) {
            const dataObject = new FormData(formElement);

            console.log(dataObject);
        }
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler} noValidate>
            <div className={styles.form_row}>
                <FooterFormInput className={styles.form_input} type='text' name='name' required />
            </div>
            <div className={styles.form_row}>
                <FooterFormInput className={styles.form_input} type='email' name='email' required />
            </div>
            <div className={styles.form_row}>
                <TextAreaInput
                    className={styles.form_input}
                    name='message'
                    cols={10}
                    rows={3}
                    required
                />
            </div>
            <div className={styles.form_row}>
                <button className={styles.form_submitButton} type='submit'>
                    Send message
                </button>
            </div>
        </form>
    );
};

export default FooterForm2;
