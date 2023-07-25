import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d707f02bbmsh167a31a1cd85fd4p1bdf18jsn613d2e12d765',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>


                    <h1>Movies & Web Series</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id}{...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie;