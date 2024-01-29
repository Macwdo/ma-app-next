import MainPage from "@/components/main-page/main-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NavigationCard from "./navigation-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Home = () => {

  return (
    <MainPage title="Home Page">
      <div className="m-3">
        <Card>
          <CardHeader>
            <CardTitle>
              Informações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <NavigationCard
                description="Visualize seus processos"
                link="/lawsuits"
                title="Processos"
              />
            </div>
          </CardContent>
          <CardFooter >
          </CardFooter>
        </Card>
      </div>
    </MainPage>
  );
};

export default Home;
