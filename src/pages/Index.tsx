import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink, Mail, ArrowRight } from "lucide-react";
import travelifyImage from '../photos/travelify.png';
import ycDirectoryImage from '../photos/YC directory.png';
import flavero from '../photos/flavero.png'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <div className="slide-in space-y-4 text-center">
          <div className="flex justify-center mb-8">
            <Avatar className="w-52 h-52">
              <AvatarImage
                src="https://cdn2.vectorstock.com/i/1000x1000/61/41/software-language-programmer-avatar-vector-17866141.jpg"
                alt="Vedant"
              />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar>
          </div>
          <Badge className="mb-4" variant="secondary">
            Available for opportunities
          </Badge>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground w-fit mx-auto">
              Vedant Kulkarni
            </h1>
            <p className="text-xl font-medium tracking-wide text-primary w-fit mx-auto font-space-grotesk text-black">
              Full Stack Developer
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mt-6 text-white">
            Full Stack Developer with expertise in Node.js and MongoDB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* //my info */}
            <Button
              variant="outline"
              className="hover:bg-blue-500 hover:text-white transition duration-300 bg-white text-black"
              asChild
            >
              <a href="mailto:kulkarnivedant60@gmail.com">
                <Mail />
                Gmail
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-500 hover:text-white transition duration-300 bg-white text-black"
              asChild
            >
              <a
                href="https://github.com/Vedu544"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Github
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-500 hover:text-white transition duration-300 bg-white text-black"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/vedant-kulkarni-10079b203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-500 hover:text-white transition duration-300 bg-white text-black"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1g_lFDTjZiZWI66L_rCAmVpbZZtRGvQan/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-500 hover:text-white transition duration-300 bg-white text-black"
              asChild
            >
              <a href="tel:7506295887">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.97825 3.99999c-.3729 0-.74128.08169-1.07926.23934-.32394.15109-.61243.36845-.84696.63786-1.81892 1.82189-2.35302 3.87423-1.89899 5.93671.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0176 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.7081.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6137-.6398-.8483l-1.2098-1.2106c-.5043-.5041-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6181c-.1512.1513-.3563.2363-.5701.2363-.2138 0-.4189-.085-.5701-.2363l-1.85336-1.8545c-.15117-.1513-.23609-.3565-.23609-.5704 0-.214.08493-.4192.23613-.5705l.61812-.61851c.5037-.50461.7867-1.18868.7867-1.90191s-.2833-1.39767-.7871-1.90228L8.90499 4.8778c-.23462-.26969-.5233-.48727-.84749-.63847-.33798-.15765-.70636-.23934-1.07925-.23934Z" />
                  <path
                    fill-rule="evenodd"
                    d="M18.0299 8.98132c0 .55229-.4477 1-1 .99999l-3.03-.00002c-.5522 0-1-.44772-1-1V5.99995c0-.55229.4478-1 1-1 .5523 0 1 .44771 1 1 1v.58112l3.3184-3.29111c.3921-.38892 1.0253-.38631 1.4142.00582.3889.39213.3863 1.02529-.0058 1.4142l-3.2984 3.27133h.6016c.5523.00001 1 .44773 1 1.00001Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Call Me - 7506295887
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
              🚀 <strong>Full Stack Developer | MERN Stack | Backend Specialist</strong> 
              <br></br>
              I'm
              <strong> Vedant Kulkarni</strong>, a passionate <strong>Full Stack Developer</strong>
              specializing in the <strong>MERN stack</strong>, with a strong focus on backend
              development and scalable web applications. Currently pursuing my
              <strong> B.E. in Computer Engineering</strong>, I have hands-on experience in
              <strong> API optimization, database management, and business research</strong>.
              <br></br>
              <br></br>
              💡 <strong>What I Do Best:</strong> 
              <ul className="list-disc list-inside">
                <li>Build <strong>scalable, user-friendly web apps</strong></li>
                <li>Optimize <strong>backend performance & APIs</strong></li>
                <li>Explore <strong>Next.js, Tailwind CSS & modern web technologies</strong></li>
              </ul>
              I also have experience in <strong>Web Development</strong>, effectively bridging
              the gap between <strong>technology and business needs</strong>. Let's connect
              and create something remarkable! 
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
              <h3 className="font-semibold text-xl">
                Bharat College of Engineering (B.E COMP)
              </h3>
              <p className="text-muted-foreground">
                2022 - 2025 (7.11/10 CGPA)
              </p>
            </Card>
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl">
                Government Polytechnic Thane (I.T Diploma)
              </h3>
              <p className="text-muted-foreground">
                2019 - 2022 (77.38/100 Percentage)
              </p>
            </Card>
            <Card className="p-6 gradient-card hover:scale-[1.02] transition-transform">
              <h3 className="font-semibold text-xl">
                Swami Vivekananad Vidyamandir (SSC)
              </h3>
              <p className="text-muted-foreground">
                2009 - 2019 (79/100 Percentage)
              </p>
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
              <h3 className="font-semibold text-xl">
                Business Development & Research Specialist Intern
              </h3>
              <p className="text-muted-foreground mb-2">
                Younity | June 2023 - July 2023
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Built a strong LinkedIn profile and developed standout
                  strategies
                </li>
                <li>
                  Conducted in-depth research for projects and improved
                  communication skills
                </li>
              </ul>
            </Card>
            <Card className="p-6 gradient-card">
              <h3 className="font-semibold text-xl">Web Development Intern</h3>
              <p className="text-muted-foreground mb-2">
                Dabaotics India Pvt Limited | July 2023 - Aug 2023
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Improved API performance by 40%</li>
                <li>Reduced debugging time by 30% using Postman</li>
                <li>Managed and maintained user data in MongoDB</li>
                <li>
                  Collaborated with senior developers to enhance frontend design
                  and usability
                </li>
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
                  src={travelifyImage}
                  alt="Travelify"
                  className="w-full h-96 lg:object-cover rounded-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">Travelify</h3>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/Vedu544/Travelify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A comprehensive travel platform with features for booking
                tickets for planes, trains, buses, and hotel rooms. Includes
                unique features like <b>"Trip Suggestion"</b> for generating complete
                trip plans based on budget and "Your Accommodation" for property
                listings.
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
                  src={ycDirectoryImage}
                  alt="YC Directory"
                  className="w-full h-96 lg:object-cover rounded-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">YCDirectory</h3>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/Vedu544/YCDirectory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>A platform connecting startups with investors, featuring
                advanced registration, search, and filtering options.</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>
                  Search and filter startups by owner, category, or keywords
                </li>
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
              <div className="mb-6">
              <img
                  src={flavero}
                  alt="Travelify"
                  className="w-full h-96 lg:object-cover rounded-lg hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-xl">Flavero</h3>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/Vedu544/flavero"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                A food ordering platform with cart management and secure
                authentication.
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                <li>Multiple food items cart management</li>
                <li>Smooth animations for better user experience</li>
                <li><strong>Secure login using Clerk authentication</strong></li>
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
          <h2 className="text-3xl font-bold mb-8">
            Certifications & Leadership
          </h2>
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
          <p className="text-muted-foreground mb-8 text-black">
            I'm always interested in hearing about new opportunities and
            collaborations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
