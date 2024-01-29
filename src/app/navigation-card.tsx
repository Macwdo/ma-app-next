import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface NavigationProps {
    title: string;
    description: string;
    link: string;
}

const NavigationCard = (props: NavigationProps) => {
    return (
        <Link href={`${props.link}`}>
            <Card className="hover:bg-secondary ease-in-out delay-150 transition-all">
                <CardHeader>
                    <CardTitle>
                        {`${props.title}`}
                    </CardTitle>
                    <CardDescription>
                        {`${props.description}`}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )

}

export default NavigationCard;