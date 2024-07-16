import { PersonStanding } from "lucide-react";

export default function MainTitle() {
    return(
        <h4 className="flex items-center">
            <PersonStanding size={35} className="text-primary" />
            SupportMe
        </h4>
    )
}