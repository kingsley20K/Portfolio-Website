import {useLanguage} from "../../hooks/useLanguage.ts";

export default function About() {
    const { translations } = useLanguage()

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold">Hi, ich bin Developer</h1>
            <p className="text-gray-400 mt-4">
                {translations.about}
            </p>
        </section>
    )
}