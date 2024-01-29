import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import LawsuitNavInfoComponent from "@/app/lawsuits/lawsuit-nav-info-component";
import StatusComponent from "./status-component";

interface LawsuitNavProps {
    status: Status;
    lawsuitCode: string;
    lawyer: string;
    client: string;
    adversePart: string;

    createdAt: string;
    finishedAt: string;
    updatedAt: string;
}

export enum Status {
    Active,
    Stopped,
    Finished,
    Waiting
}

const LawsuitNav = (props: LawsuitNavProps) => {
    return (
        <Card className="hover:bg-secondary transition delay-75 hover:cursor-pointer">
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start">
                        <div className="flex gap-x-8 max-lg:items-start">
                            <div className="flex gap-3">
                                <div className="items-center flex gap-2">
                                    {
                                        StatusComponent(props.status)
                                    }
                                </div>
                            </div>
                            <LawsuitNavInfoComponent label="Processo" value={props.lawsuitCode} />
                            <LawsuitNavInfoComponent label="Advogado" value={`Dr (a) ${props.lawyer}`} />
                            <LawsuitNavInfoComponent label="Cliente" value={props.client} />
                            <LawsuitNavInfoComponent label="Parte Adversa" value={props.adversePart} />
                        </div>
                        <div className="flex gap-x-8 max-lg:items-start">
                            <LawsuitNavInfoComponent label="Inciado" value={!!props.createdAt ? props.createdAt: "Sem valor" } />
                            <LawsuitNavInfoComponent label="Atualizado" value={!!props.updatedAt ? props.updatedAt: "Sem valor" } />
                            <LawsuitNavInfoComponent label="Finalizado" value={!!props.finishedAt ? props.finishedAt: "Sem valor" } />
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default LawsuitNav;