
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
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground typewriter w-fit mx-auto">
              Vedant Kulkarni
            </h1>
            <p className="text-xl font-medium tracking-wide text-primary typewriter-delay w-fit mx-auto font-space-grotesk">
              Full Stack Developer
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mt-6">
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
          <Card className="p-6 gradient-card">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Full Stack Developer specializing in the MERN stack, with a strong focus on backend development.
              Currently pursuing my B.E. in Computer Engineering, I have hands-on experience in building scalable web applications
              and conducting business development research. My expertise spans across modern web technologies and I'm always eager
              to learn and implement new solutions.
            </p>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl">Bharat College of Engineering (B.E COMP)</h3>
              <p className="text-muted-foreground">2022 - 2025 (7.11/10 CGPA)</p>
            </Card>
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl">Government Polytechnic Thane (I.T Diploma)</h3>
              <p className="text-muted-foreground">2019 - 2022 (77.38/100 Percentage)</p>
            </Card>
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl">Swami Vivekananad Vidyamandir (SSC)</h3>
              <p className="text-muted-foreground">2009 - 2019 (79/100 Percentage)</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold text-xl">Business Development & Research Specialist Intern</h3>
              <p className="text-muted-foreground mb-2">Younity | June 2023 - July 2023</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Built a strong LinkedIn profile and developed standout strategies</li>
                <li>Conducted in-depth research for projects and improved communication skills</li>
              </ul>
            </Card>
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold text-xl">Web Development Intern</h3>
              <p className="text-muted-foreground mb-2">Dabaotics India Pvt Limited | July 2023 - Aug 2023</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improved API performance by 40%</li>
                <li>Reduced debugging time by 30% using Postman</li>
                <li>Managed and maintained user data in MongoDB</li>
                <li>Collaborated with senior developers to enhance frontend design and usability</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
                <h3 className="font-semibold text-xl mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </Card>
              <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
                <h3 className="font-semibold text-xl mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Sanity.io</Badge>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
                <h3 className="font-semibold text-xl mb-4">Authentication</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Clerk</Badge>
                  <Badge variant="secondary">NextAuth</Badge>
                </div>
              </Card>
              <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
                <h3 className="font-semibold text-xl mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Postman</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-8">
            <Card className="p-6 gradient-card">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/bafb33a4-17b9-4778-99ba-5bbb023e0329.png" 
                  alt="Travelfy" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">Travelify</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A comprehensive travel platform with features for booking tickets for planes, trains, buses, and hotel rooms.
                Includes unique features like "Trip Suggestion" for generating complete trip plans based on budget and "Your
                Accommodation" for property listings.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Search and filter places by cities</li>
                <li>Complete trip planning based on budget and preferences</li>
                <li>Property listing and booking system</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
              </div>
            </Card>

            <Card className="p-6 gradient-card">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/cb19a673-9b6d-49f6-89a2-f8f5bccb61bc.png" 
                  alt="VCDirectory" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">YCDirectory</h3>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A platform connecting startups with investors, featuring advanced registration, search, and filtering options.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Search and filter startups by owner, category, or keywords</li>
                <li>Related Startup recommendations</li>
                <li>Direct investor connection via LinkedIn</li>
                <li>Secure GitHub authentication via NextAuth</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Sanity</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </Card>

            <Card className="p-6 gradient-card">
              <h3 className="font-semibold text-xl mb-4">Flavero</h3>
              <p className="text-muted-foreground mb-4">
                A food ordering platform with cart management and secure authentication.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Multiple food items cart management</li>
                <li>Smooth animations for better user experience</li>
                <li>Secure login using Clerk authentication</li>
                <li>Google and GitHub login options</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Clerk</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Leadership Section */}
      <section className="container px-4 py-20">
        <div className="fade-in max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Certifications & Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl mb-4">Certifications</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Project Management Foundation from LinkedIn
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Frontend Web Development from DevTown
                </li>
              </ul>
            </Card>
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl mb-4">Leadership</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Social Media Head - Led campaigns for cultural events
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
                  Boosted engagement and participation in events
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
