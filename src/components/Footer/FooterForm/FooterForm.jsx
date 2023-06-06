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
        <form className={styles.footerForm} onSubmit={onSubmitHandler}>
            <div className={styles.footerForm_row}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    className={styles.footerForm_input}
                    onChange={onChangeNameHandler}
                />
            </div>
            <div className={styles.footerForm_row}>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className={styles.footerForm_input}
                    onChange={onChangeEmailHandler}
                />
            </div>
            <div className={styles.footerForm_row}>
                <textarea
                    name='message'
                    id='message'
                    cols='10'
                    rows='3'
                    placeholder='message'
                    className={styles.footerForm_input}
                    onChange={onChangeMessageHandler}
                ></textarea>
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
