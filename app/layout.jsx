import Providers from "../components/Providers";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700']
})

export const metadata = {
    title: 'Todo App',
    description: "An example of NextJS app with 100% accessible lighthouse score",
    themeColor: '#673ab7',
    manifest: "/static/manifest.json"

}

export default function RootLayout({ children }) {
    return <html lang="en-gb" className={roboto.className}>
        <Providers>
            <body>
                {children}
            </body>
        </Providers>
    </html>
}