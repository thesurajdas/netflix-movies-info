import styles from '@/app/styles/contact.module.css'
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We would love to hear <span> from you </span></h2>
                    <ContactForm />
                </section>
            </div>
        </>
    )
}

export default Contact;