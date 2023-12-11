import MainPage from "@/components/main-page/main-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {

  return (
    <MainPage title="Home Page">
      <Card>
        <CardHeader>
          <CardTitle>
            Olá
          </CardTitle>
          <CardDescription>
            Essa é a descrição da home
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore corporis, velit adipisci ratione ut necessitatibus quam dolorem odit! Itaque placeat voluptatum corrupti laborum cumque dolorum saepe, autem animi porro?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore corporis, velit adipisci ratione ut necessitatibus quam dolorem odit! Itaque placeat voluptatum corrupti laborum cumque dolorum saepe, autem animi porro?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore corporis, velit adipisci ratione ut necessitatibus quam dolorem odit! Itaque placeat voluptatum corrupti laborum cumque dolorum saepe, autem animi porro?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore corporis, velit adipisci ratione ut necessitatibus quam dolorem odit! Itaque placeat voluptatum corrupti laborum cumque dolorum saepe, autem animi porro?
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </MainPage>
  );
};

export default Home;
