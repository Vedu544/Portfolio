
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="slide-in space-y-4 text-center">
          <Badge className="mb-4" variant="secondary">
            Available for opportunities
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Vedant Kulkarni
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Backend Developer & Research Specialist with expertise in Node.js and MongoDB
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button asChild>
              <a href="mailto:kulkarnivedant03@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/yourGithub" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container px-4 py-20 bg-muted/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Bharati College of Engineering (B.E COMP)</h3>
              <p className="text-muted-foreground">2022 - 2025 (7.11/10 CGPA)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Government Polytechnic Thane (I.T Diploma)</h3>
              <p className="text-muted-foreground">2019 - 2022 (77.38 / 100 Percentage)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Socket.io</Badge>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-20 bg-muted/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">Travelfy</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                Developed and deployed a full-stack travel platform using MERN stack.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">VCDirectory</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A cutting-edge platform to connect startups and investors.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-20">
        <div className="fade-in text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:kulkarnivedant03@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              kulkarnivedant03@gmail.com
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
