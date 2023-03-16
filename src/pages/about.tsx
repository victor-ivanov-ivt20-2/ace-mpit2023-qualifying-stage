import { NextPage } from "next"
import Layout from "~/layouts/layout"

const AboutUs: NextPage = () => {

    return (
        <Layout>
            <div className="container pt-[33px] flex flex-col gap-8">
                <div className="pb-1">
                    <span className="font-medium text-base leading-[22px] text-[#64748B]">{">"} Главная</span>
                    <h1 className="text-[32px] font-black text-[#1E293B] leading-[44px]">О нас</h1>
                </div>


                <div>
                    <h1 className="font-extrabold text-2xl leading-[33px] text-dark">Целевая аудитория:</h1>
                    <p className="font-medium text-base leading-[22px] text-dark">Внешние пользователи – частные лица, юридические лица, услугу покупающие.
                        Внутренние пользователи – владельцы гостевых домов напрямую, территориальные агенты, которые предоставляют услуги</p>
                </div>

                <div>
                    <h1 className="font-extrabold text-2xl leading-[33px] text-dark">Проблематика кейсового задания:</h1>
                    <p className="font-medium text-base leading-[22px] text-dark">В удаленных населенных пунктах за редким исключением нет гостиниц в обычном понимании термина «гостиница». Если даже владелец гостевого дома пожелает предлагать гостиничные услуги для путешественников или временное жилье для командированных, то администрировать эти услуги через известные сервисы booking.com сложно в виду слабых каналов связи</p>
                </div>

                <div className="pb-[181px]">
                    <h1 className="font-extrabold text-2xl leading-[33px] text-dark">Сценарий использования результата:</h1>
                    <p className="font-medium text-base leading-[22px] text-dark">Будет предложен веб-сервис к планомерному развитию гостиничных услуг в удаленных населенных пунктах, который бы базировался на построении взаимоотношений по схеме «путешественник – агент – гостевой дом», где основную работу с внешними пользователями возьмут на себя территориальные агенты.</p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUs