import { useLanguage } from '../../hooks/useLanguage'

export default function Hero() {
    const { translations } = useLanguage()

    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6">

                <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          tracking-tight
          max-w-4xl
        ">
                    {translations.hero_title}
                    {translations.hero_subtitle}
                </h1>

            </div>
        </section>
    )
}