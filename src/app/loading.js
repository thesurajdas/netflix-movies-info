import styles from "@/app/styles/common.module.css"
const Loading = () => {
    return (
        <>
            <section className={styles.loading_section}>
                <div className={styles.loading}><div></div><div></div><div></div><div></div></div>
            </section>
        </>
    )
}
export default Loading;