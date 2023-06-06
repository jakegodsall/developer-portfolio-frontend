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
        e.target.preventDefault();

        console.log(e.target);

        setName(e.target.value);
    };

    return (
        <form className={styles.footerForm} onSubmit={onSubmitHandler}>
            <div className={styles.footerForm_row}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    className={styles.footerForm_input}
                />
            </div>
            <div className={styles.footerForm_row}>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    className={styles.footerForm_input}
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
