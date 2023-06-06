import { useState } from 'react';

import styles from './FooterForm.module.scss';

import Button from '../../UI/Button/Button';

const FooterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameStatus, setNameStatus] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [messageStatus, setMessageStatus] = useState('');

    let nameClass = `${styles.footerForm_input}`;
    if (nameStatus === true) {
        nameClass = `${styles.footerForm_input} ${styles.footerForm_input___success}`;
    } else if (nameStatus === false) {
        nameClass = `${styles.footerForm_input} ${styles.footerForm_input___failure}`;
    }

    let emailClass = `${styles.footerForm_input}`;
    if (emailStatus === true) {
        emailClass = `${styles.footerForm_input} ${styles.footerForm_input___success}`;
    } else if (emailStatus === false) {
        emailClass = `${styles.footerForm_input} ${styles.footerForm_input___failure}`;
    }

    let messageClass = `${styles.footerForm_input}`;
    if (messageStatus === true) {
        messageClass = `${styles.footerForm_input} ${styles.footerForm_input___success}`;
    } else if (messageStatus === false) {
        messageClass = `${styles.footerForm_input} ${styles.footerForm_input___failure}`;
    }

    const errorMessageClasses = [
        `${styles.footerForm_errorMessage} ${styles.footerForm_errorMessage___shown}`,
        `${styles.footerForm_errorMessage} ${styles.footerForm_errorMessage___notShown}`,
    ];

    const validateEmail = (value) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        return pattern.test(value);
    };

    const validateIsNotEmpty = (value) => {
        return !(value.trim().length === 0);
    };

    const handleValidation = () => {
        console.log('HANDLING');
        // is empty handlers
        setNameStatus(validateIsNotEmpty(name));
        setEmailStatus(validateIsNotEmpty(email));
        setMessageStatus(validateIsNotEmpty(message));

        setEmailStatus(validateEmail(email));

        if (nameStatus && emailStatus && messageStatus) {
            setName('');
            setEmail('');
            setMessage('');

            setNameStatus('');
            setEmailStatus('');
            setMessageStatus('');
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        handleValidation();
    };

    const onChangeNameHandler = (e) => {
        setName(e.target.value);
    };

    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onChangeMessageHandler = (e) => {
        setMessage(e.target.value);
    };

    return (
        <form className={styles.footerForm} onSubmit={onSubmitHandler} noValidate>
            <div className={styles.footerForm_row}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={name}
                    className={nameClass}
                    onChange={onChangeNameHandler}
                />
                <p
                    className={
                        nameStatus === false ? errorMessageClasses[0] : errorMessageClasses[1]
                    }
                >
                    Sorry, invalid format here
                </p>
            </div>
            <div className={styles.footerForm_row}>
                <input
                    type='email'
                    name='email'
                    value={email}
                    placeholder='email'
                    className={emailClass}
                    onChange={onChangeEmailHandler}
                />
                <p
                    className={
                        emailStatus === false ? errorMessageClasses[0] : errorMessageClasses[1]
                    }
                >
                    Sorry, invalid format here
                </p>
            </div>
            <div className={styles.footerForm_row}>
                <textarea
                    name='message'
                    id='message'
                    cols='10'
                    rows='3'
                    value={message}
                    placeholder='message'
                    className={messageClass}
                    onChange={onChangeMessageHandler}
                ></textarea>
                <p
                    className={
                        messageStatus === false ? errorMessageClasses[0] : errorMessageClasses[1]
                    }
                >
                    Sorry, invalid format here
                </p>
            </div>
            <div className={styles.footerForm_row}>
                <button className={styles.footerForm_submitButton} type='submit'>
                    Send message
                </button>
            </div>
        </form>
    );
};

export default FooterForm;
