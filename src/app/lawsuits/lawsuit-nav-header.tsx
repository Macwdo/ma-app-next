import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/pagination/pagination";

const LawsuitNavHeader = () => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        Status
                        <div className="flex gap-1">
                            <Input placeholder="Pesquise..." className="bg-white"></Input>
                            <Button variant={"default"} type="submit">Pesquisar</Button>
                        </div>
                    </div>
                </CardTitle>
                <CardDescription>Significado de cada status</CardDescription>
            </CardHeader>
            <CardContent>
                <Separator className="mb-4" />
                <div className='flex items-center gap-2 justify-between'>
                    <div className="flex items-center gap-3">
                        <div>Ativo</div>
                        <div className='rounded-full w-8 h-8 bg-blue-400'></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>Esperando</div>
                        <div className='rounded-full w-8 h-8 bg-gray-400'></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>Pausado</div>
                        <div className='rounded-full w-8 h-8 bg-yellow-400'></div>
                    </div>
                    <div className="flex items-center gap-3">
                        Finalizado
                        <div className='rounded-full w-8 h-8 bg-green-400'></div>
                    </div>
                </div>
                <Separator className="mt-4 mb-4" />
            </CardContent>
            <CardFooter className="flex w-auto justify-end">
                <Pagination pages={10} />
            </CardFooter>
        </Card>
    )
}

export default LawsuitNavHeader;