import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Movie = async ({ params }) => {
    const id = params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d707f02bbmsh167a31a1cd85fd4p1bdf18jsn613d2e12d765',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>Category / <span>{main_data.type}</span></h2>
            <div className={styles.card_selection}>
                <div>
                <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}></Image>
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;