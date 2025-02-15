
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink, Mail, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="slide-in space-y-4 text-center">
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/lovable-uploads/ec1ecb38-a883-4c57-884d-f24f8d1898d4.png" alt="Vedant" />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
          </div>
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

      {/* About Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <Card className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Backend Developer with a strong foundation in computer science and engineering. 
              Currently pursuing my B.E. in Computer Engineering, I specialize in building robust server-side 
              applications and have a keen interest in research and development. My experience spans from 
              developing full-stack travel platforms to creating innovative startup directories.
            </p>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Bharati Vidyapeeth College of Engineering (B.E COMP)</h3>
              <p className="text-muted-foreground">2022 - 2025 (7.11/10 CGPA)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Government Polytechnic Thane (I.T Diploma)</h3>
              <p className="text-muted-foreground">2019 - 2022 (77.38%)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Holy Cross Convent High School</h3>
              <p className="text-muted-foreground">2019 (85.40%)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Research Assistant Intern</h3>
              <p className="text-muted-foreground mb-2">IIT Bombay | Jun 2023 - Present</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Led research on cloud computing and edge computing architectures</li>
                <li>Developed innovative solutions for distributed systems</li>
                <li>Collaborated with senior researchers on cutting-edge projects</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl">Full Stack Developer Intern</h3>
              <p className="text-muted-foreground mb-2">Oasis Infobyte | Mar 2023 - Apr 2023</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Developed and maintained web applications using MERN stack</li>
                <li>Implemented responsive designs and optimized performance</li>
                <li>Collaborated with team members using agile methodologies</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/bafb33a4-17b9-4778-99ba-5bbb023e0329.png" 
                  alt="Travelfy" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">Travelfy</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A comprehensive travel platform built with the MERN stack, featuring real-time booking, 
                personalized recommendations, and an intuitive user interface. Implemented secure 
                payment processing and user authentication.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/cb19a673-9b6d-49f6-89a2-f8f5bccb61bc.png" 
                  alt="VCDirectory" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">VCDirectory</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                An innovative platform connecting startups with investors. Features include 
                pitch submission, voting system, and virtual competitions. Implemented real-time 
                updates and secure data handling.
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

      {/* Achievements Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Certifications & Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4">Certifications</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Full Stack Development - MERN Stack
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Cloud Computing Architecture
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Advanced JavaScript Development
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-xl mb-4">Leadership</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Technical Lead - College Development Team
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Student Coordinator - Tech Events
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Research Paper Presenter
                </li>
              </ul>
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
