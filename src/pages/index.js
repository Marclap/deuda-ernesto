import Head from 'next/head'
import Card from './components/Card'
import Historial from './components/Historial'

export default function Home() {
    let valores = {
        deuda1: 574180,
        deuda2: 618135,
    }
    return (
        <>
            <Head>
                <title>Deuda: Ernesto Montes</title>
            </Head>
            <section className="relative z-20 h-screen pt-20 pb-12 overflow-hidden bg-colorLinea">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 text-white">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <span className="block mb-2 text-lg font-semibold text-primary">
                                    Ernesto Montes
                                </span>
                                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                    Nuestra deuda
                                </h2>
                                <p className="text-base text-body-color">
                                    Aquí se podrá ver como va el avance de la
                                    deuda, tanto los intereses y los pagos de
                                    esta.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <Card
                            titulo={'Deuda 1'}
                            precio={valores.deuda1}
                            fecha={'28/01/2022'}
                            fechaUltimoPago={''}
                            valorUltimoPago={''}
                        />
                        <Card
                            titulo={'Deuda 2'}
                            precio={valores.deuda2}
                            fecha={'8/02/2022'}
                            fechaUltimoPago={''}
                            valorUltimoPago={''}
                        />
                        <Card
                            titulo={'Deuda total'}
                            precio={valores.deuda1 + valores.deuda2}
                            fecha={''}
                            fechaUltimoPago={''}
                            valorUltimoPago={''}
                        />
                    </div>
                </div>
                <div className="container mx-auto">
                    <Historial />
                </div>
            </section>
        </>
    )
}
