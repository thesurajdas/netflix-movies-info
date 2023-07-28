import styles from '@/app/styles/contact.module.css'
import Link from 'next/link';
import { MdForum, MdMail, MdVoiceChat } from "react-icons/md";
const ContactCard = () => {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.grid_card}>
                            <i><MdMail /></i>
                            <h2>Email</h2>
                            <p className={styles.last_para}>Monday to Friday</p>
                            <Link href="mailto:contact@email.com"><p>Send Email -&gt;</p></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i><MdVoiceChat /></i>
                            <h2>Live Chat</h2>
                            <p className={styles.last_para}>Weekdays: 9 AM — 6 PM ET</p>
                            <Link href="#"><p>Chat Now -&gt;</p></Link>
                        </div>
                        <div className={styles.grid_card}>
                            <i><MdForum /></i>
                            <h2>Community Forum</h2>
                            <p className={styles.last_para}>Highly Active Community Forum</p>
                            <Link href="#"><p>Ask The Community -&gt;</p></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard;