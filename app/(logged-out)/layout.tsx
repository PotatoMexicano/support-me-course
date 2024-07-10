import { LightDarkToggle } from "@/components/ui/light-dark-toggle"

type Props = {
    children?: React.ReactNode
}

export default function loggedOutLayout({children}: Props) {
    return(
        <>
        <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
            {children}
        </div>
            <LightDarkToggle className="fixed top-1 p-4 right-0" />
        </>
    )
}